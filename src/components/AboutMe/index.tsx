import { ReactComponent as SVGDeveloper } from '../../assets/developer.svg';

import styles from './aboutme.module.scss';
import SectionTitle from '../SectionTitle';

const AboutMe = () => {
  return (
    <div className={styles.aboutMeContainer}>
      <SectionTitle>About Me</SectionTitle>
      <div className={styles.svgContainer}>
        <SVGDeveloper />
      </div>
    </div>
  );
}

export default AboutMe;
