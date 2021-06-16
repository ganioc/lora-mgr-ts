import { axiosGet, axiosPost } from "../../../http/index.js";
import { getDbEnv } from "../../env.js";
import { IfSetDeviceProfile } from "../../interface.js";
import { strict as assert } from "assert";

export async function getDeviceProfiles(offset: number, limit: number, orgId?: number, appId?: number) {
    assert(offset >= 0, "offset >= 0")
    assert(limit > 0, "limit >  0")

    let url = getDbEnv().data?.urlBase
        + '/api/device-profiles' + '?'
        + `limit=${limit}`
        + `&offset=${offset}`

    if (orgId) {
        url += `&organizationID=${orgId}`
    }

    if (appId) {
        url += `&applicationID=${appId}`
    }

    return axiosGet(url)
}
export async function setDeviceProfile(option: IfSetDeviceProfile) {

    const url = getDbEnv().data?.urlBase
        + '/api/device-profiles'

    return axiosPost(url, {
        deviceProfile: option
    })
}