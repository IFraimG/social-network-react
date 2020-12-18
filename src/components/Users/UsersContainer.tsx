import React, { useEffect } from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Loader from "../Loaders/Loader"
import WithAuthRedirect from "../hoc/WithAuthRedirect"
import { 
  getFullPages, getUsersThunkCreator, redirectPageThunk, 
  toggleFollowing, loadUsers, filterFollowers 
} from "../../redux/users-reducer"
import { 
  receivePageSize, receiveTotalCount, 
  receiveCurrentPage, receiveIsFullPages, receiveLoading,
  receiveFollowProgress, receiveisAutoLoading, receiveUserSuper, reFindUsersSelector
} from "../../redux/selectors/users"
import { compose } from "redux";
import { AppStateType } from "../../redux/redux-store";

const UsersContainer = (props: any) => {
  useEffect(() => {
    props.getUsersThunkCreator(props.currentPage, props.pageSize)
  }, [])

  const redirectToPage = (numPage: number, element: any) => {
    props.redirectPageThunk(numPage, element, props.pageSize)
  }

  const loadUsersData = (element: any, pageSize: number, currentPage: number) => {
    window.scrollBy({ top: element.current.getBoundingClientRect().top, behavior: "smooth" })
    props.loadUsers(pageSize, currentPage)
  }

  const loadFullData = () => props.getFullPages()

  let loader: any = ""
  if (props.isLoading) loader = <Loader />
  return (
    <React.Fragment>
      { loader }
      <Users 
        { ...props }
        redirectToPage={ redirectToPage }
        loadFullData={ loadFullData }
        loadUsers={ loadUsersData }
        filterFollowers={ props.filterFollowers }
      />
    </React.Fragment>
  )
}

type mapStateToPropsType = {
  users: Array<any>,
  pageSize: number,
  totalUsersCount: number,
  currentPage: number,
  isFull: boolean,
  isLoading: boolean,
  isAutoLoading: boolean,
  followingAtProgress: any,
  isFollowers: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return { 
    users: receiveUserSuper(state),
    pageSize: receivePageSize(state),
    totalUsersCount: receiveTotalCount(state),
    currentPage: receiveCurrentPage(state),
    isFull: receiveIsFullPages(state),
    isLoading: receiveLoading(state),
    isAutoLoading: receiveisAutoLoading(state),
    followingAtProgress: receiveFollowProgress(state),
    isFollowers: reFindUsersSelector(state)
  };
};

export default compose(
  WithAuthRedirect,
  connect(mapStateToProps, { 
    getFullPages, getUsersThunkCreator, redirectPageThunk, 
    toggleFollowing, loadUsers, filterFollowers
  }),
)(UsersContainer);