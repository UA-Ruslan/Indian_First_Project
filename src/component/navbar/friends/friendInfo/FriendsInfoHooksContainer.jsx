import React from "react";
import FriendsInfoApiContainer from "./FriendsInfoApiContainer";
import {useParams} from "react-router-dom";

const FriendsInfoHooksContainer = (props) => {
    const {id} = useParams()
    return (
        <FriendsInfoApiContainer id={id}/>
    )
}
export default FriendsInfoHooksContainer;