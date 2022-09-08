import React from 'react';
import Menu from '../../Catalog/components/Menu/Menu';
import ProductInfo from './ProductInfo/ProductInfo';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductCard } from '../productCardSlice';

import s from './ProductCard.module.scss';

const ProductCard = () => {

    const { product, isLoading } = useSelector(state => state.productCard);
    const { name, id } = useParams();

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchProductCard(name, id))
    }, []);

    console.log(product);

    return (
        <div className={s.productCard}>
            <div className={s.productCardWrapper}>
                <Menu />
                {
                    isLoading
                        ? <h2>Загрузка...</h2>
                        : <div className={s.productCardContent}>
                            {/* <Slider slides={product?.slides} /> */}
                            <ProductInfo info={product} />
                        </div>
                }
            </div>
        </div>
    );
};

export default ProductCard;