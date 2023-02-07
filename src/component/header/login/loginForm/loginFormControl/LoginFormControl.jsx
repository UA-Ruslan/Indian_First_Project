import React from "react"
import style from "./LoginFormControl.module.css"

const LoginFormControl = ({input, meta, ...props}) => {
    let formControl = meta.error && meta.touched
    return (
        <div>
            <div>
                {formControl && <span className={style.spanStyle}>{meta.error}</span>}
            </div>
            <div className={style.formControl + " " + (formControl ? style.error : "")}>
                <input className={style.inputStyle}
                       {...input}
                       {...props}
                ></input>
            </div>
        </div>
    )
}

export default LoginFormControl;