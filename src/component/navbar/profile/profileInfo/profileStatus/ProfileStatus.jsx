import React from 'react'
import style from './profileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
        this.props.setStatus(this.state.status)
    }

    onInputChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {

        return (
            <div className={style.statusWrapper}>
                {!this.state.editMode &&
                    <div>
                        <span>Status: </span><span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || '"click twice to add status"'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true}
                               onBlur={this.deactivateEditMode.bind(this)}
                               value={this.state.status}
                               onChange={this.onInputChange}
                               type="text"
                               className={style.inputStyle}
                        />
                    </div>
                }

            </div>
        );
    };
}

export default ProfileStatus;