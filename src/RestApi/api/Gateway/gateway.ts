import { axiosGet, axiosPost, axiosPut, axiosDelete } from "../../../http/index.js";
import { getDbEnv } from "../../env.js";
import { IfInterval, IfSetGateway, IfSetGatewayProfile } from "../../interface.js";
import { strict as assert } from "assert";
import * as querystring from 'querystring'

export async function getGatewayProfiles(offset: number, limit: number, networkServerId?: number) {
    assert(offset >= 0, "offset >= 0")
    assert(limit > 0, "limit >  0")

    let url = getDbEnv().data?.urlBase
        + '/api/gateway-profiles' + '?'
        + `limit=${limit}`
        + `&offset=${offset}`

    if (networkServerId) {
        url += `&networkServerID=${networkServerId}`
    }

    return axiosGet(url)
}

export async function setGatewayProfile(option: IfSetGatewayProfile) {

    const url = getDbEnv().data?.urlBase
        + '/api/gateway-profiles'

    return axiosPost(url, {
        gatewayProfile: option
    })
}
export async function getGatewayProfileById(id: string) {
    const url = getDbEnv().data?.urlBase
        + '/api/gateway-profiles'
        + `/${id}`
    return axiosGet(url);
}

export async function updateGatewayProfileById(id: string, option: IfSetGatewayProfile) {

    const url = getDbEnv().data?.urlBase
        + '/api/gateway-profiles'
        + `/${id}`

    return axiosPut(url, {
        gatewayProfile: option
    })
}
export async function deleteGatewayProfileById(id: string) {
    const url = getDbEnv().data?.urlBase
        + '/api/gateway-profiles'
        + `/${id}`
    return axiosDelete(url);
}

export async function getGateways(offset: number, limit: number, organizationId?: number) {
    assert(offset >= 0, "offset >= 0")
    assert(limit > 0, "limit >  0")

    let url = getDbEnv().data?.urlBase
        + '/api/gateways' + '?'
        + `limit=${limit}`
        + `&offset=${offset}`

    if (organizationId) {
        url += `&organizationId=${organizationId}`
    }

    return axiosGet(url)
}


export async function setGateway(option: IfSetGateway) {

    const url = getDbEnv().data?.urlBase
        + '/api/gateways'

    return axiosPost(url, {
        gateway: option
    })
}


export async function getGatewayStats(gwid: string, interval: IfInterval, start: number, end: number) {
    assert(gwid.length === 16, "gwid length")

    let url = getDbEnv().data?.urlBase
        + `/api/gateways/${gwid}/stats` + '?'
    url += querystring.stringify({
        interval: interval,
        startTimestamp: new Date(start).toISOString(),
        endTimestamp: new Date(end).toISOString()
    })

    return axiosGet(url)
}