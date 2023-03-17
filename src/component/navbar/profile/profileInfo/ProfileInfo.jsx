import React, {useEffect, useState} from "react";
import style from './profileInfo.module.css'
import ProfileStatusHooks from "./profileStatus/ProfileStatusHooks.jsx";
import DefaultAvatar from "./defaultAvatar/DefaultAvatar";
import axios from "axios";

const ProfileInfo = (props) => {
    const [dropMenuPosition, setDropMenuPosition] = useState(true);
    const [toggleLeft, setToggleLeft] = useState(false);
    const [toggleRight, setToggleRight] = useState(false);
    const [blink, setBlink] = useState(false);
    const [blinkOnclick, setBlinkOnclick] = useState(false);
    const [postActive, setPostActive] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [cleanServerImg, setCleanServerImg] = useState(false);
    const [newAvatar, setNewAvatar] = useState("");
    const [isDefaultAva, setDefaultAva] = useState(false);
    const [formActive, setFormActive] = useState(false);
    const [profileData, setProfileData] = useState("");
    const [editProfileName, setEditProfileName] = useState(false);
    const [editProfileAge, setEditProfileAge] = useState(false);
    const [editProfileCity, setEditProfileCity] = useState(false);
    const [sendData, setSendData] = useState("");
    const [sendId, setSendId] = useState("");
    const [editingActive, setEditingActive] = useState(false);

    const baseUrl = `https://rest-api-uk0m.onrender.com/`

    useEffect(() => {
        axios.get(`${baseUrl}mainAvatarUrl`)
            .then(res => {
                res.data.mainAvatarUrl=="" ? setDefaultAva(true) : setNewAvatar(res.data.mainAvatarUrl)
            })
            .catch(error => {
                setDefaultAva(true)
            })
        axios.get(`${baseUrl}myProfile`)
            .then(res => {
                setProfileData(res.data)
            })
    }, [])

    useEffect(() => {
        if (postActive) {
            const sequentialRequests = async () => {
                await setDefaultAva(false)
                await axios.post(`${baseUrl}mainAvatarUrl`, {mainAvatarUrl: inputValue})
                await axios.get(`${baseUrl}mainAvatarUrl`)
                    .then(res => {
                        let response = res.data.mainAvatarUrl
                        setNewAvatar(response)
                        setPostActive(false)
                    })
                setInputValue("")
                setFormActive(false)
            }
            sequentialRequests()
        }
    },)
    useEffect(() => {
        if (cleanServerImg) {
            const sequentialRequests = async () => {
                await axios.post(`${baseUrl}mainAvatarUrl`, {mainAvatarUrl: ""})
                await axios.get(`${baseUrl}mainAvatarUrl`)
                    .then(res => {
                        let response = res.data.mainAvatarUrl
                        setNewAvatar(response)
                        response ? setNewAvatar(response) : setDefaultAva(true)
                        setCleanServerImg(false)
                    })
            }
            sequentialRequests()
        }
    })

    //------------------------editing my profile-----------------------//
    const data = {
        [sendId]: sendData
    };

    const headers = {
        'Content-Type': 'application/json'
    };

    useEffect(() => {
        if (editingActive) {
            const sequentialRequests = async () => {
                await axios.patch(`${baseUrl}myProfile`, JSON.stringify(data), {headers})
                await axios.get(`${baseUrl}myProfile`)
                    .then(res => {
                        setProfileData(res.data)
                    })
                setEditingActive(false)
            }
            sequentialRequests()
        }
    })
    //------------------------editing my profile-----------------------//
    useEffect(() => {
        setTimeout(() => setBlink(true), 0)
        setTimeout(() => setBlink(false), 100)
    }, [toggleLeft, toggleRight, blinkOnclick])

    const MouseLeft = () => {
        setToggleLeft(!toggleLeft)
    };
    const MouseRight = () => {
        setToggleRight(!toggleRight)
    };
    const blinkClick = () => {
        setBlinkOnclick(!blinkOnclick)
        setDropMenuPosition(true)
    };

    const DropMenuPositionInactive = () => {
        setDropMenuPosition(false)
    };

    const setDefaultAvatar = () => {
        setCleanServerImg(true)
    };
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setPostActive(true)
    };

    const setActiveForm = () => {
        setFormActive(true)
    };

    const setInactiveForm = (e) => {
        e.preventDefault()
        setFormActive(false)
    };

    const editName = () => {
        setEditProfileName(true)
    };

    const editAge = () => {
        setEditProfileAge(true)
    };

    const editCity = () => {
        setEditProfileCity(true)
    };

    const editProfileInactive = (e) => {
        setEditProfileName(false)
        setEditProfileAge(false)
        setEditProfileCity(false)
        setEditingActive(true)
    };

    const editInactiveOnEnter = (e) => {
        if (e.key === 'Enter') {
            setEditProfileName(false)
            setEditProfileAge(false)
            setEditProfileCity(false)
            setEditingActive(true)
        }
    };

    const onChange = (e) => {
        setSendData(e.target.value)
        setSendId(e.target.id)
    }

    return (

        <div onMouseDown={blinkClick} className={style.profileInfoWrapper}>
            <div onMouseOver={MouseLeft} onMouseOut={MouseLeft} className={style.leftHoverBlock}></div>

            <div className={style.profileInfoContentWrapper}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <h2>Profile</h2>
                    <div className={style.avatarBtnWrapper}>
                        <form className={`${formActive ? style.AvaFormActive : style.AvaFormInactive}`}
                              onSubmit={handleSubmit}>
                            <input className={style.inputStyle} placeholder="Paste the avatar Url" type="url"
                                   value={inputValue}
                                   onChange={handleInputChange}/>
                            <div style={{display: "flex"}}>
                                <button className={`${style.avatarBtn} btnSameParams`} disabled={!inputValue}
                                        type="submit">Сonfirm
                                </button>
                                <button className={`${style.avatarBtn} btnSameParams`}
                                        onClick={setInactiveForm}>Cansel
                                </button>
                            </div>
                        </form>
                        <button className={formActive ? style.AvaFormInactive : `${style.avatarBtn} btnSameParams`}
                                onClick={setDefaultAvatar}>Default
                            avatar
                        </button>
                        <button className={formActive ? style.AvaFormInactive : `${style.avatarBtn} btnSameParams`}
                                onClick={setActiveForm}>Set avatar
                        </button>
                    </div>
                </div>
                <div>
                    {isDefaultAva
                        ? <DefaultAvatar toggleLeft={toggleLeft} toggleRight={toggleRight} blink={blink}/>
                        : <img className={style.selectedAva} src={newAvatar} alt="ava"/>}

                    <div className={dropMenuPosition ? style.spanWrapperActive : style.spanWrapperInactive}>
                        <div className={style.closeBtnPosition}>
                            <h4 onClick={DropMenuPositionInactive}
                                className={`${dropMenuPosition ? style.closeBtnActive : style.closeBtnInactive}`}>+</h4>
                            {profileData
                                ? <div>
                                    {editProfileName
                                        ? <input id={"name"} onChange={onChange} className="inputSameParams"
                                                 placeholder={"Name"}
                                                 onBlur={editProfileInactive} onKeyDown={editInactiveOnEnter}
                                                 autoFocus={true}/>
                                        : <p onDoubleClick={editName}><b>Name:</b> {profileData.name}</p>}
                                    {editProfileAge
                                        ? <input id={"age"} onChange={onChange} className="inputSameParams"
                                                 placeholder={"Age"}
                                                 onBlur={editProfileInactive} autoFocus={true}/>
                                        : <p onDoubleClick={editAge}><b>Age:</b> {profileData.age}</p>}
                                    {editProfileCity
                                        ? <input id={"city"} onChange={onChange} className="inputSameParams"
                                                 placeholder={"City"}
                                                 onBlur={editProfileInactive} autoFocus={true}/>
                                        : <p onDoubleClick={editCity}><b>City:</b> {profileData.city}</p>}
                                </div>
                                : <p>loading...</p>
                            }
                        </div>
                    </div>
                </div>

                <ProfileStatusHooks status={props.status} setStatus={props.setStatus}/>
            </div>

            <div onMouseOver={MouseRight} onMouseOut={MouseRight} className={style.rightHoverBlock}></div>
        </div>


    )
};
export default ProfileInfo;