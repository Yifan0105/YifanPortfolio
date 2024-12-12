import style from './App.module.css';
import {Navbar} from './componets/Navbar/Navbar'; 
import {Profil} from './componets/Profil/Profil';
import {Competences} from './componets/Competences/Competences';
import {Experiences} from './componets/Experiences/Experiences';
import {Formations} from './componets/Formations/Formations';
import {Contact} from './componets/Contact/Contact';
import {ExperiencesBA} from './componets/ExperiencesBA/ExperiencesBA';
import React, { useState } from'react';

function App() {

  const [lang, setLang] = useState('fr'); // 默认语言为法语

  return (
    <div className={style.App}>
      {/* 传递语言状态和切换语言函数给 Navbar */}
      <Navbar lang={lang} setLang={setLang} />
      {/* 将语言状态传递给每个子组件 */}
      <Profil lang={lang} />
      <Formations lang={lang} />
      <Experiences lang={lang} />
      <ExperiencesBA lang={lang} />
      <Competences lang={lang} />
      <Contact lang={lang} />
    </div>
  );

}

export default App
