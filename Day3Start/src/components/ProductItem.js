import React, { useState } from 'react';
import { addToCart } from '../store/actions/app';
import { useDispatch, useSelector } from 'react-redux';

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const productsIds = useSelector((store) => store.app.productsIds);
  const dispatch = useDispatch();
  const onAddProduct = () => dispatch(addToCart());

  const handleQuantity = (selectedQuantity) => {
    setQuantity(selectedQuantity);
  };

  return (
    <li
      style={{
        background: productsIds.includes(product.id)
          ? 'rgba(0 ,0 ,0, .3)'
          : 'blanc',
      }}
    >
      <figure>
        <img src={product.picture} alt={product.title} />
        <figcaption>
          <span>{product.category}</span>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <strong>{product.price}</strong>
          <select onChange={(event) => handleQuantity(event.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button type="button" onClick={() => onAddProduct(product.id)}>
            Ajouter au panier
          </button>
        </figcaption>
      </figure>
    </li>
  );
};

export default ProductItem;
