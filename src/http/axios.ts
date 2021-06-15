import axios from 'axios'
import { ENV } from '../RestApi/env'

axios.defaults.timeout = 10000

export const axiosPost = async function (url: string, data: any): Promise<any> {
    try {
        let result = await axios.post(url, data, {
            headers: {
                "Grpc-Metadata-Authorization": 'Bearer ' + ENV.jwt,
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
const tokenExample = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhcyIsImV4cCI6MTYyMzgwNTk4MiwiaWQiOjEsImlzcyI6ImFzIiwibmJmIjoxNjIzNzE5NTgyLCJzdWIiOiJ1c2VyIiwidXNlcm5hbWUiOiJhZG1pbiJ9.kNUy37zm1en1fFkyBPYQn7uVDjOxMumnZz7gVfStmc0'

export const axiosGet = async function (url: string): Promise<any> {

    try {
        console.log('Get Url:', url)
        let result = await axios.get(url, {
            headers: {
                "Grpc-Metadata-Authorization": 'Bearer ' + ENV.jwt,
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

        // console.log(e.getMessage(), e.getCode())

        // if (e.data.code === 16) {
        //     return {
        //         err: 16,
        //         data: 'authentication failed'
        //     }
        // } else {
        //     return {
        //         err: 1,
        //         data: 'timeout'
        //     }
        // }

    }
}