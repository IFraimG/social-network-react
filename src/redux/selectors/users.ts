import { createSelector } from "reselect";
import { AppStateType } from "../redux-store";

export const receivePageSize = (state: AppStateType): number => { 
    let pageSize: any = state.usersPage
    return pageSize.pageSize
}
export const receiveTotalCount = (state: AppStateType): number => { 
    let totalUsersCount: any = state.usersPage
    return totalUsersCount.totalUsersCount 
}
export const receiveCurrentPage = (state: AppStateType): number => { 
    let currentPage: any = state.usersPage
    return currentPage.currentPage 
}
export const receiveIsFullPages = (state: AppStateType): boolean => { 
    let isFull: any = state.usersPage
    return isFull.isFull 
}
export const receiveLoading = (state: AppStateType): boolean => { 
    let isLoading: any = state.usersPage
    return isLoading.isLoading 
}
export const receiveisAutoLoading = (state: AppStateType): boolean => {
    let isAutoLoading: any = state.usersPage
    return isAutoLoading.isAutoLoading 
}
export const receiveFollowProgress = (state: AppStateType): any => { 
    let followingAtProgress: any = state.usersPage
    return followingAtProgress.followingAtProgress 
}

export const reFindUsers = (state: AppStateType): boolean => {
    let isFollowers: any = state.usersPage
    return isFollowers.isFollowers
}

export const reFindUsersSelector = createSelector(reFindUsers, (isFollowers) => {
    return isFollowers
})

export const receiveUser = (state: AppStateType): Array<any> => {
    let users: any = state.usersPage
    return users.users
}

export const receiveUserSuper = createSelector(receiveUser, reFindUsers, (users, isFollowers) => {
    return users.filter(user => true)
})