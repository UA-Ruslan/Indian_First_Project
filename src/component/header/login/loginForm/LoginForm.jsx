import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {maxLength, required} from "../../../../utilit/validation/formsValidate";
import Input from "./loginFormControl/LoginFormControl"
import style from "./loginFormControl/LoginFormControl.module.css"

let LoginForm = (props) => {
    const {handleSubmit} = props
    let maxValueLength =maxLength(20)
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="email"
                       component={Input}
                       placeholder={"email"}
                       validate={[required, maxValueLength]}
                />
            </div>
            <div>
                <Field name="password"
                       component={Input}
                       placeholder={"password"}
                       validate={[required, maxValueLength]}
                />
            </div>
            <div>
                <Field
                    name="rememberMe"
                       component="input"
                       type="checkbox"
                /> remember me
            </div>
            <div>
                <button className={style.btnStyle}>sign in</button>
            </div>
        </form>
    )
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginForm