import { initRESTful } from "./RestApi";
import { initEnvFile } from "./RestApi/env";


export async function init() {
    return initEnvFile();

    // await initRESTful();

}