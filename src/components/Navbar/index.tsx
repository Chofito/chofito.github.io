import { RiSpaceShipLine, FaGithub, IoMenu } from 'react-icons/all';

import { githubUrl } from '../../settings';
import { openInNewTab } from '../../utils';

import styles from './navbar.module.scss';
import {useState} from 'react';

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
          <span className={styles.linkItem}>About Me</span>
          <span className={styles.linkItem}>Portfolio</span>
          <span className={styles.linkItem}>Contact</span>
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
        <span className={styles.panelItem}>About Me</span>
        <span className={styles.panelItem}>Portfolio</span>
        <span className={styles.panelItem}>Contact</span>
        <span className={styles.panelItem} onClick={() => openInNewTab(githubUrl)}>
          <FaGithub size={24} />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
