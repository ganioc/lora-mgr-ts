
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
export { setService, getServices, getServiceById, deleteServiceById } from './RestApi/api/ServiceProfile/service.js'
export { getNetworkServers, setNetworkServer, getNetworkServerById } from './RestApi/api/Network/server.js'
export { getGatewayProfiles, setGatewayProfile, getGateways, setGateway, getGatewayStats } from './RestApi/api/Gateway/gateway.js'
export { getDeviceProfiles, setDeviceProfile, getDevices, setDevice } from './RestApi/api/Device/device.js'