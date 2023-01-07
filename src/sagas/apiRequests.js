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