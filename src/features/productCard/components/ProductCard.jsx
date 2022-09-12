import React from 'react';
import Menu from '../../Catalog/components/Menu/Menu';
import ProductInfo from './ProductInfo/ProductInfo';
import Loader from '../../../components/common/Loader/Loader';
import Slider from './Slider/Slider';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductCard, getProductCard } from '../productCardSlice';

import s from './ProductCard.module.scss';

const ProductCard = () => {

    const { product, isLoading } = useSelector(state => state.productCard);
    const { name, id } = useParams();

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchProductCard(name, id));
        return () => dispatch(getProductCard(null));
    }, []);

    return (
        <div className={s.productCard}>
            <div className={s.productCardWrapper}>
                <Menu />
                {
                    isLoading
                        ? <div className={s.loaderWrapper}><Loader /></div>
                        : <div className={s.productCardContent}>
                            <Slider info={product} itemName='slides' />
                            <ProductInfo info={product} />
                        </div>
                }
            </div>
        </div>
    );
};

export default ProductCard;