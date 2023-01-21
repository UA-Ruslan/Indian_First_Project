import React from 'react'
import Header from './Header';
import {connect} from "react-redux";
import {setAuthUserData, thunkAuthUserData} from "../../redux/AuthReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.thunkAuthUserData()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    login: state.authUserData.login,
    isAuth: state.authUserData.isAuth,
})

export default connect(mapStateToProps, {setAuthUserData, thunkAuthUserData})(HeaderContainer);
