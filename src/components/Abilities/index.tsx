import { Element } from 'react-scroll';
import { Col, Row } from 'react-flexbox-grid';
import {
  FaNodeJs,
  FaPython,
  FaReact,
  SiAndroidstudio,
  SiDjango,
  SiDotNet,
  SiKotlin, SiPostgresql,
  SiTypescript
} from 'react-icons/all';

import Ability from '../Ability';
import SectionTitle from '../SectionTitle';
import SectionContainer from '../SectionContainer';

import abilities from '../../data/abilities';
import styles from './abilities.module.scss';

const Abilities = () => {
  return (
    <Element name="abilities">
      <SectionContainer>
        <SectionTitle>What I Do</SectionTitle>
        <Row>
          {
            abilities.map(x => (
              <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                <Ability title={x.title} description={x.description} icon={x.icon} />
              </Col>
            ))
          }
        </Row>
        <Row>
          <Col xs={6} sm={4} md={4} lg={3} xl={3}>
            <div className={styles.techLogo}><FaReact size={48} /></div>
          </Col>
          <Col xs={6} sm={4} md={4} lg={3} xl={3}>
            <div className={styles.techLogo}><FaPython size={48} /></div>
          </Col>
          <Col xs={6} sm={4} md={4} lg={3} xl={3}>
            <div className={styles.techLogo}><SiDotNet size={48} /></div>
          </Col>
          <Col xs={6} sm={4} md={4} lg={3} xl={3}>
            <div className={styles.techLogo}><SiKotlin size={48} /></div>
          </Col>
          <Col xs={6} sm={4} md={4} lg={3} xl={3}>
            <div className={styles.techLogo}><SiAndroidstudio size={48} /></div>
          </Col>
          <Col xs={6} sm={4} md={4} lg={3} xl={3}>
            <div className={styles.techLogo}><SiDjango size={48} /></div>
          </Col>
          <Col xs={6} sm={4} md={4} lg={3} xl={3}>
            <div className={styles.techLogo}><FaNodeJs size={48} /></div>
          </Col>
          <Col xs={6} sm={4} md={4} lg={3} xl={3}>
            <div className={styles.techLogo}><SiTypescript size={48} /></div>
          </Col>
          <Col xs={6} sm={4} md={4} lg={3} xl={3}>
            <div className={styles.techLogo}><SiPostgresql size={48} /></div>
          </Col>
        </Row>
      </SectionContainer>
    </Element>
  );
}

export default Abilities;
