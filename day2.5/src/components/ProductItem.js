import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToCart , removeProduct } from './../store/actions/app'

const ProductItem = ({ product, addProduct, removeProduct}) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (selectedQuantity) => {
    setQuantity(selectedQuantity);
  };

  

  return (
    <li>
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
          <button
            type="button"
            onClick={() =>
              addProduct(
                product.id,
              )
            }
          >Ajouter au panier
          </button>
          <button
            type="button"
            onClick={() =>
              removeProduct(
                product.id,
              )
            }
          >Delete</button>

        </figcaption>
      </figure>
    </li>
  );
};


const mapDispatchToProps = (dispatch) => ({
  addProduct: (productId) =>
    dispatch(addToCart(productId)),
  removeProduct: (productId) =>
    dispatch(removeProduct(productId))
});

export default connect(null, mapDispatchToProps)(ProductItem);
