
import { strict as assert } from "assert";
import { IfSetApplication } from "src/RestApi/interface.js";
import { axiosDelete, axiosGet, axiosPost } from "../../../http/index.js";
import { getDbEnv } from "../../env.js";


export async function getApplications(offset: number, limit: number, orgId?: number) {

    assert(offset >= 0, "offset >= 0")
    assert(limit > 0, "limit >  0")
    // assert(orgId > 0, "organization ID > 0")
    let url = getDbEnv().data?.urlBase
        + '/api/applications' + '?'
        + `limit=${limit}`
        + `&offset=${offset}`

    if (orgId) {
        url += `&organizationID=${orgId}`
    }


    return axiosGet(url)
}

export async function getApplicationById(id: string) {
    let url = getDbEnv().data?.urlBase
        + '/api/applications'
        + '/' + id
    return axiosGet(url)
}
export async function deleteApplicationById(id: string) {
    let url = getDbEnv().data?.urlBase
        + '/api/applications'
        + '/' + id
    return axiosDelete(url)
}

export async function setApplication(option: IfSetApplication) {
    assert(option.id, "id undefined")

    const url = getDbEnv().data?.urlBase
        + '/api/applications'

    return axiosPost(url, { application: option })
}