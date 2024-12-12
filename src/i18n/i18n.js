import en from './en.json';
import fr from './fr.json';

const translations = {
  en,
  fr,
};

export function translate(lang, key) {
  const keys = key.split('.'); // 处理嵌套结构的键
  let result = translations[lang];
  for (const k of keys) {
    result = result?.[k]; // 深度查找
  }
  return result || key; // 如果找不到翻译，返回键本身
}
