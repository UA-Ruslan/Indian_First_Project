import bolt from './animations_flesh.module.css'
const BackgroundAnimate = (props) => {

    const classes = props.isBolt ? bolt.boltOpacity1 : bolt.boltOpacity0;

    return (
        <div className='imgBox'>
            <img className='bird_1' src={require("../../img/birds/bird_1.png")} alt="bird"/>
            <img className='bird_2' src={require("../../img/birds/bird_2.png")} alt="bird"/>
            <img className='bird_3' src={require("../../img/birds/bird_3.png")} alt="bird"/>
            <img className='cloud_1' src={require("../../img/clouds/cloud_1.png")} alt="cloud"/>
            <img className='cloud_2' src={require("../../img/clouds/cloud_2.png")} alt="cloud"/>
            <img className='cloud_3' src={require("../../img/clouds/cloud_3.png")} alt="cloud"/>
            <img className='cloud_4' src={require("../../img/clouds/cloud_4.png")} alt="cloud"/>
            <img className='cloud_5' src={require("../../img/clouds/cloud_5.png")} alt="cloud"/>
            <img className='cloud_6' src={require("../../img/clouds/cloud_6.png")} alt="cloud"/>
            <img className='cloud_7' src={require("../../img/clouds/cloud_7.png")} alt="cloud"/>
            <img className='cloud_8' src={require("../../img/clouds/cloud_8.png")} alt="cloud"/>
            <img className={bolt.mount_1} src={require("../../img/main_background/mount_1.png")} alt="mount"/>
            <img className={bolt.mount_2} src={require("../../img/main_background/mount_2.png")} alt="mount"/>
            <img className={classes} src={require("../../img/bolt/pngwing.com.png")} alt="bolt"/>
        </div>
    )
}
export default BackgroundAnimate