import { createSelector } from "reselect";

export const receivePageSize = state => { 
    return state.usersPage.pageSize
}
export const receiveTotalCount = state => { 
    return state.usersPage.totalUsersCount 
}
export const receiveCurrentPage = state => { 
    return state.usersPage.currentPage 
}
export const receiveIsFullPages = state => { 
    return state.usersPage.isFull 
}
export const receiveLoading = state => { 
    return state.usersPage.isLoading 
}
export const receiveisAutoLoading = state => {
    return state.usersPage.isAutoLoading 
}
export const receiveFollowProgress = state => { 
    return state.usersPage.followingAtProgress 
}

export const reFindUsers = state => {
    return state.usersPage.isFollowers
}

export const reFindUsersSelector = createSelector(reFindUsers, (isFollowers) => {
    return isFollowers
})

export const receiveUser = state => {
    return state.usersPage.users
}

export const receiveUserSuper = createSelector(receiveUser, reFindUsers, (users, isFollowers) => {
    return users.filter(user => true)
})