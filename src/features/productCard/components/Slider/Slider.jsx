import React from 'react';
import { useDispatch } from 'react-redux';
import { getProductCard } from '../../productCardSlice';
import { useParams } from 'react-router-dom';
import api from '../../../../api/api';
import noImg from '../../../../images/noImg.jpg';

import s from './Slider.module.scss';

const Slider = ({ info }) => {
    const [urlImg, setUrlImg] = React.useState('');

    const route = useParams();

    const dispatch = useDispatch();

    const deleteSlide = async id => {
        try {
            const currentSlide = info?.slides.filter((_, i) => i !== id);
            const newInfo = { ...info, slides: currentSlide.length ? currentSlide : [''] };
            await api.changeProductInfo(route.name, route.id, newInfo);
            dispatch(getProductCard(newInfo));
        } catch (error) {
            alert('Ошибка сервера');
            console.error(error);
        };
    };

    const addSlide = async () => {
        try {
            const currentSlide = [...info?.slides.filter(item => item !== ''), urlImg];
            const newInfo = { ...info, slides: currentSlide };
            await api.changeProductInfo(route.name, route.id, newInfo);
            dispatch(getProductCard(newInfo));
        } catch (error) {
            alert('Ошибка сервера');
            console.error(error);
        } finally {
            setUrlImg('');
        };
    };

    console.log(info);

    return (

        <div className={s.slider}>
            <div
                className={s.sliderBlock}
            >
                <img
                    className={s.slideImg}
                    src={info?.slides[0] ? info?.slides[0] : noImg}
                    alt='slide'
                />
            </div>
            <div className={s.sliderItems}>
                {info?.slides && info?.slides.map((img, i) => (
                    <div
                        key={i}
                        className={s.sliderItem}
                    >
                        <img
                            src={img ? img : noImg}
                            alt='slide'
                        />
                        <button
                            onClick={() => deleteSlide(i)}
                            className={!info?.slides[0] ? s.hide : ''}
                        >
                            УДАЛИТЬ
                        </button>
                    </div>
                ))}
            </div>
            <div className={s.addingPictureBlock}>
                <button onClick={addSlide}>ДОБАВИТЬ</button>
                <input onChange={e => setUrlImg(e.target.value)} placeholder='Вставте url картинки' value={urlImg} />
            </div>
        </div>
    )
}

export default Slider;