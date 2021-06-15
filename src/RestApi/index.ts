import { strict as assert } from "assert"
import { getJwt } from "./env"

import * as dotenv from 'dotenv'
dotenv.config()


export async function initRESTful() {
    console.log('init RESTful')

    assert(process.env.EMAIL, 'EMAIL undefined')
    assert(process.env.PASSWORD, 'PASSWORD undefined')

    console.log("\nUpdate JWT")

    let jwtStr = await getJwt();
    console.log('jwtStr:', jwtStr)

}