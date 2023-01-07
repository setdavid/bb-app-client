import axios from "axios";

export const requestLogIn = async (username, password) => {
    let requestOptions = {
        url: `/auth/login`,
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            username,
            password
        }
    }

    return axios(requestOptions)
}

export const requestRefreshAccessToken = async () => {
    let requestOptions = {
        url: `/auth/refresh`,
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            refresh_token: sessionStorage.getItem("refresh_token")
        }
    }

    return axios(requestOptions)
}