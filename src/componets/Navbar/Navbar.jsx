import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { translate } from '../../i18n/i18n';  // 导入翻译函数



export const Navbar = ({ lang, setLang }) => {
    // REACT HOOK: State to manage the menu open/close state
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            {/* 独立的语言切换功能 */}
            <div className={styles.languageSwitcher}>
                <button
                    className={`${styles.langBtn} ${lang === 'fr' ? styles.active : ''}`}
                    onClick={() => setLang('fr')}
                >
                    FR
                </button>
                <button
                    className={`${styles.langBtn} ${lang === 'en' ? styles.active : ''}`}
                    onClick={() => setLang('en')}
                >
                    EN
                </button>
            </div>

            <nav className={styles.navbar}>
                <a className={styles.title}>{translate(lang, 'title')}</a> {/* 动态翻译标题 */}
                <div className={styles.menu}>
                    <img
                        className={styles.menuBtn}
                        // 如果菜单打开显示关闭图标
                        src={menuOpen ? "./assets/nav/closeIcon.png" : "./assets/nav/menuIcon.png"}
                        alt="menu-button"
                        onClick={() => setMenuOpen(!menuOpen)} // 点击按钮时切换菜单的显示/隐藏状态
                    />
                    <ul
                        className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} // 如果菜单打开，应用 menuOpen 样式
                        onClick={() => setMenuOpen(false)}
                    >
                        <li><a href="#formations">{translate(lang, 'navbar.formations')}</a></li> {/* 动态翻译菜单项 */}
                        <li><a href="#experiences">{translate(lang, 'navbar.experiences')}</a></li>
                        <li><a href="#competences">{translate(lang, 'navbar.competences')}</a></li>
                        <li><a href="#contact">{translate(lang, 'navbar.contact')}</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
