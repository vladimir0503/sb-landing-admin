import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCatalog } from '../catalogSlice';
import { logOut } from '../../auth/authSlice';
import Menu from './Menu/Menu';
import CatalogItem from './CatalogItem/CatalogItem';

import s from './Catalog.module.scss';

const url = 'https://engraving-db-13cea-default-rtdb.firebaseio.com/catalog';

const Catalog = () => {

    const { catalog, catalogName } = useSelector(state => state.catalog)
    const dispatch = useDispatch();

    const addCard = async () => {

        const data = {
            name: 'Название товара',
            price: 'Цена',
            article: 'Артикул',
            description: 'Описание товара',
            imageUrl: '',
            slides: ['']
        };

        const secret = process.env.REACT_APP_FIREBASE_SECRET;

        const res = await fetch(`${url}/${catalogName}.json?auth=${secret}`, {
            'method': 'POST',
            'body': JSON.stringify(data)
        })
        const product = await res.json();

        console.log(product);
    };

    React.useEffect(() => {
        dispatch(getCatalog(catalogName));
    }, [catalogName]);

    console.log(catalog);

    return (
        <div className={s.catalog}>
            <div className={s.catalogContent}>
                <div>
                    <Menu />
                    <button onClick={addCard}>Добавить товар</button>
                </div>
                <div className={s.catalogItems}>
                    {catalog.map((item, i) => (
                        <CatalogItem key={i} item={{...item, catalogName}} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Catalog;