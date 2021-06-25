
import { IfSetOrganization } from "../../src/RestApi/interface.js";
import { getNetworkServerById, getNetworkServers, getOrganizationById, getServiceById, getServices, init, setOrganization } from "../../src/index.js";

async function createOrg() {
    const organization: IfSetOrganization = {
        canHaveGateways: true,
        displayName: 'yangTest',
        id: '3',
        maxDeviceCount: 100,
        maxGatewayCount: 5,
        name: 'yangTest'
    }
    let result = await setOrganization(organization);

    console.log(result)
}
async function getOrg(id: number) {
    let result = await getOrganizationById(id);
    console.log(result);
}
async function getNW() {
    let result = await getNetworkServers(0, 10, 1)
    console.log(result)
}
async function main() {
    await init();

    // await createOrg();
    // await getOrg(2)
    await getNW()

    // let result = await getNetworkServerById(1)
    // console.log(result)

    // let result = await getServices(0, 5, 1);
    // console.log(result)

    let result = await getServiceById('9ade8de6-ead4-4ce6-8aca-d6a043637513')
    console.log(result)
}

main()