import { axiosPost } from "../../../http/index.js";
import { getDbEnv } from "../../env.js";
import { IfSetServiceProfile } from "../../interface.js";

export async function setService(option: IfSetServiceProfile) {

    const url = getDbEnv().data?.urlBase
        + '/api/service-profiles'

    return axiosPost(url, {
        serviceProfile: option
    })
}