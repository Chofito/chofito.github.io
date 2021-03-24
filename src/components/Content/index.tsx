import styles from './content.module.scss';

type ContentProps = {
  children: React.ReactNode;
}

const Content = ({
  children,
}: ContentProps) => (
  <div className={styles.cardContent}>{children}</div>
);

export default Content;
