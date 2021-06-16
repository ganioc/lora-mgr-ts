import axios from 'axios'
import { getJwt } from '../RestApi/env.js'

axios.defaults.timeout = 10000

export const axiosPost = async function (url: string, data: any): Promise<any> {
    try {
        console.log('Post Url:', url)
        const jwt = await getJwt();
        let result = await axios.post
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
        // console.log(e)
        // console.log("config:", e.config)
        console.log("Data:", e.response.data)

        return {
            err: e.response.data.code,
            data: e.response.data.message
        }
    }
}