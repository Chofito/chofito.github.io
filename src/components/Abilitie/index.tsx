import styles from './abilitie.module.scss'

type AbilitieProps = {
  title: string;
  description: string;
  /**
   * SVG icon from React-Icons
   * */
  icon: React.ReactNode;
}

const Abilitie = ({
  title,
  description,
  icon
}: AbilitieProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>{icon}</div>
      <div className={styles.descriptionContainer}>
        <div className={styles.title}>{title}</div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default Abilitie;
