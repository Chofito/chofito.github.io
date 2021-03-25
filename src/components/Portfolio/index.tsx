import { Element } from 'react-scroll';
import SectionTitle from '../SectionTitle';
import SectionContainer from '../SectionContainer';

import { ReactComponent as UnderConstruction } from '../../assets/underconstruction.svg';
import styles from './portfolio.module.scss';

const Portfolio = () => (
  <Element name="portfolio">
    <SectionContainer>
      <SectionTitle>
        Portfolio
      </SectionTitle>
      <div className={styles.portfolioContainer}>
        <UnderConstruction />
        WIP section to share with you some examples of what can I do, but for now you can access to the source code of
        my Open Source Personal Website :)
        <a href={`https://github.com/chofito/chofito.github.io`} rel="noreferrer" target="_blank">Click Here</a>
      </div>
    </SectionContainer>
  </Element>
);

export default Portfolio