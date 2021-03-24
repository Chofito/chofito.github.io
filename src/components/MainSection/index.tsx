import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';

import styles from './mainsection.module.scss';
import personalPhoto from '../../assets/personalphoto.jpg';
import Button from '../Button';

const MainSection = () => (
  <div className={styles.container}>
    <div className={`${styles.area} ${styles.photoArea}`}>
      <div className={styles.photoContainer}>
        <img src={personalPhoto} alt="Logo" />
      </div>
    </div>
    <div className={`${styles.area} ${styles.infoArea}`}>
      <div className={styles.name}>Rodolfo Robles</div>
      <div className={styles.typewriterResume}>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            deleteSpeed: 25,
            delay: 75,
          }}
          onInit={(typewriter) => {
            typewriter.typeString(`I'm a Front-End Developer`)
              .pauseFor(1100)
              .changeDeleteSpeed(25)
              .deleteChars(19)
              .pauseFor(250)
              .typeString(`Mobile Developer`)
              .pauseFor(1100)
              .deleteChars(16)
              .pauseFor(250)
              .typeString(`Back-End Developer`)
              .pauseFor(1100)
              .start()
          }}
        />
        {/*<p>
          Programador Junior con amplios conocimientos en desarrollo web, móvil y backend, apasionado con la innovación
          y creación de soluciones, amante de los videojuegos y de los grandes misterios del universo 🌠🎮🍕
        </p>*/}
      </div>
      <Button onClick={() => {}} color="primary">
        Contactar
      </Button>
    </div>
    <div className={styles.mouseContainer}>
      <Link to="abilities" offset={-60}>
        <div className={styles.movingMouseHolder}>
          <div className={styles.mouse}>
            <div className={styles.mouseButton}>&nbsp;</div>
          </div>
          <div className={styles.mouseText}>SCROLL DOWN</div>
        </div>
      </Link>
    </div>
  </div>
);

export default MainSection;
