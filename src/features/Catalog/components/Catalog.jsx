import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCatalog } from '../catalogSlice';
import { useNavigate } from 'react-router-dom';
import api from '../../../api/api';
import Menu from './Menu/Menu';
import CatalogItem from './CatalogItem/CatalogItem';

import s from './Catalog.module.scss';

const url = 'https://engraving-db-13cea-default-rtdb.firebaseio.com/catalog';

const Catalog = () => {

    const { catalog, catalogName, isLoading } = useSelector(state => state.catalog)
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const addCard = async () => {
        try {
            const data = await api.addProduct(catalogName);
            navigate(`/card/${catalogName}/${data.name}`)
            console.log(data);
        } catch (error) {
            alert('Ошибка сервера');
            console.error(error);
        };
    };

    React.useEffect(() => {
        dispatch(getCatalog(catalogName));
    }, [catalogName]);

    return (
        <div className={s.catalog}>
            <div className={s.catalogContent}>
                <div>
                    <Menu />
                </div>
                {isLoading
                    ? <h1>Загрузка</h1>
                    : <div className={s.contentWrapper}>
                        <div className={s.catalogItems}>
                            {catalog.map((item, i) => (
                                <CatalogItem key={i} item={{ ...item, catalogName }} />
                            ))}
                        </div>
                    </div>
                }
            </div>
            <button className={s.addBtn} onClick={addCard}>Добавить товар</button>
        </div>
    );
};

export default Catalog;