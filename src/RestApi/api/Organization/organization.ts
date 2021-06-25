


import { strict as assert } from "assert";
import { IfSetOrganization } from "src/RestApi/interface.js";
import { axiosGet, axiosPost } from "../../../http/index.js";
import { getDbEnv } from "../../env.js";


export async function getOrganizationById(id: number) {

    assert(id > 0, "id >  0")

    const url = getDbEnv().data?.urlBase
        + '/api/organizations' + '/'
        + `${id}`

    return axiosGet(url)
}

export async function getOrganizations(offset: number, limit: number) {

    assert(offset >= 0, "offset >= 0")
    assert(limit > 0, "limit >  0")

    const url = getDbEnv().data?.urlBase
        + '/api/organizations' + '?'
        + `limit=${limit}`
        + `&offset=${offset}`

    return axiosGet(url)
}

export async function setOrganization(option: IfSetOrganization) {

    const url = getDbEnv().data?.urlBase
        + '/api/organizations'

    return axiosPost(url, {
        organization: option
    })
}
