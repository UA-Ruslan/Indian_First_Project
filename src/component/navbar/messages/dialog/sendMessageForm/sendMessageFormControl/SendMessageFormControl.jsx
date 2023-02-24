import React from "react"
import style from "./sendMessageFormControl.module.css"

const SendMessageFormControl = ({input, meta, ...props}) => {

    let formControl = meta.error && meta.touched

    return (
        <div className={style.formControlWrapper}>
            <div>
                {formControl && <span className={style.spanDec}>{meta.error}</span>}
            </div>
            <div className={style.formControl + " " + (formControl ? style.error: "")}>
                <textarea className={style.areaDec}
                          placeholder={"your new message"}
                          {...input}
                          {...props}
                />
            </div>
        </div>
    )
}

export default SendMessageFormControl;