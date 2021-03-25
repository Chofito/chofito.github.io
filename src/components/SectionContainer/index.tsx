import styles from './sectioncontainer.module.scss';

type SectionContainerProps = {
  children: React.ReactNode;
}

const SectionContainer = ({
  children,
}: SectionContainerProps) => (
  <div className={styles.sectionContainer}>{children}</div>
);

export default SectionContainer;
