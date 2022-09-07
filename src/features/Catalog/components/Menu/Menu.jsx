import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { chooseName } from '../../catalogSlice';

import s from './Menu.module.scss';

const Menu = () => {
    const navigate = useNavigate();
    const { catalogName } = useSelector(state => state.catalog);

    const dispatch = useDispatch()

    const nawItems = [
        {
            nameRu: 'Браслет',
            nameEng: 'bracelets'
        },
        {
            nameRu: 'Адресники',
            nameEng: 'address'
        },
        {
            nameRu: 'Подвески/кулоны',
            nameEng: 'pendants'
        },
        {
            nameRu: 'Зажигалки',
            nameEng: 'lighters'
        },
        {
            nameRu: 'Ручки',
            nameEng: 'pens'
        },
        {
            nameRu: 'Подарочный набор',
            nameEng: 'gifts'
        },
    ];

    const chooseCatalog = name => {
        dispatch(chooseName(name));
        navigate('/');
    };

    return (
        <nav className={s.catalogNawbar}>
            <ul>
                {nawItems.map(({ nameRu, nameEng }, i) => (
                    <li
                        className={`${s.catalogName} ${catalogName === nameEng && s.activeName}`}
                        onClick={() => chooseCatalog(nameEng)}
                        key={i}
                    >
                        {nameRu}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;