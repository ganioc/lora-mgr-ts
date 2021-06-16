
import { strict as assert } from "assert";
import { axiosPost } from "../../../http/index.js";
import { getDbEnv } from "../../env.js";
import { IfSetApplication } from "../../interface.js";


export async function setApplication(option: IfSetApplication) {
    assert(option.id, "id undefined")

    const url = getDbEnv().data?.urlBase
        + '/api/applications'

    return axiosPost(url, { application: option })
}