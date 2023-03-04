import React from 'react';
import preloaderImg1 from "../../../img/preloader/p1.webp"
import preloaderImg2 from "../../../img/preloader/p8.webp"
import style from './Preloader.module.css'

const Preloader = (props) => {
    return (
        <div className={style.preloaderWrapper}>
            <div className={style.ImgWrapper}>
                <img className={style.preloaderImg1} src={preloaderImg1} alt="Preloader"/>
                <img className={style.preloaderImg2} src={preloaderImg2} alt="Preloader"/>
            </div>

        </div>
    )
}

export default Preloader;
