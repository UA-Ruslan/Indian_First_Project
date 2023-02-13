import React from "react";
import App from "./App";
import {connect} from "react-redux";
import {thunkSetAppInit} from "./utilit/redux/AppReducer";
import Preloader from "./component/preloader/Preloader";

class AppContainer extends React.Component {
    componentDidMount() {
        this.props.thunkSetAppInit()
    }

    render() {
        if (!this.props.appInit) {
           return <Preloader/>
        }
        return (
            <div>
                <App/>
            </div>
        );
    }
}

let mapStateToProps =  (state) => ({
    appInit: state.appInit.appInit
})

export default connect (mapStateToProps, {thunkSetAppInit})(AppContainer);
