import * as path from 'path'
import { Low, JSONFile } from 'lowdb'
import { strict as assert } from "assert"
import { axiosPost } from '../http/axios'

export type Config = {
    jwt: string;
    urlBase: string;
}

let objConfig: Config = {
    jwt: '',
    urlBase: ''
}


export async function getJwt() {

    if (!isValidJwt()) {
        console.log('to update jwt token')
        let result = await axiosPost(getUrlBase() + 'api/internal/login', {
            email: process.env.EMAIL,
            password: process.env.PASSWORD
        })
        console.log(result);
        updateConfigJwt("")
    }

    return objConfig.jwt;
}
export function getUrlBase() {
    return objConfig.urlBase
}
export function isValidJwt(): boolean {

    try {
        let obj = parseJwt(objConfig.jwt)
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

export function updateConfigJwt(jwt: string) {
    console.log('update jwt:', jwt)
    objConfig.jwt = jwt;
}
export function updateConfigUrlbase(url: string) {
    console.log('update urlbase:', url)
    objConfig.urlBase = url;
}
export function getConfig() {
    return objConfig
}

export async function getEnvDb() {
    const file = path.join(__dirname, 'config/config.json')

    const adapter = new JSONFile<Config>(file)

    const db = new Low<Config>(adapter)

    await db.read();

    return db;
}

export async function initEnvFile() {
    console.log('\ninit env local file')
    assert(process.env.protocol, 'env protocol undefined')
    assert(process.env.HOST, 'env HOST undefined')
    assert(process.env.PORT, 'env PORT undefined')

    const db = await getEnvDb();

    if (!db.data) {
        db.data = {
            jwt: '',
            urlBase: ''
        }
    }

    const urlStr = process.env.protocol
        + '://'
        + process.env.HOST + ':'
        + process.env.PORT + '/'
    console.log('url base:', urlStr)

    updateConfigJwt(db.data.jwt)
    updateConfigUrlbase(urlStr);

    if (urlStr !== db.data.urlBase) {
        db.data.urlBase = urlStr
        await db.write()
        console.log('db saved.')
    }

}
