import React from 'react';
import styles from './Formations.module.css';
import { translate } from '../../i18n/i18n';

export const Formations = ({ lang }) => {
  return (
    <section id="formations" className={styles.container}>
      <h2 className={styles.title}> {translate(lang, 'formations.title')} </h2>
      <div className={styles.content}>
        <img src="./assets/formations/formation.JPG" alt="2024 Graduation" className={styles.formationImage}/>
        <ul className={styles.formationItems}>
          <li className={styles.formationItem}>
            <img src="./assets/formations/UT1.png" alt="UT1 icon" className={styles.formationUniversityImage}/>
              <div className={styles.formationItemText}>
                <h3>{translate(lang, 'formations.master.title')}</h3>
                {translate(lang, 'formations.master.university')}
                <br />
                {translate(lang, 'formations.master.location')} | {translate(lang, 'formations.master.dates')}
                <br /><br />
                <p className={styles.keywordText}>{translate(lang, 'formations.master.specialization1')}</p>
                {translate(lang, 'formations.master.courses')}
                <p className={styles.keywordText}>{translate(lang, 'formations.master.specialization2')}</p>
                {translate(lang, 'formations.master.courses2')}
              </div>
          </li>
          <li className={styles.formationItem}>
            <img src="./assets/formations/UT1.png" alt="UT1 icon" className={styles.formationUniversityImage}/> 
              <div className={styles.formationItemText}>
                <h3>{translate(lang, 'formations.preparatory.title')}</h3>
                {translate(lang, 'formations.preparatory.university')}
                <br />
                {translate(lang, 'formations.preparatory.location')} | {translate(lang, 'formations.preparatory.dates')}
              </div>
          </li>
          <li className={styles.formationItem}>
            <img src="./assets/formations/CUEB.png" alt="CUEB icon" className={styles.formationUniversityImage}/>
              <div className={styles.formationItemText}>
                <h3>{translate(lang, 'formations.bachelor.title')}</h3>
                {translate(lang, 'formations.bachelor.university')}
                <br />
                {translate(lang, 'formations.bachelor.location')} | {translate(lang, 'formations.bachelor.dates')}
              </div>
          </li>
          <li className={styles.formationItem}>
            <img src="./assets/formations/DCU.png" alt="DCU icon" className={styles.formationUniversityImage}/>
              <div className={styles.formationItemText}>
                <h3>{translate(lang, 'formations.exchange.title')}</h3>
                {translate(lang, 'formations.exchange.university')}
                <br />
                {translate(lang, 'formations.exchange.location')} | {translate(lang, 'formations.exchange.dates')}
                <p></p>
              </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

