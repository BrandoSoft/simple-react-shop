import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product'

const ProductPage = ({ match }) => {
    console.log(match);
    return (
        <>
            <div>
                Strona produktu
        </div>
            <Product id={match.params.dowolnanazwa} />
            <Link to="/products">Powrót do listy produktów</Link>
        </>
    );
}

export default ProductPage;