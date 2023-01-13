import React from "react";
import Preloader from "../../../../preloader/Preloader";
import FriendsModuleCss from './FriendsInfo.module.css'

const FriendsInfo = (props) => {

    let mapProfileInfo = props.friendsProfileInfo.map((element, index) => {
        if (!element.profileInfo) {
            return (
                <Preloader key={index}/>
            )
        }
        return (
            <div key={index} className={FriendsModuleCss.mapProfileInfoWrapper}>


                {element.profileInfo.map((el) => {
                    return (
                        <div key={el.userId}>
                            <img src={element.imgUrl} alt="img"/>
                            <p>Name: {element.name}</p>
                            <p>Full Name: {el.fullName}</p>
                            <p>From: {element.location}</p>
                            <p>Age: {el.age}</p>
                            <p>Subscribers: {el.subscriber}</p>
                            <p>Status: {el.status}</p>
                            <div style={{margin: '20px 0 0 0', display: 'flex'}}>
                                <h3>Contacts:</h3>
                                <div style={{paddingTop: '5px'}}>
                                    <div>
                                        <a href={el.contacts.github}>Github</a>
                                    </div>
                                    <div>
                                        <a href={el.contacts.facebook}>Facebook</a>
                                    </div>
                                    <div>
                                        <a href={el.contacts.instagram}>Instagram</a>
                                    </div>
                                    <div>
                                        <a href={el.contacts.twitter}>Twitter</a>
                                    </div>
                                    <div>
                                        <a href={el.contacts.youtube}>Youtube</a>
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
        <div className={FriendsModuleCss.profileInfoWrapper}>
            {mapProfileInfo}
        </div>
    )
}
export default FriendsInfo;