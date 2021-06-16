import { axiosPost } from "../../../http/index.js";
import { getDbEnv } from "../../env.js";
import { IfSetOrganization } from "../../interface.js";

export async function setOrganization(option: IfSetOrganization) {

    const url = getDbEnv().data?.urlBase
        + '/api/organizations'

    return axiosPost(url, {
        organization: option
    })
}