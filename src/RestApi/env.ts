import * as path from 'path'
import { Low, JSONFile } from 'lowdb'
import { strict as assert } from "assert"
import { axiosPost } from '../http/index.js'

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
        console.log('to update jwt token')
        let result = await axiosPost(dbEnv.data!.urlBase + 'api/internal/login', {
            email: process.env.EMAIL,
            password: process.env.PASSWORD
        })
        console.log(result);

    }

    return dbEnv.data!.jwt;
}

export function isValidJwt(): boolean {

    try {
        let obj = parseJwt(dbEnv.data!.jwt)
        return isValidJwtExp(obj.exp)
    } catch (e) {
        console.log(e)
        return false;
    }
}
export function parseJwt(token: string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c: any) {
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

export async function initEnvFile() {
    console.log('\ninit env local file')
    assert(process.env.protocol, 'env protocol undefined')
    assert(process.env.HOST, 'env HOST undefined')
    assert(process.env.PORT, 'env PORT undefined')

    await dbEnv.read();

    const urlStr = process.env.protocol
        + '://'
        + process.env.HOST + ':'
        + process.env.PORT + '/'
    console.log('url base:', urlStr)

    if (!dbEnv.data || urlStr !== dbEnv.data.urlBase) {
        dbEnv.data = {
            jwt: '',
            urlBase: urlStr
        }
        await dbEnv.write()
        console.log('dbEnv saved.')
        console.log(dbEnv.data)
    }

}
