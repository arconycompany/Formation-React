import React, { Component } from 'react';

export { ProductItem };
class ProductItem extends Component {
    state = { quantitySelected : 0 };

      handleChange = (event) => {
        this.setState({...this.state, quantity: event.value});
      };
     
     
      

    render() {
                return <>
                    <h1> Titre : {this.props.product.titre}</h1>
                    <h4> Catégorie : {this.props.product.category}</h4>
                    <h4> Description : {this.props.product.description}.</h4>
                    <h4> Price : {this.props.product.price}.</h4>
                    <br/>
                    <img src={this.props.product.img} ></img>
                    <br/>
                    <select value={this.state.quantity} onChange={this.handleChange}>
                    <option value="0">
                            0
                        </option>
                        <option value="1">
                            1
                        </option>
                        <option value="2">
                            2
                        </option>
                        <option value="3">
                            3
                        </option>
                    </select>
                    
                    <button onClick={() => this.props.onAddProduct({
                        id: this.props.product.id,
                        quantity: this.state.quantity
                    })} type="button">Mettre dans le panier.</button>
                </>
        }
}
