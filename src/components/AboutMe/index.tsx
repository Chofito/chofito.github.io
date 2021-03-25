import { Element } from 'react-scroll';
import {
  MdEmail,
  FaTwitter,
  FaLinkedin,
  FaGithub
} from 'react-icons/all';

import Button from '../Button';
import SectionContainer from '../SectionContainer';
import SectionTitle from '../SectionTitle';

import { ReactComponent as SVGDeveloper } from '../../assets/developer.svg';
import styles from './aboutme.module.scss';
import ContactCard from '../ContactCard';
import {openInNewTab} from '../../utils';
import {cvDownloadLink} from '../../settings';

const AboutMe = () => {
  const downloadCv = () => openInNewTab(cvDownloadLink);

  return (
    <Element name="aboutMe">
      <SectionContainer>
        <SectionTitle>About Me</SectionTitle>
        <div className={styles.infoContainer}>
          <div className={styles.svgContainer}>
            <SVGDeveloper />
          </div>
          <div className={styles.personalResume}>
            <p>
              I'm a Junior Developer from Guatemala City with experience on Front-End, Mobile apps and backend focused on innovation, code
              quality and creating new solutions, I love videogames, the universe biggest mysteries and food 🌠🎮🍕
            </p>
            <Button onClick={downloadCv} color="primary">
              Download CV
            </Button>
          </div>
        </div>
        <Element name="contact">
          <div className={styles.contact}>
            <ContactCard contactInfo="rjroblesq@gmail.com" link="mailto:rjrobles@gmail.com" icon={<MdEmail className={styles.gmail} size={48} />} />
            <ContactCard contactInfo="@ChofitoRobles" link="https://twitter.com/ChofitoRobles" icon={<FaTwitter className={styles.twitter} size={48} />} />
            <ContactCard contactInfo="@chofitorobles" link="https://www.linkedin.com/in/chofitorobles/" icon={<FaLinkedin className={styles.linkedin} size={48} />} />
            <ContactCard contactInfo="@Chofito" link="https://www.github.com/Chofito" icon={<FaGithub className={styles.github} size={48} />} />
          </div>
        </Element>
      </SectionContainer>
    </Element>
  );
}

export default AboutMe;
