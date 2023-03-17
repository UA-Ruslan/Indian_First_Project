import React, {useEffect, useState, Suspense} from "react";
import {Routes, Route} from "react-router-dom";
import "./App.css";
import "./component/generelComponent/backgroundAnimations/cloudsAnimation.module.css";
import "./component/generelComponent/backgroundAnimations/birdsAnimation.module.css";
import "./component/generelComponent/backgroundAnimations/fireAnimate/fireAnimation.module.css";
import ProfileContainer from "./component/navbar/profile/ProfileContainer";
import HeaderContainer from "./component/header/HeaderContainer";
import Navbar from "./component/navbar/Navbar";
import BackgroundAnimate from "./component/generelComponent/backgroundAnimations/ImgsAnimate";
import Fire from "./component/generelComponent/backgroundAnimations/fireAnimate/Fire";
import AOS from 'aos';
import 'aos/dist/aos.css';
//--------------------------------------------------------------------------------------------------------//
const FriendsContainer = React.lazy(() => import("./component/navbar/friends/FriendsContainer"));
const FriendsInfoHooksContainer = React.lazy(() => import("./component/navbar/friends/friendInfo/FriendsInfoHooksContainer"));
const MessagesContainer = React.lazy(() => import("./component/navbar/messages/MessagesContainer"));
const News = React.lazy(() => import("./component/navbar/news/News"));
const Music = React.lazy(() => import("./component/navbar/music/Music"));
const Settings = React.lazy(() => import("./component/navbar/settings/Settings"));
const Login = React.lazy(() => import("./component/header/login/Login"));
//--------------------------------------------------------------------------------------------------------//


const App = (props) => {

    const [isBolt, setIsBolt] = useState(null);

    useEffect(() => {
        AOS.init();
    }, [])

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
            <div className="appWrapperContent" data-aos="fade-up-left" data-aos-delay="300" data-aos-duration="1500">
                <Routes>
                    <Route path="/*" element={<ProfileContainer store={props.store}/>}/>
                    <Route path="/friends/:id" element={
                        <Suspense>
                            <FriendsInfoHooksContainer/>
                        </Suspense>
                    }/>
                    <Route path="/messages/*" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <MessagesContainer/>
                        </Suspense>
                    }/>
                    <Route path="/news" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <News/>
                        </Suspense>
                    }/>
                    <Route path="/music" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <Music/>
                        </Suspense>
                    }/>
                    <Route path="/settings" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <Settings/>
                        </Suspense>
                    }/>
                    <Route path="/friends/*" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <FriendsContainer/>
                        </Suspense>
                    }/>
                    <Route path="/login" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <Login/>
                        </Suspense>
                    }/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
