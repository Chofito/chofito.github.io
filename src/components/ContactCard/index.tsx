import styles from './contactcard.module.scss';
import { openInNewTab } from '../../utils';

type ContactCardProps = {
  icon: React.ReactNode;
  contactInfo?: string;
  link?: string;
  name?: string;
}

const ContactCard = ({
  icon,
  contactInfo,
  link,
  name
}: ContactCardProps) => {
  const openLink = () => {
    if (link) openInNewTab(link)
  }

  return (
    <div onClick={() => openLink()} className={styles.container}>
      {icon}
      {name && <span className={styles.name}>{name}</span>}
      {contactInfo && <span className={styles.contactInfo}>{contactInfo}</span>}
    </div>
  );
}

export default ContactCard;
