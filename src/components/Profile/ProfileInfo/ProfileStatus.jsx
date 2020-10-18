import React from "react";
import styles from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.status.length && this.props.status.length > 0) this.state.status = this.props.status
  }

  toggleModeActivate = () => {
    this.setState((state) => ({editMode: !state.editMode}))
    if (this.setState.status) this.props.updateStatus(this.state.status)
  }

  sendStatus = (event) => {
    this.props.updateStatus(this.state.status)
    this.setState({editMode: false})
  }

  inputStatus = (event) => {
    this.setState({status: event.target.value})
  }

  render() {
    let description = <p onDoubleClick={ this.toggleModeActivate }>The user doesn't complete a status</p>
    if (this.props.status) description = <p onDoubleClick={ this.toggleModeActivate }>{ this.props.status }</p>

    return (
      <>
        {!this.state.editMode &&
          <div>
            { description }
          </div>
        }
        {this.state.editMode &&
          <div className={styles.info__input}>
            <input 
              autoFocus={true} 
              type="text" 
              onChange={this.inputStatus}
              value={this.state.status}
              placeholder="Complete your status..." 
            />
            <img 
              onClick={ this.sendStatus } 
              className={styles.info__save} 
              src="https://www.flaticon.com/svg/static/icons/svg/25/25398.svg" 
              alt=""/
            >
            <img 
              onClick={ this.toggleModeActivate } 
              className={styles.info__save} 
              src="https://www.flaticon.com/svg/static/icons/svg/126/126497.svg" 
              alt=""/
            >
          </div>
        }
      </>
    ) 
  }
}

export default ProfileStatus;
