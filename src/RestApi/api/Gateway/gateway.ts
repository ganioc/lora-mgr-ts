import { axiosGet, axiosPost } from "../../../http/index.js";
import { getDbEnv } from "../../env.js";
import { IfSetGatewayProfile } from "../../interface.js";
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