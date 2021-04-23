import React, { Component } from 'react';

 //export class ProductItem extends Component {
  /* constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
    this.handleQuantity = this.handleQuantity.bind(this);
  }

  handleQuantity(quantity) {
    this.setState({
      quantity,
    });
  }

  render() {
    const { product } = this.props;

    return (
      <li>
        <figure>
          <img src={product.picture} alt={product.title} />
          <figcaption>
            <span>{product.category}</span>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <strong>{product.price}</strong>
            <select
              onChange={(event) => this.handleQuantity(event.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <button
              type="button"
              onClick={() =>
                this.props.onAddProduct({
                  id: product.id,
                  quantity: this.state.quantity,
                })
              }
            >
              Ajouter au panier
            </button>
          </figcaption>
        </figure>
      </li>
    );
  }
  }*/

  export const ProductItem = () => {

  }

