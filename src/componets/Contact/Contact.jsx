import React from 'react';
import styles from './Contact.module.css';
import { translate } from '../../i18n/i18n'; 

export const Contact = ({ lang }) => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>{translate(lang, 'contact.title', 'Contact')}</h2>
        <p>{translate(lang, 'contact.subtitle', 'N’hésitez pas à me contacter !')}</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={"./assets/contact/emailIcon.png"} alt="Email icon" />
          <a href="mailto:yifanshi0105@gmail.com">yifanshi0105@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={"./assets/contact/linkedinIcon.png"} alt="LinkedIn icon" />
          <a
            href="https://www.linkedin.com/in/yifan-shi-55278a200/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/yifan-shi-55278a200/
          </a>
        </li>
        <li className={styles.link}>
          <img src={"./assets/contact/githubIcon.png"} alt="Github icon" />
          <a
            href="https://github.com/Yifan0105"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/Yifan0105
          </a>
        </li>
      </ul>
    </footer>
  );
};
