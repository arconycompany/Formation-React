import React, { Component, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as ReduxProvider} from 'react-redux';
import CartCount from 'components/CartCount';
import { ProductList } from 'components/ProductList';
import './App.css';
import { store } from '../store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const App = () => {
  const [productsCount, setProductsCount] = useState(0);
  const [productsIds, setProductsIds] = useState([]);

  /* const addProduct = (data) => {
    setProductsCount(productsCount + 1);
    setProductsIds([...productsIds, data.id]);
  };

  const onRemoveProduct = (data) => {
    setProductsCount(productsCount - 1);
    setProductsIds([...productsIds.filter(x => x != data.id)]);
  };*/

  return (
    <ReduxProvider store={store}>
    <QueryClientProvider client={queryClient}>
      <CartCount/>
      <ProductList />
    </QueryClientProvider>
    </ReduxProvider>
  );
};
