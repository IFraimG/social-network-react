import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Loader from "../Loaders/Loader"
import WithAuthRedirect from "../hoc/WithAuthRedirect"
import { getFullPages, getUsersThunkCreator, redirectPageThunk, toggleFollowing, loadUsers } from "../../redux/users-reducer"
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
  }
  redirectToPage = (numPage, element) => {
    this.props.redirectPageThunk(numPage, element, this.props.pageSize)
  }

  loadUsersData = (element, pageSize, currentPage) => {
    window.scrollBy({ top: element.current.getBoundingClientRect().top, behavior: "smooth" })
    this.props.loadUsers(pageSize, currentPage)
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
    isAutoLoading: state.usersPage.isAutoLoading,
    followingAtProgress: state.usersPage.followingAtProgress,
    isAuth: state.auth.isAuth
  };
};

export default compose(
  WithAuthRedirect,
  connect(mapStateToProps, { getFullPages, getUsersThunkCreator, redirectPageThunk, toggleFollowing, loadUsers }),
)(UsersContainer);