import React from "react";
import friendsModuleCss from "./Friends.module.css"
import axios from "axios";
import defaultAva from "../../../img/people/defaultAva.png"

class Friends extends React.Component {
    constructor(props) {
        super(props);
        axios.get("http://localhost:4000/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {
        return (
            <div className={friendsModuleCss.friends}>
                {this.props.users.map((user) => <div key={user.id} className={friendsModuleCss.userWrapper}>
                    <div className={friendsModuleCss.imgWrapper}>
                        <img className={friendsModuleCss.userImg} src={user.imgUrl != null ? user.imgUrl : defaultAva}
                             alt='Photo'/>
                    </div>
                    <div className={friendsModuleCss.userInfoWrapper}>
                        <div>
                            Nickname:{user.name}
                        </div>
                        <div>
                            From:{user.location}
                        </div>
                    </div>
                    <div className={friendsModuleCss.userBtnWrapper}>
                        {user.following
                            ? <button className={friendsModuleCss.userBtn} onClick={() => {
                                this.props.unfollow(user.id)
                            }}>unfollow</button>
                            : <button className={friendsModuleCss.userBtn} onClick={() => {
                                this.props.follow(user.id)
                            }}>follow</button>
                        }
                    </div>
                </div>)}
            </div>
        )
    }
}

export default Friends;