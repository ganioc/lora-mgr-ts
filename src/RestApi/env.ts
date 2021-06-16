import * as path from 'path'
import { Low, JSONFile } from 'lowdb'
import { strict as assert } from "assert"
import { DelayMs } from '../misc.js'
import axios from 'axios'

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
        let result = await axios.post(dbEnv.data!.urlBase + '/api/internal/login', {
            email: process.env.EMAIL,
            password: process.env.PASSWORD
        })
        // console.log('result:', result);

        if (result.data.jwt) {
            //
            dbEnv.data!.jwt = result.data.jwt
            dbEnv.write();
        } else {
            console.error('Can not get jwt')
            console.log('Delay 10 seconds')
            await DelayMs(10000)
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
        // console.log('obj', obj)
        return isValidJwtExp(obj.exp)
    } catch (e) {
        console.log(e)
        console.log('Invalid jwt')
        return false;
    }
}
export function parseJwt(token: string) {
    // console.log("check jwt:", token)
    // console.log("token length:", token.length)
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(Buffer.from(base64, 'base64').toString('binary').split('').map(function (c: any) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
export function isValidJwtExp(date: number): boolean {
    let now = new Date().getTime();
    let due = new Date(date * 1000).getTime();
    // console.log('now:', now, 'due:', due)

    return (due - now) >= 60000
}

