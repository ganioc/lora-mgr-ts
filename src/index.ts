
import { initEnvFile, initRESTful } from "./RestApi/index.js";

import * as dotenv from 'dotenv'


export async function init() {
    console.log('RestApi init()')

    dotenv.config()

    await initEnvFile();

    await initRESTful();
}

export { getApplications } from './RestApi/api/getApplications.js'
