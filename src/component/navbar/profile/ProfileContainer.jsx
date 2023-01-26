import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../../hok/withAuthRedirect";
import {compose} from "redux";

export default compose(connect(), WithAuthRedirect)(Profile);
