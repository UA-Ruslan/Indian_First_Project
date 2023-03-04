import mounts from "./mountsPosition.module.css"
import clouds from "./cloudsAnimation.module.css"
import birds from "./birdsAnimation.module.css"
import bolt from "./boltAnimation.module.css"
import React from "react";

const BackgroundAnimate = (props) => {

    const classToggle = props.isBolt ? bolt.active : bolt.inactive;

    return (
        <div className={clouds.imgBox}>
            <img className={birds.bird_1} src={require("../../../img/birds/bird_1.webp")} alt="bird"/>
            <img className={birds.bird_2} src={require("../../../img/birds/bird_2.webp")} alt="bird"/>
            <img className={birds.bird_3} src={require("../../../img/birds/bird_3.webp")} alt="bird"/>
            <img className={clouds.cloud_1} src={require("../../../img/clouds/cloud_1.webp")} alt="cloud"/>
            <img className={clouds.cloud_2} src={require("../../../img/clouds/cloud_2.webp")} alt="cloud"/>
            <img className={clouds.cloud_3} src={require("../../../img/clouds/cloud_3.webp")} alt="cloud"/>
            <img className={clouds.cloud_4} src={require("../../../img/clouds/cloud_4 .webp")} alt="cloud"/>
            <img className={clouds.cloud_5} src={require("../../../img/clouds/cloud_5 .webp")} alt="cloud"/>
            <img className={clouds.cloud_6} src={require("../../../img/clouds/cloud_6.webp")} alt="cloud"/>
            <img className={clouds.cloud_7} src={require("../../../img/clouds/cloud_7.webp")} alt="cloud"/>
            <img className={clouds.cloud_8} src={require("../../../img/clouds/cloud_8.webp")} alt="cloud"/>
            <img className={mounts.mount_1} src={require("../../../img/main_background/mount_1.webp")} alt="mount"/>
            <img className={mounts.mount_2} src={require("../../../img/main_background/mount_2.webp")} alt="mount"/>
            <img className={classToggle} src={require("../../../img/bolt/pngwing.com.webp")} alt="bolt"/>
            <img className={clouds.smoke} src={require("../../../img/smoke/smoke1.gif")} alt="smoke"/>
        </div>
    )
}
export default BackgroundAnimate