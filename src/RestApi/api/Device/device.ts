import { axiosDelete, axiosGet, axiosPost, axiosPut } from "../../../http/index.js";
import { getDbEnv } from "../../env.js";
import { IfDeviceQueueItem, IfSetDevice, IfSetDeviceProfile } from "../../interface.js";
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
export async function getDeviceProfileById(id: string) {
    let url = getDbEnv().data?.urlBase
        + '/api/device-profiles'
        + '/' + id
    return axiosGet(url)
}
export async function updateDeviceProfileById(id: string, option: IfSetDeviceProfile) {
    let url = getDbEnv().data?.urlBase
        + '/api/device-profiles'
        + '/' + id
    return axiosPut(url, {
        deviceProfile: option
    })
}
export async function setDeviceProfile(option: IfSetDeviceProfile) {

    const url = getDbEnv().data?.urlBase
        + '/api/device-profiles'

    return axiosPost(url, {
        deviceProfile: option
    })
}
export async function deleteDeviceProfileById(id: string) {
    let url = getDbEnv().data?.urlBase
        + '/api/device-profiles'
        + '/' + id
    return axiosDelete(url)
}

export async function getDevices(offset: number, limit: number, appId?: number, multicastGrpId?: string, serviceProfileId?: string) {
    assert(offset >= 0, "offset >= 0")
    assert(limit > 0, "limit >  0")

    let url = getDbEnv().data?.urlBase
        + '/api/devices' + '?'
        + `limit=${limit}`
        + `&offset=${offset}`

    if (appId) {
        url += `&applicationID=${appId}`
    }

    if (multicastGrpId) {
        url += `&multicastGroupID=${multicastGrpId}`
    }
    if (serviceProfileId) {
        url += `&serviceProfileID=${serviceProfileId}`
    }

    return axiosGet(url)
}

export async function setDevice(option: IfSetDevice) {

    const url = getDbEnv().data?.urlBase
        + '/api/devices'

    return axiosPost(url, {
        device: option
    })
}

export async function getDeviceByEui(eui: string) {
    const url = getDbEnv().data?.urlBase
        + '/api/devices'
        + '/' + eui
    return axiosGet(url)
}
export async function deleteDeviceByEui(eui: string) {
    const url = getDbEnv().data?.urlBase
        + '/api/devices'
        + '/' + eui
    return axiosDelete(url)
}
export async function deactivateDeviceByEui(eui: string) {
    const url = getDbEnv().data?.urlBase
        + '/api/devices'
        + '/' + eui
        + '/activation'
    return axiosDelete(url)
}

export async function getDeviceActivationByEui(eui: string) {
    const url = getDbEnv().data?.urlBase
        + '/api/devices'
        + '/' + eui
        + '/activation'
    return axiosGet(url)
}

export async function updateDeviceByEui(eui: string, option: IfSetDevice) {
    const url = getDbEnv().data?.urlBase
        + '/api/devices'
        + '/' + eui
    return axiosPut(url, {
        device: option
    })
}

export async function getDeviceQueueByEui(eui: string) {
    const url = getDbEnv().data?.urlBase
        + '/api/devices'
        + '/' + eui
        + '/queue'

    return axiosGet(url)
}
export async function enqueueDeviceQueueByEui(eui: string, option: IfDeviceQueueItem) {
    const url = getDbEnv().data?.urlBase
        + '/api/devices'
        + '/' + eui
        + '/queue'

    return axiosPost(url, {
        deviceQueueItem: option
    })
}
export async function flushDeviceQueueByEui(eui: string) {
    const url = getDbEnv().data?.urlBase
        + '/api/devices'
        + '/' + eui
        + '/queue'
    return axiosDelete(url)
}