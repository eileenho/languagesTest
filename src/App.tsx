import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import LocaleSwitcher from './localeButton';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <LocaleSwitcher />
        <p>{t('greeting')}</p>
        <p>{t('content')}</p>

      </header>
    </div>
  );
}

export default App;
