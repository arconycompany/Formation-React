import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { clearProduct, getProductFromApi } from '../store/actions/data';

export const ProductScreen = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((s) => s.data.product);
    const productIsNull = product === null;

    useEffect(() => {
        if (productIsNull) {
            dispatch(getProductFromApi(id));
        }
        return () => {
            dispatch(clearProduct());
        }
    }, []);

    if (productIsNull) {
        return <h1> no Data</h1>
    }
    return (
        <article>
            <Link to="/"> Retour à lacc</Link>
            <h1> {product.title}</h1>
        </article>
    )
};
