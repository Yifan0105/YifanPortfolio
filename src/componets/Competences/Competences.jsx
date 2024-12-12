import React from 'react';
import styles from './Competences.module.css';
import skills from '../../data/skills.json';
import techC from '../../data/techC.json';
import { translate } from '../../i18n/i18n';  

export const Competences = ({ lang }) => {
  return (
    <section id="competences" className={styles.container}>
      <h2 className={styles.title}>
        {translate(lang, 'competences.title')} 
      </h2>
      <div className={styles.techSkillscontainer}>
        <h2 className={styles.titleA}>
          ☆ {translate(lang, 'competences.techSkills')}
        </h2>
        <div className={styles.content}>
          <div className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={skill.imageSrc} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>  
                  <p>{skill.skills}</p>  
                </div>
              );
            })}
          </div>
          <ul className={styles.techC}>
            {techC.map((techCItem, id) => {
              return (
                <li key={id} className={styles.techCItem}>
                  <div className={styles.techCItemDetails}>
                    <h3>{translate(lang, techCItem.title[lang])}:</h3> 
                    <p>{translate(lang, techCItem.skills[lang])}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.softSkillsContainer}>
        <h2 className={styles.titleA}>
          ☆ {translate(lang, 'competences.softSkills')} 
        </h2>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h3>{translate(lang, 'competences.learningAbility')}</h3>
          </div>
          <div className={styles.card}>
            <h3>{translate(lang, 'competences.teamwork')}</h3>
          </div>
          <div className={styles.card}>
            <h3>{translate(lang, 'competences.initiative')}</h3>
          </div>
          <div className={styles.card}>
            <h3>{translate(lang, 'competences.organization')}</h3>
          </div>
          <div className={styles.card}>
            <h3>{translate(lang, 'competences.problemSolving')}</h3>
          </div>
          <div className={styles.card}>
            <h3>{translate(lang, 'competences.internationalEnvironment')}</h3>
          </div>
          <div className={styles.card}>
            <h3>{translate(lang, 'competences.adaptability')}</h3>
          </div>
          <div className={styles.card}>
            <h3>{translate(lang, 'competences.communication')}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
