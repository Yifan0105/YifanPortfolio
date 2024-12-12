import React from 'react';
import styles from './Profil.module.css';
import { translate } from '../../i18n/i18n';

export const Profil = ({ lang }) => {
  const description = translate(lang, 'profil.description');
  // 根据语言选择对应的简历文件
  const cvFile = lang === 'fr' ? 'YifanFrCV2024.pdf' : 'YifanEnCV2024.pdf';

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{translate(lang, 'profil.title')}</h1>
        <div className={styles.description}>
          {description.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        {/* 根据语言动态设置简历下载链接 */}
        <a href={cvFile} download className={styles.contactBtn}>
          {translate(lang, 'profil.downloadCV')}
        </a>
      </div>
      <img
        src="./assets/profil/profilImage.jpg"
        alt={translate(lang, 'profil.altText')}
        className={styles.profilImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
