import React from 'react';
import { useDispatch } from 'react-redux';
import { getProductCard, changeProductCard } from '../../productCardSlice';
import { useParams } from 'react-router-dom';
import api from '../../../../api/api';
import Loader from '../../../../components/common/Loader/Loader';

import s from './ProductInfo.module.scss';
import EngravingIdeas from './EngravingIdeas/EngravingIdeas';

const ProductInfo = ({ info }) => {
    const [name, setName] = React.useState(info?.name);
    const [article, setArticle] = React.useState(info?.article);
    const [description, setDescription] = React.useState(info?.description);
    const [price, setPrice] = React.useState(info?.price);
    const [isLoading, setLoading] = React.useState(false);
    const [changeMode, setChange] = React.useState(false);

    const url = useParams();

    const dispatch = useDispatch();

    const changeEngravingIdeas = () => {
        setChange(true);
    };

    const changeInfo = async e => {
        e.preventDefault();

        setLoading(true);

        const data = {
            ...info,
            name,
            article,
            description,
            price
        };

        await dispatch(changeProductCard(url.name, url.id, data));
        setLoading(false);
    };

    return (
        <div className={s.productInfo}>
            <form className={s.productForm} onSubmit={changeInfo}>
                <div className={s.formItem}>
                    <input onBlur={changeInfo} onChange={e => setName(e.target.value)} value={name} />
                    <button disabled={isLoading}>Изменить</button>
                </div>
                <div className={s.formItem}>
                    <input onBlur={changeInfo} onChange={e => setArticle(e.target.value)} value={article} />
                    <button disabled={isLoading}>Изменить</button>
                </div>
                <div className={s.formItem}>
                    <textarea onBlur={changeInfo} onChange={e => setDescription(e.target.value)} value={description} />
                    <button disabled={isLoading}>Изменить</button>
                </div>
                <div className={s.formItem}>
                    <input onBlur={changeInfo} onChange={e => setPrice(e.target.value)} value={price} />
                    <button disabled={isLoading}>Изменить</button>
                </div>
            </form>
            <button className={s.changeIdeasBtn} onClick={changeEngravingIdeas}>Изменить идеи гравировки</button>
            {changeMode && <EngravingIdeas toggleMode={setChange} info={info} />}
            {isLoading
                && <div className={s.loaderWrapper}>
                    <Loader />
                </div>
            }
        </div>
    );
};

export default ProductInfo;