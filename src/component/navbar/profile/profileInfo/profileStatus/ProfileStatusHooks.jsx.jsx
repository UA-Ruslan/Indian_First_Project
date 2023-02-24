import React, {useEffect, useState} from 'react'
import style from './profileStatus.module.css'

const ProfileStatusHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    let [active, setActive] = useState(true)

    useEffect(() => {
            setStatus(props.status)
        },
        [props.status]
    )

    let activateEditMode = () => {
        setEditMode(true)
        setActive(false)
    }

    let deactivateEditMode = () => {
        setActive(true)
        setEditMode(false)
        props.setStatus(status)
    }

    let onInputChange = (event) => {
        setStatus(event.currentTarget.value)
    }

    return (
        <div className={`${active ? style.statusWrapper: ""}`}>
            {!editMode &&
                <div><span>Status: </span><span
                    onDoubleClick={activateEditMode}>{props.status || '"click twice to add status"'}</span></div>
            }
            {editMode &&
                <div>
                    <input
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        value={status}
                        onChange={onInputChange}
                        type="text"
                        className={style.inputStyle}
                    />
                </div>
            }

        </div>
    )
}

export default ProfileStatusHooks;