import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { changeProductCard } from '../../productCardSlice';
import Loader from '../../../../components/common/Loader/Loader';
import api from '../../../../api/api';
import noImg from '../../../../images/noImg.jpg';

import s from './Slider.module.scss';

const Slider = ({ info, itemName }) => {
    const [urlImg, setUrlImg] = React.useState('');
    const [isLoading, setLoading] = React.useState(false);

    const route = useParams();

    const dispatch = useDispatch();

    const addSlide = async e => {
        e.preventDefault();

        setLoading(true);

        const currentArr = [...info?.[itemName].filter(item => item !== ''), urlImg];
        const newInfo = { ...info, [itemName]: currentArr };

        await api.changeProductInfo(route.name, route.id, newInfo);
        dispatch(changeProductCard(route.name, route.id, newInfo));

        setLoading(false);
        setUrlImg('');
    };

    const deleteSlide = async id => {

        setLoading(true);

        const currentArr = info?.[itemName].filter((_, i) => i !== id);
        const newInfo = { ...info, [itemName]: currentArr.length ? currentArr : [''] };

        await api.changeProductInfo(route.name, route.id, newInfo);
        dispatch(changeProductCard(route.name, route.id, newInfo));

        setLoading(false);
    };

    return (

        <div className={s.slider}>
            <div
                className={s.sliderBlock}
            >
                <img
                    className={s.slideImg}
                    src={info?.[itemName][0] ? info?.[itemName][0] : noImg}
                    alt='slide'
                />
            </div>
            <div className={s.sliderItems}>
                {info?.[itemName] && info?.[itemName].map((img, i) => (
                    <div
                        key={i}
                        className={s.sliderItem}
                    >
                        <img
                            src={img ? img : noImg}
                            alt='slide'
                        />
                        <button
                            disabled={isLoading}
                            onClick={() => deleteSlide(i)}
                            className={!info?.[itemName][0] ? s.hide : ''}
                        >
                            УДАЛИТЬ
                        </button>
                    </div>
                ))}
            </div>
            <form className={s.addingPictureBlock} onSubmit={addSlide}>
                <button>ДОБАВИТЬ</button>
                <input onChange={e => setUrlImg(e.target.value)} placeholder='Вставте url картинки' value={urlImg} />
            </form>
            {isLoading && <Loader />}
        </div>
    )
}

export default Slider;