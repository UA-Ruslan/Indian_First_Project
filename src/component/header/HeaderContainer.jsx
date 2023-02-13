import React from 'react'
import Header from './Header';
import {connect} from "react-redux";
import {setAuthUserData, thunkLogout} from "../../utilit/redux/AuthReducer";

class HeaderContainer extends React.Component {
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

export default connect(mapStateToProps, {thunkLogout, setAuthUserData})(HeaderContainer);
