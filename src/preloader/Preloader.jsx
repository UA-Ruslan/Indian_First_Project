import React from 'react';
import preloaderImgLeft from '../img/preloader/arrowLeft.png'
import preloaderImgRight from '../img/preloader/arrowRight.png'
import preloaderModuleCss from './Preloader.module.css'

const Preloader = (props) => {
    return (
        <div>
                 <div>
                    <div className={preloaderModuleCss.preloaderImgLeft}>
                        <img src={preloaderImgLeft} alt={'img'}/>
                    </div>
                    <div className={preloaderModuleCss.preloaderTxt}>
                        loading
                    </div>
                    <div className={preloaderModuleCss.preloaderImgRight}>
                        <img src={preloaderImgRight} alt={'img'}/>
                    </div>
                </div>
        </div>
    )
}

export default Preloader;
