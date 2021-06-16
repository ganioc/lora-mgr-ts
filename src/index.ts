
import { initEnvFile, initRESTful } from "./RestApi/index.js";

import * as dotenv from 'dotenv'


export async function init() {
    console.log('RestApi init()')

    dotenv.config()

    await initEnvFile();

    await initRESTful();
}

export { getApplications } from './RestApi/api/Application/getApplications.js'
export { setApplication } from './RestApi/api/Application/setApplication.js'
export { setOrganization } from './RestApi/api/Organization/setOrganization.js'
export { getOrganizations } from './RestApi/api/Organization/getOrganizations.js'
export { getOrganizationById } from './RestApi/api/Organization/getOrganizationById.js'
export { setService } from './RestApi/api/Service/setService.js'
export { getNetworkServers, setNetworkServer } from './RestApi/api/Network/server.js'