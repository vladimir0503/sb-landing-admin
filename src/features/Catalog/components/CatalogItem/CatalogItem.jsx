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

    return (
        <div className={s.catalogItem}>
            <img src={!item.imageUrl ? noImg : item.imageUrl} alt='photo' />
            <p>{item.article}</p>
            <h3>{item.name}</h3>
            <button onClick={() => goToCart(item.id)}>Редактировать</button>
            <button onClick={() => deleteItem(item.id)}>УДАЛИТЬ</button>
        </div>
    );
}

export default CatalogItem;