import React from 'react';
import { IntlProvider } from 'react-intl';
import CartCount from 'components/CartCount';
import ProductList from 'components/ProductList';
import fr from '../translations/fr.json';
import en from '../translations/en.json';
import { SwitchLang } from './SwitchLang';
import { useSelector } from 'react-redux';

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
      <ProductList />
    </IntlProvider>
  );
};
