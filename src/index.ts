
import { initEnvFile } from "./RestApi/env.js";

import * as dotenv from 'dotenv'


export async function init() {
    console.log('RestApi init()')

    dotenv.config()

    await initEnvFile();

    // await initRESTful();
}

