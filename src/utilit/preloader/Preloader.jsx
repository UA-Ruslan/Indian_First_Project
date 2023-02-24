import React from 'react';
import preloaderImg1 from "../../img/preloader/p1.png"
import preloaderImg2 from "../../img/preloader/p8.png"
import style from './Preloader.module.css'

const Preloader = (props) => {
    return (
        <div className={style.preloaderWrapper}>
            <div className={style.ImgWrapper}>
                <img className={style.preloaderImg1} src={preloaderImg1}/>
                <img className={style.preloaderImg2} src={preloaderImg2}/>
            </div>

        </div>
    )
}

export default Preloader;
