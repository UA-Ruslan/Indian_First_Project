import axios from "axios";

const axiosSamuraiInstance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})
const axiosLocalServerInstance = axios.create({
    withCredentials: true,
    baseURL: `http://localhost:4000/`
})
export const apiMethods = {
    authUserData() {
        return (
            axiosSamuraiInstance.get(`auth/me`)
                .then(response => {
                    return (
                        response.data
                    )
                })
        )
    },
    apiPageChangeOnClick(usersOnPage, el) {
        return (
            axiosLocalServerInstance.get(`users?_limit=${usersOnPage}&_page=${el}`)
                .then(response => {
                    return (
                        response.data
                    )
                })
        )
    },
    apiSetToggleOnFetch(usersOnPage, currentPage) {
        return (
            axiosLocalServerInstance.get(`users?_limit=${usersOnPage}&_page=${currentPage}`)
                .then(response => {
                    return (
                        response.data
                    )
                })
        )
    },
    apiSetTotalUsersCount() {
        return (
            axiosLocalServerInstance.get(`totalUsersCount`)
                .then(response => {
                    return (
                        response.data
                    )
                })
        )
    },
    apiSetProfileUserInfo() {
        return (
            axiosLocalServerInstance.get('profileInfo')
                .then(response => {
                    return (
                        response.data
                    )
                })
        )
    },
    apiSetProfileUserInfo2(id) {
        return (
            axiosLocalServerInstance.get(`users?_page=${id}&_limit=1&_embed=profileInfo`)
                .then(response => {
                    return (
                        response.data
                    )
                })
        )
    }


}