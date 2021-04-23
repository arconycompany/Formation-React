import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import CartCount from 'components/CartCount';
import fr from '../translations/fr.json';
import en from '../translations/en.json';
import { SwitchLang } from './SwitchLang';
import { useSelector } from 'react-redux';
import { HomeScreen } from '../pages/Home';

const messages = {
  fr,
  en,
};

export const App = () => {
  const locale = useSelector((store) => store.app.locale);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <SwitchLang />
      <CartCount />
      <Router>
        <Switch>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </IntlProvider>
  );
};
