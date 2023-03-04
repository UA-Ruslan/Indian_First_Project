import React from "react";
import Preloader from "../../../generelComponent/preloader/Preloader";
import style from './FriendsInfo.module.css'
import { useNavigate } from "react-router-dom";

const FriendsInfo = (props) => {
    const navigate = useNavigate();

    let mapProfileInfo = props.friendsProfileInfo.map((element, index) => {
        if (!element.profileInfo) {
            return (
                <Preloader key={index}/>
            )
        };

        return (
            <div key={index} className={style.profileInfoWrapper}>


                {element.profileInfo.map((el) => {
                    return (
                        <div className={style.Flex} key={el.userId}>
                            <button onClick={() => {navigate(-1)}} className={`${style.backBtn} btnSameParams`}>Back</button>
                            <img src={element.imgUrl} alt="img"/>
                            <p className={style.pDec}>Name: {element.name}</p>
                            <p className={style.pDec}>Full Name: {el.fullName}</p>
                            <p className={style.pDec}>From: {element.location}</p>
                            <p className={style.pDec}>Age: {el.age}</p>
                            <p className={style.pDec}>Subscribers: {el.subscriber}</p>
                            <p className={style.pDec}>Status: {el.status}</p>
                            <div style={{margin: '20px 0 0 0', display: 'flex'}}>
                                <h3 className={style.h3Dec}>Contacts:</h3>
                                <div style={{paddingTop: '5px'}}>
                                    <div>
                                        <a className={style.hrefDec} href={el.contacts.github}>Github</a>
                                    </div>
                                    <div>
                                        <a className={style.hrefDec} href={el.contacts.facebook}>Facebook</a>
                                    </div>
                                    <div>
                                        <a className={style.hrefDec} href={el.contacts.instagram}>Instagram</a>
                                    </div>
                                    <div>
                                        <a className={style.hrefDec} href={el.contacts.twitter}>Twitter</a>
                                    </div>
                                    <div>
                                        <a className={style.hrefDec} href={el.contacts.youtube}>Youtube</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    })
    return (
        <div className={style.profileInfoMain}>
            {mapProfileInfo}
        </div>
    )
}
export default FriendsInfo;