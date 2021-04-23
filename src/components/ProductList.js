import React, { Component } from 'react';
import { ProductItem } from './ProductItem';
import { CartCount} from './CartCount';
export class ProductList extends Component {


    state = {
        productList: [{
            id: 0,
            titre: "Suspiscious.",
            category: "MEME.",
            description: "There's something suspicious.",
            quantity: 0,
            price: "1",
            img: "https://i.ebayimg.com/images/g/6~cAAOSwyNBeTUXS/s-l300.jpg"
        }, {
            id: 1,
            titre: "It's a trap.",
            category: "MEME.",
            description: "Trap.",
            quantity: 0,
            price: "1",
            img: "https://i.ebayimg.com/images/g/6~cAAOSwyNBeTUXS/s-l300.jpg"

        }]
    }

    render() {
        const { productList } = this.state;
        return (
            <>
                {productList.map((product) => (
                    <div key={product.id}> <ProductItem product={product} onAddProduct={this.props.onAddProduct}/></div>
                ))}
            </>
        )
    }
}
