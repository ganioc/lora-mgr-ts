import axios from 'axios'
import { getJwt } from '../RestApi/env.js'

axios.defaults.timeout = 10000

async function axiosWrapper(nameMethod: string, method: any, url: string, data?: any) {
    try {
        console.log(nameMethod, ' Url:', url)
        const jwt = await getJwt();
        let result = await method
            (url, data, {
                headers: {
                    "Grpc-Metadata-Authorization": 'Bearer ' + jwt,
                    "verify": false
                }
            })
        return result.data
    } catch (e) {
        console.log("Data:", e.response.data)

        return {
            err: e.response.data.code,
            data: e.response.data.message
        }
    }
}

export const axiosPost = async function (url: string, data: any): Promise<any> {
    // try {
    //     console.log('Post Url:', url)
    //     const jwt = await getJwt();
    //     let result = await axios.post
    //         (url, data, {
    //             headers: {
    //                 "Grpc-Metadata-Authorization": 'Bearer ' + jwt,
    //                 "verify": false
    //             }
    //         })
    //     return result.data
    // } catch (e) {
    //     console.log("Data:", e.response.data)

    //     return {
    //         err: e.response.data.code,
    //         data: e.response.data.message
    //     }
    // }
    return axiosWrapper("POST", axios.post, url, data)
}

export const axiosGet = async function (url: string): Promise<any> {
    try {
        console.log('Get Url:', url)
        const jwt = await getJwt();
        let result = await axios.get(url, {
            headers: {
                "Grpc-Metadata-Authorization": 'Bearer ' + jwt,
                "verify": false
            }
        })
        return result.data
    } catch (e) {
        console.log("Data:", e.response.data)

        return {
            err: e.response.data.code,
            data: e.response.data.message
        }
    }
    // eturn axiosWrapper("GET", axios.get, url, {});
}


export const axiosDelete = async function (url: string): Promise<any> {
    try {
        console.log('Delete Url:', url)
        const jwt = await getJwt();
        let result = await axios.delete(url, {
            headers: {
                "Grpc-Metadata-Authorization": 'Bearer ' + jwt,
                "verify": false
            }
        })
        return result.data
    } catch (e) {
        console.log("Data:", e.response.data)

        return {
            err: e.response.data.code,
            data: e.response.data.message
        }
    }
    // return axiosWrapper("DELETE", axios.delete, url, {});
}

export const axiosPut = async function (url: string, data: any) {
    return axiosWrapper("PUT", axios.put, url, data);
}