import { useState } from 'react';
import { RiSpaceShipLine } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-scroll';

import { githubUrl } from '../../settings';
import { openInNewTab } from '../../utils';

import styles from './navbar.module.scss';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={`${styles.navbarItems} ${styles.leftItems}`}>
          <div className={styles.mainItem}>
            <RiSpaceShipLine size={32} />
            <span>Chofito</span>
          </div>
        </div>
        <div className={`${styles.navbarItems} ${styles.rightItems}`}>
          <Link to="aboutMe" offset={-75}><span className={styles.linkItem}>About Me</span></Link>
          <Link to="portfolio" offset={-75}><span className={styles.linkItem}>Portfolio</span></Link>
          <Link to="contact" offset={-200}><span className={styles.linkItem}>Contact</span></Link>
          <span className={styles.linkItem} onClick={() => openInNewTab(githubUrl)}>
            <FaGithub size={24} />
          </span>
        </div>

        <div className={`${styles.navbarItems} ${styles.sidebarButtonRight}`}>
          <span onClick={() => setOpen(!open)}>
            <IoMenu size={32} />
          </span>
        </div>
      </div>
      <div className={`${styles.navbarPanelContainer} ${open ? '' : styles.hidePanel}`}>
        <Link to="aboutMe" offset={-75}><span className={styles.panelItem}>About Me</span></Link>
        <Link to="portfolio" offset={-75}><span className={styles.panelItem}>Portfolio</span></Link>
        <Link to="contact" offset={-200}><span className={styles.panelItem}>Contact</span></Link>
        <span className={styles.panelItem} onClick={() => openInNewTab(githubUrl)}>
          <FaGithub size={24} />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
