import * as url from 'url'
const result = require('dotenv').config()
import * as path from 'path';


// const str = new url.URL({
//     protocol: 'http',
//     hostname: process.env.HOST,
//     pathname: '/api/applications',
//     // query: {
//     //     limit: 10,
//     //     offset: 0,
//     //     organizationID: 1
//     // }
// })

let params = new url.URLSearchParams(
    {
        limit: '10',
        offset: '0',
        organizationID: '1'
    }
)
console.log('params:', params.toString())

let pathStr = path.join('api', 'applications')
console.log('path:', pathStr)