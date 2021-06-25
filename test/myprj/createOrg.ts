
import { IfSetOrganization, IfSetServiceProfile } from "../../src/RestApi/interface.js";
import { deleteServiceById, getNetworkServerById, getNetworkServers, getOrganizationById, getServiceById, getServices, init, setOrganization, setService } from "../../src/index.js";

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
async function setServiceHere() {
    const profile: IfSetServiceProfile = {
        "addGWMetaData": true,
        "channelMask": "",
        "devStatusReqFreq": 0,
        "dlBucketSize": 0,
        "dlRate": 0,
        "dlRatePolicy": "DROP",
        "drMax": 0,
        "drMin": 0,
        "gwsPrivate": false,
        "hrAllowed": false,
        "id": "",
        "minGWDiversity": 0,
        "name": "service-yang",
        "networkServerID": "1",
        "nwkGeoLoc": false,
        "organizationID": "1",
        "prAllowed": false,
        "raAllowed": false,
        "reportDevStatusBattery": false,
        "reportDevStatusMargin": false,
        "targetPER": 0,
        "ulBucketSize": 0,
        "ulRate": 0,
        "ulRatePolicy": "DROP"
    }
    let result = await setService(profile);
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

    // await setServiceHere();
    // let result = await getServiceById('543c41a1-58bd-44d4-857e-bb90196c5d52')
    // console.log(result)



}

main()