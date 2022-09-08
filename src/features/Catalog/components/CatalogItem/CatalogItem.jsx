import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { delItem } from '../../catalogSlice';
import api from '../../../../api/api';
import noImg from '../../../../images/noImg.jpg';

import s from './CatalogItem.module.scss';

const CatalogItem = ({ item }) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const goToCart = id => {
        navigate(`/card/${item.catalogName}/${id}`);
    };

    const deleteItem = async id => {
        if (!window.confirm('Вы уверены?')) return;
        const res = await api.deleteProduct(item.catalogName, id);
        dispatch(delItem(id));
        console.log(res);
    };

    const img = item.slides?.[0];

    console.log(img);

    return (
        <div className={s.catalogItem}>
            <img src={!item.slides?.[0] ? noImg : item.slides?.[0]} alt='photo' />
            <p>{item.article}</p>
            <h3>{item.name}</h3>
            <div className={s.bthBlock}>
                <button onClick={() => goToCart(item.id)}>РЕДАКТИРОВАТЬ</button>
                <button onClick={() => deleteItem(item.id)}>УДАЛИТЬ</button>
            </div>
        </div>
    );
}

export default CatalogItem;