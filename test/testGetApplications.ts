const result = require('dotenv').config()
import { getApplications } from "../src/RestApi/getApplications"


const url = 'http://' + process.env.HOST + ':' + process.env.PORT


async function main() {
    const result = await getApplications(url);
    console.log('result:', result)
}
main()