export const getUsers = (state) => {
    return state.friendsPage.users;
};

export const getTotalUsersCount = (state) => {
    return state.friendsPage.totalUsersCount;
};

export const getUsersOnPage = (state) => {
    return state.friendsPage.usersOnPage;
};

export const getCurrentPage = (state) => {
    return state.friendsPage.currentPage;
};

export const getPreloader = (state) => {
    return state.friendsPage.setPreloader;
};

export const setToggleDisabled = (state) => {
    return state.friendsPage.toggleDisabled;
}
export const getProfileUserInfo = (state) => {
    return state.friendsPage.setProfileUserInfo
}