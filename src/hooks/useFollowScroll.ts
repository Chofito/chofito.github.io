import { type RefObject, useEffect, useRef } from 'react';

const BOTTOM_THRESHOLD = 80;

function getScrollParent(element: HTMLElement): HTMLElement | null {
  let parent = element.parentElement;

  while (parent) {
    const { overflowY } = getComputedStyle(parent);
    if (
      overflowY === 'auto' ||
      overflowY === 'scroll' ||
      overflowY === 'overlay'
    ) {
      return parent;
    }
    parent = parent.parentElement;
  }

  return null;
}

function isNearBottom(element: HTMLElement): boolean {
  const distance =
    element.scrollHeight - element.scrollTop - element.clientHeight;
  return distance <= BOTTOM_THRESHOLD;
}

export function useFollowScroll(
  contentRef: RefObject<HTMLElement | null>,
  enabled = true,
) {
  const pinnedRef = useRef(true);
  const frameRef = useRef(0);

  useEffect(() => {
    const content = contentRef.current;
    if (!content || !enabled) {
      return;
    }

    const scrollParent = getScrollParent(content);
    if (!scrollParent) {
      return;
    }

    pinnedRef.current = isNearBottom(scrollParent);

    const onScroll = () => {
      pinnedRef.current = isNearBottom(scrollParent);
    };

    const scrollToBottom = () => {
      if (!pinnedRef.current) {
        return;
      }

      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        if (!pinnedRef.current) {
          return;
        }
        scrollParent.scrollTop = scrollParent.scrollHeight;
      });
    };

    scrollParent.addEventListener('scroll', onScroll, { passive: true });

    const resizeObserver = new ResizeObserver(scrollToBottom);
    resizeObserver.observe(content);

    scrollToBottom();

    return () => {
      scrollParent.removeEventListener('scroll', onScroll);
      resizeObserver.disconnect();
      cancelAnimationFrame(frameRef.current);
    };
  }, [contentRef, enabled]);
}
