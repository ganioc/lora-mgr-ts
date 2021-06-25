
import { IfSetGatewayProfile, IfSetOrganization, IfSetServiceProfile } from "../../src/RestApi/interface.js";
import { deleteGatewayProfileById, deleteServiceById, getGatewayProfileById, getGatewayProfiles, getNetworkServerById, getNetworkServers, getOrganizationById, getServiceById, getServices, init, setGatewayProfile, setOrganization, setService, updateGatewayProfileById, updateServiceById } from "../../src/index.js";

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
async function updateServiceHere() {
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
        "prAllowed": true,
        "raAllowed": true,
        "reportDevStatusBattery": false,
        "reportDevStatusMargin": false,
        "targetPER": 0,
        "ulBucketSize": 0,
        "ulRate": 0,
        "ulRatePolicy": "DROP"
    }
    let result = await updateServiceById('cc50dd3e-b06b-46ce-8ec4-2aa3ad1bf6b4', profile);
    console.log(result)
}
async function setGatewayProfileHere() {
    const profile: IfSetGatewayProfile = {
        channels: [0, 1, 2],
        channelsStr: "0,1,2",
        extraChannels: [],
        id: '1',
        name: 'gwprofile2',
        networkServerID: '1',
        statsInterval: '30s'
    }

    let result = await setGatewayProfile(profile)
    console.log(result);
}
async function updateGatewayProfileByIdHere() {
    const profile: IfSetGatewayProfile = {
        channels: [0, 1, 2, 4],
        channelsStr: "0,1,2,4",
        extraChannels: [],
        id: '1',
        name: 'gwprofile2000',
        networkServerID: '1',
        statsInterval: '330s'
    }

    let result = await updateGatewayProfileById('63bad07d-433f-4bad-a58c-17a7e93d13f5', profile)
    console.log(result);
}
async function getGatewayProfileByIdHere() {
    let result = await getGatewayProfileById('63bad07d-433f-4bad-a58c-17a7e93d13f5')
    console.log(result)
}
async function deleteGatewayProfileByIdHere() {
    let result = await deleteGatewayProfileById('63bad07d-433f-4bad-a58c-17a7e93d13f5')
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

    // 'cc50dd3e-b06b-46ce-8ec4-2aa3ad1bf6b4'
    //    await setServiceHere();
    // let result = await getServiceById('543c41a1-58bd-44d4-857e-bb90196c5d52')
    // console.log(result)

    // await updateServiceHere()

    // await setGatewayProfileHere()
    // let result = await getGatewayProfiles(0, 10, 1);
    // console.log(result)

    // await updateGatewayProfileByIdHere();
    // await getGatewayProfileByIdHere();
    // await deleteGatewayProfileByIdHere()
}

main()