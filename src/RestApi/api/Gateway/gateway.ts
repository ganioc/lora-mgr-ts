import { axiosGet, axiosPost } from "../../../http/index.js";
import { getDbEnv } from "../../env.js";
import { IfSetGateway, IfSetGatewayProfile } from "../../interface.js";
import { strict as assert } from "assert";

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