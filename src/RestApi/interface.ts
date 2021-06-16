
export interface IfGetJwt {
    status: number;
    data: {
        jwt: string;
    }
}

export interface IfApplication {
    id: string;
    name: string;
    description: string;
    organizationID: string;
    serviceProfileID: string;
    serviceProfileName: string;
}
export interface IfApplications {
    totalCount: string;
    result: IfApplication[];
}
export interface IfSetApplication {
    description: string,
    id: string,
    name: string,
    organizationID: string,
    payloadCodec: string,
    payloadDecoderScript: string,
    payloadEncoderScript: string,
    serviceProfileID: string
}

export interface IfSetOrganization {

    canHaveGateways: boolean,
    displayName: string,
    id: string,
    maxDeviceCount: number,
    maxGatewayCount: number,
    name: string

}
export interface IfOrganization {

    canHaveGateways: boolean,
    createdAt: string,
    displayName: string,
    id: string,
    name: string,
    updatedAt: string

}
export interface IfOrganizations {
    totalCount: string;
    result: IfOrganization[];
}
export type ServicedlRatePolicy = "DROP" | ''
export interface IfSetServiceProfile {

    addGWMetaData: boolean,
    channelMask: string,
    devStatusReqFreq: number,
    dlBucketSize: number,
    dlRate: number,
    dlRatePolicy: ServicedlRatePolicy,
    drMax: number,
    drMin: number,
    gwsPrivate: boolean,
    hrAllowed: boolean,
    id: string,
    minGWDiversity: number,
    name: string,
    networkServerID: string,
    nwkGeoLoc: boolean,
    organizationID: string,
    prAllowed: boolean,
    raAllowed: boolean,
    reportDevStatusBattery: boolean,
    reportDevStatusMargin: boolean,
    targetPER: number,
    ulBucketSize: number,
    ulRate: number,
    ulRatePolicy: ServicedlRatePolicy
}
export interface IfService {
    id: '66eba771-2854-4fa9-bb50-9049d330282a',
    name: 'service1',
    organizationID: '3',
    networkServerID: '1',
    createdAt: '2021-06-16T07:11:27.410950Z',
    updatedAt: '2021-06-16T07:11:27.410950Z',
    networkServerName: 'ns'
}
export interface IfServices {
    totalCount: string;
    result: IfService[];
}
export interface IfNetworkServer {
    id: string,
    name: string,
    server: string,
    createdAt: string,
    updatedAt: string
}
export interface IfNetworkServers {
    totalCount: string;
    result: IfNetworkServer[]
}
export interface IfSetNetworkServer {
    caCert: string,
    gatewayDiscoveryDR: number,
    gatewayDiscoveryEnabled: boolean,
    gatewayDiscoveryInterval: number,
    gatewayDiscoveryTXFrequency: number,
    id: string,
    name: string,
    routingProfileCACert: string,
    routingProfileTLSCert: string,
    routingProfileTLSKey: string,
    server: string,
    tlsCert: string,
    tlsKey: string
}