import React from 'react'
import Header from './Header';
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/AuthReducer";
import {apiMethods} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        apiMethods.authUserData().then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })

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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
