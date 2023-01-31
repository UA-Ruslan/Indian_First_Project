import React from 'react'
import {Field, reduxForm} from 'redux-form'


let LoginForm = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="login" component="input"  placeholder={"login"}/>
            </div>
            <div>
                <Field name="password" component="input" placeholder={"password"}/>
            </div>
            <div>
                <Field name="remember me" component="input" type="checkbox"/> remember me
            </div>
            <div>
                <button>sign in</button>
            </div>
        </form>
    )
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginForm