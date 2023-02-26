import React, {useEffect, useState} from "react";
import "./App.css";
import "./utilit/backgroundAnimations/cloudsAnimation.module.css";
import "./utilit/backgroundAnimations/birdsAnimation.module.css";
import "./utilit/backgroundAnimations/fireAnimate/fireAnimation.module.css";
import Navbar from "./component/navbar/Navbar";
import News from "./component/navbar/news/News";
import Music from "./component/navbar/music/Music";
import Settings from "./component/navbar/settings/Settings";
import BackgroundAnimate from "./utilit/backgroundAnimations/ImgsAnimate";
import {Routes, Route} from "react-router-dom";
import MessagesContainer from "./component/navbar/messages/MessagesContainer";
import FriendsContainer from "./component/navbar/friends/FriendsContainer";
import FriendsInfoHooksContainer from "./component/navbar/friends/friendInfo/FriendsInfoHooksContainer";
import HeaderContainer from "./component/header/HeaderContainer";
import Login from "./component/header/login/Login";
import {ProfileContainer} from "./component/navbar/profile/ProfileContainer";
import Fire from "./utilit/backgroundAnimations/fireAnimate/Fire";

const App = (props) => {
    const [isBolt, setIsBolt] = useState(null);
    useEffect(() => {
        if (isBolt) {
            setTimeout(() => {
                setIsBolt(false)
            }, 200);
        }
    }, [isBolt, setIsBolt])

    return (
        <div className="app">
            <Fire/>
            <BackgroundAnimate isBolt={isBolt}/>
            <HeaderContainer setIsBolt={setIsBolt}/>
            <Navbar/>
            <div className="appWrapperContent">
                <Routes>
                    <Route path="/*" element={<ProfileContainer store={props.store}/>}/>
                    <Route path="/friends/:id" element={<FriendsInfoHooksContainer/>}/>
                    <Route path="/messages/*" element={<MessagesContainer/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/friends/*" element={<FriendsContainer/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
