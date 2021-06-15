import { strict as assert } from "assert"
import { axiosGet, axiosPost } from "../http/axios"
import { ENV } from './env'
// import { decode as atob } from 'atob'
const atob = require('atob')

const result = require('dotenv').config()

export function parseJwt(token: string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c: any) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
export function validJwt(date: number): boolean {
    let now = new Date().getTime();
    console.log('now:', now)
    let due = new Date(date * 1000).getTime();
    console.log('due:', due)

    return (due - now) >= 60000
}


export async function initRESTful() {
    console.log('init RESTful')
    assert(process.env.protocol, 'env protocol undefined')
    assert(process.env.HOST, 'env HOST undefined')
    assert(process.env.PORT, 'env PORT undefined')

    ENV.urlBase = process.env.protocol
        + '://'
        + process.env.HOST + ':'
        + process.env.PORT + '/'

    console.log('url base:', ENV.urlBase)

    console.log("\nUpdate JWT")
    let result = await axiosPost(ENV.urlBase + 'api/internal/login', {
        email: process.env.EMAIL,
        password: process.env.PASSWORD
    })




}