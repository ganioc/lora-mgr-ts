
import { axiosGet } from "../http/axios";
import * as url from "url";
import { HttpRule } from "@chirpstack/chirpstack-api/google/api/http_pb";


export async function getApplications(url: string) {

    const newUrl = url + "/api/applications"
    return axiosGet(newUrl);
}