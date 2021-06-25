import { axiosGet, axiosPost } from "../../../http/index.js";
import { getDbEnv } from "../../env.js";
import { IfSetServiceProfile } from "../../interface.js";
import { strict as assert } from "assert";

export async function setService(option: IfSetServiceProfile) {

    const url = getDbEnv().data?.urlBase
        + '/api/service-profiles'

    return axiosPost(url, {
        serviceProfile: option
    })
}

export async function getServices(offset: number, limit: number, orgId?: number, networkServerId?: number) {
    assert(offset >= 0, "offset >= 0")
    assert(limit > 0, "limit >  0")

    let url = getDbEnv().data?.urlBase
        + '/api/service-profiles' + '?'
        + `limit=${limit}`
        + `&offset=${offset}`

    if (orgId) {
        url += `&organizationID=${orgId}`
    }

    if (networkServerId) {
        url += `&networkServerID=${networkServerId}`
    }

    return axiosGet(url)
}

export async function getServiceById(id: string) {
    let url = getDbEnv().data?.urlBase
        + '/api/service-profiles/' + id;

    return axiosGet(url);
}