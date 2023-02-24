import axios from "axios";

// const axiosSamuraiInstance = axios.create({
//     withCredentials: true,
//     baseURL: `https://social-network.samuraijs.com/api/1.0/`
// })
const axiosLocalServerInstance = axios.create({
    withCredentials: true,
    baseURL: `http://localhost:4000/`
})

export const apiMethods = {

    //----------------------------------------------------------------Samurai.js-Server-------------------------------------------------//

    // apiAuthUserData() {
    //     return (
    //         axiosSamuraiInstance.get(`auth/me`)
    //             .then(response => {
    //                 return (
    //                     response.data
    //                 )
    //             })
    //     )
    // },
    // apiLogin (email, password, rememberMe= false) {
    //     return(
    //         axiosSamuraiInstance.post(`/auth/login`, {email, password, rememberMe})
    //             .then(response => {
    //                 return (response.data)
    //             })
    //     )
    // },
    // apiLogout () {
    //     return (
    //         axiosSamuraiInstance.delete(`/auth/login`)
    //             .then(response => {
    //                 return(response.data)
    //             })
    //     )
    // }


    //----------------------------------------------------------------My-Local-Server-------------------------------------------------------//

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
    apiSetTogglePreloader(usersOnPage, currentPage) {
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
    apiSetProfileUserInfo2(id) {
        return (
            axiosLocalServerInstance.get(`users?_page=${id}&_limit=1&_embed=profileInfo`)
                .then(response => {
                    return (
                        response.data
                    )
                })
        )
    },
    apiSetUnfollow(id) {
        return (
            axiosLocalServerInstance.patch(`users/${id}`, {following: false})
                .then(response => {
                    return (response.data)
                })
        )
    },
    apiSetFollow(id) {
        return (
            axiosLocalServerInstance.patch(`users/${id}`, {following: true})
                .then(response => {
                    return (response.data)
                })
        )
    },
    apiGetStatus() {
        return (
            axiosLocalServerInstance.get(`myStatus`)
                .then(response => {
                    return (response.data)
                })
        )
    },
    apiSetStatus(status) {
        return (
            axiosLocalServerInstance.put(`myStatus`, {myStatus: status})
                .then(response => {
                    return (response.data)
                })
        )
    },



    apiAuthUserData() {
        return (
            axiosLocalServerInstance.get(`authMe`)
                .then(response => {
                    return (
                        response.data
                    )
                })
        )
    },
    apiLogin(email, login) {
        return (
            axiosLocalServerInstance.put(`authMe`, {email, login})
                .then(response => {
                    return (response.data)
                })
        )
    },
    apiLogout(a, b) {
        return (
            axiosLocalServerInstance.put(`authMe`, {a, b})
                .then(response => {
                    return (response.data)
                })
        )
    },

}