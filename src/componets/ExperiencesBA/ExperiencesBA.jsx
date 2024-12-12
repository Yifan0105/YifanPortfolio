import React from 'react';
import styles from './ExperiencesBA.module.css';
import experience from "../../data/experienceBA.json";
import { translate } from '../../i18n/i18n';

export const ExperiencesBA = ({ lang }) => {  // 接收 lang 属性来处理多语言
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        {translate(lang, 'experiencesBA.title')}  {/* 使用翻译函数来多语言切换 */}
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
                    {`${experienceItem.role[lang] || experienceItem.role.fr} - ${experienceItem.organisation[lang] || experienceItem.organisation.fr} - ${experienceItem.location[lang] || experienceItem.location.fr}`}  {/* 多语言支持 */}
                  </h3>
                  <p>{`${experienceItem.startDate[lang] || experienceItem.startDate.fr} - ${experienceItem.endDate[lang] || experienceItem.endDate.fr}`}</p>  
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
}