import React from "react"
import style from "./addPostFormControl.module.css"

const AddPostFormControl = ({input, meta, ...props}) => {
    let formControl = meta.error && meta.touched
    return (
        <div className={style.AddPostFormControl}>
            <div>
                {formControl && <span className={style.spanDec}>{meta.error}</span>}
            </div>
            <div className={style.formControl + " " + (formControl ? style.error : "")}>
                <textarea className={style.textareaStyle}
                          placeholder='Write your post here'
                          {...input}
                          {...props}
                />
            </div>
        </div>
    )
}

export default AddPostFormControl;