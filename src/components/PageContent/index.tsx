import styles from './pagecontent.module.scss';

type PageContentProps = {
  children: React.ReactNode;
}

const PageContent = ({
  children
}: PageContentProps) => (
  <div className={styles.pageContent}>{children}</div>
);

export default PageContent;