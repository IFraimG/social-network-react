import { connect } from "react-redux";
import Users from "./Users";
import { refollowAC, setUsersAC } from "../../redux/users-reducer"

const mapStateToProps = (state) => {
  return { users: state.usersPage.users };
};
const mapDispatchToProps = (dispatch) => {
  return {
    refollow: userID => dispatch(refollowAC(userID)),
    setUsers: users => dispatch(setUsersAC(users))
  };
};
const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserContainer;
