import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as ReduxProvider, useSelector } from 'react-redux';
import { IntlProvider  } from 'react-intl';
import CartCount from 'components/CartCount';
import SwitchLang from 'components/SwitchLang';
import ProductList from 'components/ProductList';
import { store } from '../store';
import fr from '../translation/fr.json';
import en from '../translation/en.json';



const messages = {
  fr,
  en
};

const locale = 'en';

export const App = () => {  
const myLocale= useSelector(store => store.app.myLocale)
return (
  
      <IntlProvider locale="fr" messages={messages['fr']}>
        <SwitchLang />
        <CartCount />
        <ProductList />
      </IntlProvider>

)};
