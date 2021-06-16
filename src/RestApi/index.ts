import { strict as assert } from "assert"
import { getJwt, getDbEnv } from "./env.js"

export async function initEnvFile() {
    console.log('\ninit env local file')
    assert(process.env.protocol, 'env protocol undefined')
    assert(process.env.HOST, 'env HOST undefined')
    assert(process.env.PORT, 'env PORT undefined')

    const dbEnv = getDbEnv();
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



export async function initRESTful() {
    console.log('\ninit RESTful')

    assert(process.env.EMAIL, 'EMAIL undefined')
    assert(process.env.PASSWORD, 'PASSWORD undefined')

    console.log("\nUpdate JWT")

    let jwtStr = await getJwt();
    console.log('jwtStr:', jwtStr)

    // if jwtStr not valid, re do it after delay

}