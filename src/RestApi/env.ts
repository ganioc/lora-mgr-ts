import * as path from 'path'
import { Low, JSONFile } from 'lowdb'
import { strict as assert } from "assert"
import { axiosPost } from '../http/index.js'
import { DelayMs } from '../misc.js'

export type Config = {
    jwt: string;
    urlBase: string;
}

const file = path.join('config', 'config.json')
const adapter = new JSONFile<Config>(file)

// dbEnv is a globally shared file handle
let dbEnv = new Low<Config>(adapter)

export function getDbEnv() {
    return dbEnv
}

export async function getJwt() {

    if (!isValidJwt()) {
        console.log('Invalid jwt, so to update jwt token')
        let result = await axiosPost(dbEnv.data!.urlBase + 'api/internal/login', {
            email: process.env.EMAIL,
            password: process.env.PASSWORD
        })
        console.log('result:', result);

        if (result.jwt) {
            //
            dbEnv.data!.jwt = result.jwt
            dbEnv.write();
        } else {
            console.error('Can not get jwt')
            console.log('Delay 5 seconds')
            await DelayMs(5000)
            console.log('Fetch jwt again')
            await getJwt()
        }
    } else {
        console.log('Valid jwt')
    }

    return dbEnv.data!.jwt;
}

export function isValidJwt(): boolean {

    try {
        let obj = parseJwt(dbEnv.data!.jwt)
        console.log('obj', obj)
        return isValidJwtExp(obj.exp)
    } catch (e) {
        console.log(e)
        console.log('Invalid jwt')
        return false;
    }
}
export function parseJwt(token: string) {
    console.log("check jwt:", token)
    console.log("token length:", token.length)
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(Buffer.from(base64, 'base64').toString('binary').split('').map(function (c: any) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
export function isValidJwtExp(date: number): boolean {
    let now = new Date().getTime();
    console.log('now:', now)
    let due = new Date(date * 1000).getTime();
    console.log('due:', due)

    return (due - now) >= 60000
}

