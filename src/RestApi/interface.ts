
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