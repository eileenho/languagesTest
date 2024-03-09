import React from 'react';
import { useTranslation } from 'react-i18next';

const LocaleSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLocale = (newLocale: string) => {
    i18n.changeLanguage(newLocale);
  };

  return (
    <div>
      <button onClick={() => changeLocale('en')}>English</button>
      <button onClick={() => changeLocale('zh')}>Mandarin</button>
    </div>
  );
};

export default LocaleSwitcher;
