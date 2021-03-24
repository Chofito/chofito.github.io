import styles from './pagecontainer.module.scss';

type PageContainerProps = {
  children: React.ReactNode;
}

const PageContainer = ({
  children,
}: PageContainerProps) => (
  <div className={styles.pageContainer}>{children}</div>
)

export default PageContainer;
