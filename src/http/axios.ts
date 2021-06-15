import axios from 'axios'

axios.defaults.timeout = 10000

export const axiosPost = async function (url: string, data: any): Promise<any> {
    try {
        let result = await axios.post(url, data, {
        })
        return result.data
    } catch (e) {
        return {
            err: 1,
            data: 'timeout'
        }
    }
}
export const axiosGet = async function (url: string): Promise<any> {
    try {
        let result = await axios.get(url, {
        })
        return result.data
    } catch (e) {
        return {
            err: 1,
            data: 'timeout'
        }
    }
}