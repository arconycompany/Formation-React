import React, { Component } from 'react';
import { ProductList } from './ProductList';
import { CartCount } from './CartCount';
export { App };
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productCount: 0,
            productIds: []
        }
        this.onAddProduct = this.onAddProduct.bind(this);
    }

    onAddProduct(data) {
        this.setState((prevState) => ({
            productCount: prevState.productCount + 1,
            productIds: [...prevState.productIds, data.id],
        }));

    }
    render() {
        return (
            <>
            <h1>Hello from App component</h1>
            <CartCount count={this.state.productCount}/>
            <ProductList onAddProduct={this.onAddProduct}/>
            </>
        )
    }
}
// export default App;