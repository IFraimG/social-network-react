import React from "react";
import styles from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }

  toggleModeActivate = event => {
    this.setState((state, props) => ({editMode: !state.editMode}))
  }

  render() {
    let description = <p onClick={ this.toggleModeActivate }>The user doesn't complete a status</p>
    if (this.props.profile && this.props.profile.aboutMe !== null) description = <p>{ this.props.profile.aboutMe }</p>

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
              onBlur={this.toggleModeActivate} 
              placeholder="Complete your status..." 
              value={this.props.profile.aboutMe} 
            />
            <img 
              onClick={ this.toggleModeActivate } 
              className={styles.info__save} 
              src="https://www.flaticon.com/svg/static/icons/svg/25/25398.svg" 
              alt=""/
            >
          </div>
        }
      </>
    ) 
  }
}

export default ProfileStatus;
