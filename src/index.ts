
import { initEnvFile, initRESTful } from "./RestApi/index.js";

import * as dotenv from 'dotenv'


export async function init() {
    console.log('RestApi init()')

    dotenv.config()

    await initEnvFile();

    await initRESTful();
}

export { getApplications, getApplicationById, deleteApplicationById, setApplication } from './RestApi/api/Application/application.js'
export { getOrganizations, getOrganizationById, setOrganization } from './RestApi/api/Organization/organization.js'
export { setService, getServices, getServiceById, deleteServiceById, updateServiceById } from './RestApi/api/ServiceProfile/service.js'
export { getNetworkServers, setNetworkServer, getNetworkServerById } from './RestApi/api/Network/server.js'
export { getGatewayProfiles, setGatewayProfile, updateGatewayProfileById, getGatewayProfileById, deleteGatewayProfileById, getGateways, setGateway, getGatewayStats, getGatewayById, updateGatewayById, deleteGatewayById } from './RestApi/api/Gateway/gateway.js'
export { getDeviceProfiles, setDeviceProfile, getDeviceProfileById, updateDeviceProfileById, deleteDeviceProfileById, getDevices, setDevice, getDeviceByEui, deleteDeviceByEui, deactivateDeviceByEui, getDeviceActivationByEui, updateDeviceByEui, getDeviceQueueByEui, enqueueDeviceQueueByEui, flushDeviceQueueByEui } from './RestApi/api/Device/device.js'