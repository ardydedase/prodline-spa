import React from 'react';
import { BpkCode } from 'bpk-component-code';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

import STYLES from './App.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const App = () => (
  <div className={c('App')}>
    <header className={c('App__header')}>
      <div className={c('App__header-inner')}>
        <BpkText tagName="h1" textStyle="xxl" className={c('App__heading')}>Welcome to React + Backpack</BpkText>
      </div>
    </header>
    <main className={c('App__main')}>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>    
    </main>
  </div>
);

export default App;
