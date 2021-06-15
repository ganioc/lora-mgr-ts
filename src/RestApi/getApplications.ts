
import { axiosGet } from "../http/axios";
import * as url from "url";


export async function getApplications(url: string) {
    const newUrl = url + "/api/applications"
    return axiosGet(newUrl);
}