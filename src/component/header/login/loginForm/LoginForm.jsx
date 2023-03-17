import React, {useState} from 'react'
import {Field, reduxForm} from 'redux-form'
import {maxLength, required} from "../../../../utilit/validation/formsValidate";
import Input from "./loginFormControl/LoginFormControl"
import style from "./loginFormControl/LoginFormControl.module.css"
import ReCAPTCHA from "react-google-recaptcha";


let LoginForm = (props) => {
    const [disable, setDisable] = useState(true)
    const [checked, setChecked] = useState(false)
    const [message, setMessage] = useState(false)
    const {handleSubmit} = props
    let maxValueLength = maxLength(20)
    const recaptchaRef = React.createRef();
    const onChange = (e) => {
        setChecked(true)
        setDisable(true)
        setMessage(false)

    }
    const onMouseOver = () => {
        if(!checked){
            setDisable(false)
            setMessage(true)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            {props.error && <span className={style.generalError}>{props.error}</span>}
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
            <div className={style.checkbox}>
                <Field
                    name="rememberMe"
                    component="input"
                    type="checkbox"
                /><p style={{marginLeft: "5px"}}>remember me</p>
            </div>
            <div className={style.captcha}>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LcIs_QkAAAAAD4stChdE-wAcWzkEA9RBVzrteLy"
                    onChange={onChange}
                />
            </div>

            <div>
                <button onMouseOver={onMouseOver} disabled={!disable} className={style.btnStyle}>sign in</button>
            </div>
            {message && <span>Confirm you are not a robot.</span>}
        </form>
    )
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginForm