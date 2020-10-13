import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Loader from "../Loaders/Loader"
import { refollowAC, setUsersAC, redirectPageAC, setTotalCountAC, setFullPagesAC, reloadingAC } from "../../redux/users-reducer"
import * as axios from "axios";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.reloading()
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items)
        this.props.setTotalCount(res.data.totalCount)
        this.props.reloading()
      });
  }
  redirectToPage = (numPage, element) => {
    this.props.editPage(numPage)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numPage}&count=${this.props.pageSize}`)
      .then((res) => this.props.setUsers(res.data.items));
    window.scrollBy({ top: element.current.getBoundingClientRect().top, behavior: "smooth" })
  }

  loadFullData = () => this.props.getFullPages()

  render() {
    let loader = ""
    if (this.props.isLoading) loader = <Loader />
    return <React.Fragment>
      { loader }
      <Users 
        totalUsersCount={ this.props.totalUsersCount } 
        pageSize={ this.props.pageSize }
        currentPage={ this.props.currentPage }
        redirectToPage={ this.redirectToPage }
        loadFullData={ this.loadFullData }
        users={ this.props.users }
        refollow={ this.props.refollow }
        isFull={ this.props.isFull }
        isLoading={ this.props.isLoading }
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

const mapDispatchToProps = (dispatch) => {
  return {
    refollow: userID => dispatch(refollowAC(userID)),
    setUsers: users => dispatch(setUsersAC(users)),
    editPage: page => dispatch(redirectPageAC(page)),
    setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount)),
    getFullPages: () => dispatch(setFullPagesAC()),
    reloading: () => dispatch(reloadingAC())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);