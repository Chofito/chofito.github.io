import styles from './sectiontitle.module.scss';

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle = ({
  children,
  className
}: SectionTitleProps) => (
  <div className={`${styles.title} ${className ? className : ''}`}>
    <span>{children}</span>
  </div>
);

export default SectionTitle;
