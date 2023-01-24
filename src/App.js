import React, {useEffect, useState} from "react";
import './App.css';
import './component/backgroundAnimations/animations_clouds.css'
import './component/backgroundAnimations/animations_birds.css'
import './component/backgroundAnimations/fireAnimate/animation_fire.css'
import Navbar from "./component/navbar/Navbar";
import News from "./component/navbar/news/News";
import Music from "./component/navbar/music/Music";
import Settings from "./component/navbar/settings/Settings";
import Fire from "./component/backgroundAnimations/fireAnimate/Fire";
import BackgroundAnimate from "./component/backgroundAnimations/ImgsAnimate";
import {Routes, Route} from "react-router-dom";
import MessagesContainer from "./component/navbar/messages/MessagesContainer";
import FriendsContainer from "./component/navbar/friends/FriendsContainer";
import Profile from "./component/navbar/profile/Profile";
import FriendsInfoHooksContainer from "./component/navbar/friends/friendInfo/FriendsInfoHooksContainer";
import HeaderContainer from "./component/header/HeaderContainer";
import Login from "./component/login/Login";

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
        <div className='app-wrapper'>
          <BackgroundAnimate isBolt={isBolt}/>
          <Fire/>
          <HeaderContainer setIsBolt={setIsBolt}/>
          <Navbar/>
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/*' element={<Profile store={props.store}/>}/>
              <Route path='/:id' element={<FriendsInfoHooksContainer/>}/>
              <Route path='/messages/*' element={<MessagesContainer />}/>
              <Route path='/news' element={<News/>}/>
              <Route path='/music' element={<Music/>}/>
              <Route path='/settings' element={<Settings/>}/>
              <Route path='/friends' element={<FriendsContainer/>}/>
              <Route path='/login' element={<Login/>}/>
            </Routes>
          </div>
        </div>
  );
}


export default App;
