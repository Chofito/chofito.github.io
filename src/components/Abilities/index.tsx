import { Element } from 'react-scroll';

import Abilitie from '../Abilitie';

import abilities from '../../data/abilities';
import styles from './abilities.module.scss';
import SectionTitle from '../SectionTitle';

const Abilities = () => {
  return (
    <Element name="abilities">
      <div className={styles.container}>
        <SectionTitle>What I Do</SectionTitle>
        <div className={styles.abilitiesContainer}>
          {abilities.map(x => <Abilitie title={x.title} description={x.description} icon={x.icon} />)}
        </div>
      </div>
    </Element>
  );
}

export default Abilities;
