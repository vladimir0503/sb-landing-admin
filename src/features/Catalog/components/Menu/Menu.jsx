import React from 'react';
import burger from '../../../../images/burger.svg';
import exit from '../../../../images/exit-sm.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { chooseName } from '../../catalogSlice';

import s from './Menu.module.scss';

const Menu = () => {
    const [sidebarInit, setSidebar] = React.useState(false);

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

    const toggleNavbar = () => {
        const clientWidth = document.body.clientWidth;
        if (clientWidth <= 1024) {
            setSidebar(!sidebarInit);
        };
    };

    const chooseCatalog = name => {
        window.scrollTo(0, 0);
        toggleNavbar();
        dispatch(chooseName(name));
        navigate('/');
    };

    return (
        <nav className={`${s.catalogNavbar} ${sidebarInit ? s.activeNavbar : ''}`}>
            <button onClick={toggleNavbar} className={s.burgerBtn}>
                {!sidebarInit
                    ? <img src={burger} alt='burger' />
                    : <img src={exit} alt='exit' />
                }
            </button>
            <ul>
                {nawItems.map(({ nameRu, nameEng }, i) => (
                    <li
                        className={`${s.catalogName} ${catalogName === nameEng ? s.activeName : ''}`}
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