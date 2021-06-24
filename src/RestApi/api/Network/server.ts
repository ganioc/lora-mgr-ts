import { axiosGet, axiosPost } from "../../../http/index.js";
import { getDbEnv } from "../../env.js";
import { IfSetNetworkServer } from "../../interface.js";
import { strict as assert } from "assert";

export async function getNetworkServers(offset: number, limit: number, orgId: number) {

    assert(offset >= 0, "offset >= 0")
    assert(limit > 0, "limit >  0")

    const url = getDbEnv().data?.urlBase
        + '/api/network-servers' + '?'
        + `limit=${limit}`
        + `&offset=${offset}`
        + `&organizationID=${orgId}`

    return axiosGet(url)
}
export async function getNetworkServerById(id: number) {
    assert(id > 0, "id >0")
    const url = getDbEnv().data?.urlBase
        + '/api/network-servers/'
        + id
    return axiosGet(url)
}

export async function setNetworkServer(option: IfSetNetworkServer) {

    const url = getDbEnv().data?.urlBase
        + '/api/network-servers'

    return axiosPost(url, {
        networkServer: option
    })
}

