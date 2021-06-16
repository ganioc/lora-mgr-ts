
import { strict as assert } from "assert";
import { axiosGet } from "../../../http/index.js";
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