


import { strict as assert } from "assert";
import { axiosGet } from "../../../http/index.js";
import { getDbEnv } from "../../env.js";


export async function getOrganizationById(id: number) {

    assert(id > 0, "id >  0")

    const url = getDbEnv().data?.urlBase
        + '/api/organizations' + '/'
        + `${id}`

    return axiosGet(url)
}