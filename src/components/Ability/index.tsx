import styles from './ability.module.scss'

type AbilityProps = {
  title: string;
  description: string;
  /**
   * SVG icon from React-Icons
   * */
  icon: React.ReactNode;
}

const Ability = ({
  title,
  description,
  icon
}: AbilityProps) => {
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

export default Ability;
