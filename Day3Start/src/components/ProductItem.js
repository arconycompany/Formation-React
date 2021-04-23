import React, { useState } from 'react';
import { addToCart } from '../store/actions/app';
import { connect } from 'react-redux';
import { useIntl } from 'react-intl';

const ProductItem = ({ product, productsIds, onAddProduct }) => {
  const [quantity, setQuantity] = useState(1);
  const { formatMessage } = useIntl();

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
            {formatMessage({ id: 'buttonAddToCart' })}
          </button>
        </figcaption>
      </figure>
    </li>
  );
};

const mapStateToProps = (state) => ({
  productsIds: state.app.productsIds,
});

const mapDispatchToProps = (dispatch) => ({
  onAddProduct: (productId) => dispatch(addToCart(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
