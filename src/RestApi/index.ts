import { strict as assert } from "assert"
import { axiosGet, axiosPost } from "../http/axios"
import { getEnvDb, getJwt } from "./env";
// import { ENV } from './env'
// import { decode as atob } from 'atob'
const atob = require('atob')

const result = require('dotenv').config()






export async function initRESTful() {
    console.log('init RESTful')

    assert(process.env.EMAIL, 'EMAIL undefined')
    assert(process.env.PASSWORD, 'PASSWORD undefined')

    console.log("\nUpdate JWT")

    let jwtStr = await getJwt();
    console.log('jwtStr:', jwtStr)
    // if (!isValidJwt()) {
    //     let result = await axiosPost(db.data!.urlBase + 'api/internal/login', {
    //         email: process.env.EMAIL,
    //         password: process.env.PASSWORD
    //     })

    //     console.log('result:', result)
    //     console.log('update jwt')
    // }


}