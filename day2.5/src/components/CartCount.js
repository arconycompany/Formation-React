import React from 'react';
import { connect } from 'react-redux';

const CartCount = ({ productsCount }) => <span>{productsCount}</span>;

const mapStateToProps = (state) => ({
    productsCount: state.productsCount
})
export default connect(mapStateToProps)(CartCount)