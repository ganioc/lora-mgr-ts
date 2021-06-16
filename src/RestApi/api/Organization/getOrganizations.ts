


import { strict as assert } from "assert";
import { axiosGet } from "../../../http/index.js";
import { getDbEnv } from "../../env.js";


export async function getOrganizations(offset: number, limit: number) {

    assert(offset >= 0, "offset >= 0")
    assert(limit > 0, "limit >  0")

    const url = getDbEnv().data?.urlBase
        + '/api/organizations' + '?'
        + `limit=${limit}`
        + `&offset=${offset}`

    return axiosGet(url)
}