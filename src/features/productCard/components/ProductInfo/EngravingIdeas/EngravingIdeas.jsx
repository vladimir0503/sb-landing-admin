import React from 'react';
import Slider from '../../Slider/Slider';
import exitImg from '../../../../../images/exit.svg'

import s from './EngravingIdeas.module.scss'

const EngravingIdeas = ({ toggleMode, info }) => {

    const exit = () => {
        toggleMode(false);
    };

    return (
        <div className={s.engravingIdeas}>
            <button className={s.exitBtn} onClick={exit}><img src={exitImg} alt='exit' /></button>
            <Slider info={info} itemName='engravingIdeas' />
        </div>
    );
};

export default EngravingIdeas;