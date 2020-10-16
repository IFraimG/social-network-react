import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Loader from "../Loaders/Loader"
import { getFullPages, getUsersThunkCreator, redirectPageThunk, toggleFollowing, loadUsers } from "../../redux/users-reducer"

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
  }
  redirectToPage = (numPage, element) => {
    this.props.redirectPageThunk(numPage, element, this.props.pageSize)
  }

  loadUsersData = (element, pageSize, currentPage) => {
    this.props.loadUsers(element, pageSize, currentPage)
  }

  loadFullData = () => this.props.getFullPages()

  render() {
    let loader = ""
    if (this.props.isLoading) loader = <Loader />
    return <React.Fragment>
      { loader }
      <Users 
        { ...this.props }
        redirectToPage={ this.redirectToPage }
        loadFullData={ this.loadFullData }
        loadUsers={ this.loadUsersData }
      />
    </React.Fragment>
  }
}

const mapStateToProps = (state) => {
  return { 
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFull: state.usersPage.isFull,
    isLoading: state.usersPage.isLoading,
    followingAtProgress: state.usersPage.followingAtProgress
  };
};

export default connect(mapStateToProps, { getFullPages, getUsersThunkCreator, redirectPageThunk, toggleFollowing, loadUsers })(UsersContainer);