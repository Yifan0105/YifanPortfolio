import React from 'react';
import styles from './Experiences.module.css';
import experience from "../../data/experience.json";
import { translate } from '../../i18n/i18n';

export const Experiences = ({ lang }) => {
  return (
    <section className={styles.container} id="experiences">
      <h2 className={styles.title}>
        {translate(lang, 'experiences.title')}
      </h2>
      <div className={styles.content}>
        <ul className={styles.experience}>
          {experience.map((experienceItem, id) => {
            return (
              <li key={id} className={styles.experienceItem}>
                <img
                  src={experienceItem.imageSrc}
                  alt={`${experienceItem.organisation[lang] || experienceItem.organisation.fr} Logo`}
                />
                <div className={styles.experienceItemDetails}>
                  <h3>
                    {`${experienceItem.role[lang] || experienceItem.role.fr} - ${experienceItem.organisation[lang] || experienceItem.organisation.fr} - ${experienceItem.location[lang] || experienceItem.location.fr}`}
                  </h3>
                  <p>{`${experienceItem.startDate} - ${experienceItem.endDate}`}</p>
                  <p className={styles.keywordText}>
                    ☆ {experienceItem.keyword[lang] || experienceItem.keyword.fr}
                  </p>
                  <ul>
                    {experienceItem.experiences[lang].map((exp, id) => {
                      return <li key={id}>{exp}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
