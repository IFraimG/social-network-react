import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Loader from "../Loaders/Loader"
import { refollow, setUsers, editPage, setTotalCount, getFullPages, reloading } from "../../redux/users-reducer"
import { usersAPI } from "../../api/api"

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.reloading()
    usersAPI.getPageUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.setUsers(data.items)
        this.props.setTotalCount(data.totalCount)
        this.props.reloading()
      });
  }
  redirectToPage = (numPage, element) => {
    this.props.editPage(numPage)
    usersAPI.getPageUsers(numPage, this.props.pageSize)
      .then(data => {
        this.props.setUsers(data.items)
        window.scrollBy({ top: element.current.getBoundingClientRect().top, behavior: "smooth" })
      });
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
    isLoading: state.usersPage.isLoading
  };
};

export default connect(mapStateToProps, { refollow, setUsers, editPage, setTotalCount, getFullPages, reloading })(UsersContainer);