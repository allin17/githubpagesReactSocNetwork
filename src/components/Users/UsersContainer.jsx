import React from 'react'
import {connect} from "react-redux";
import {
    follow, requestUsers,
    setCurrentPage,
    setUsersTotalCount, toggleFollowingProgress,
    toggleIsFetching,
    unfollow,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getUsers,
    followingInProgress,
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersR(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged=(p)=>{
        this.props.getUsersR(p, this.props.pageSize)
    }
    
    render() {
        return <>

            {this.props.isFetching ? <Preloader /> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                   portionSize={this.props.portionSize}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalUsersCount:getTotalUsersCount(state),
        pageSize:getPageSize(state),
        currentPage:getCurrentPage(state),
        isFetching:getIsFetching(state),
        followingInProgress: followingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
    follow,
    unfollow,setCurrentPage,
    getUsersR: requestUsers,setUsersTotalCount,
    toggleIsFetching,toggleFollowingProgress,
}),)
(UsersContainer)


