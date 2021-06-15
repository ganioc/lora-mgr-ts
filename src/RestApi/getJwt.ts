import { axiosPost } from "../http/axios";


export async function getJwt(url: string, email: string, password: string) {
    return axiosPost(url, { email, password })
}