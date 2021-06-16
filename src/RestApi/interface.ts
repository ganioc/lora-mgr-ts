
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