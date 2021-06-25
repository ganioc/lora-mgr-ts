
import { IfDeviceQueueItem, IfSetDeviceProfile, IfSetGateway, IfSetGatewayProfile, IfSetOrganization, IfSetServiceProfile } from "../../src/RestApi/interface.js";
import { deleteGatewayById, deleteGatewayProfileById, deleteServiceById, enqueueDeviceQueueByEui, flushDeviceQueueByEui, getApplications, getDeviceByEui, getDeviceProfileById, getDeviceQueueByEui, getDevices, getGatewayById, getGatewayProfileById, getGatewayProfiles, getNetworkServerById, getNetworkServers, getOrganizationById, getServiceById, getServices, init, setDeviceProfile, setGateway, setGatewayProfile, setOrganization, setService, updateDeviceProfileById, updateGatewayById, updateGatewayProfileById, updateServiceById } from "../../src/index.js";



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
async function setGatewaysHere(id: string) {
    const gw: IfSetGateway = {
        boards: [],
        description: id + ' test gateway',
        discoveryEnabled: false,
        gatewayProfileID: 'd8ad7a7f-fae1-492a-947d-901062b3e618',
        id: '50002010901234' + id,
        location: {
            accuracy: 0,
            altitude: 1,
            latitude: 1,
            longitude: 1,
            source: "UNKNOWN"
        },
        metadata: {},
        name: 'orggw02' + id,
        networkServerID: '1',
        organizationID: '1',
        serviceProfileID: 'cc50dd3e-b06b-46ce-8ec4-2aa3ad1bf6b4',
        tags: {}
    }
    let result = await setGateway(gw)
    console.log(result)
}
async function updateGatewayByIdHere(mid: string) {
    const id = 'Y'
    const gw: IfSetGateway = {
        boards: [],
        description: id + ' test gateway',
        discoveryEnabled: false,
        gatewayProfileID: 'd8ad7a7f-fae1-492a-947d-901062b3e618',
        id: '50002010901234' + id,
        location: {
            accuracy: 0,
            altitude: 1,
            latitude: 1,
            longitude: 1,
            source: "UNKNOWN"
        },
        metadata: {},
        name: 'orggw02' + id,
        networkServerID: '1',
        organizationID: '1',
        serviceProfileID: 'cc50dd3e-b06b-46ce-8ec4-2aa3ad1bf6b4',
        tags: {}
    }
    let result = await updateGatewayById(mid, gw)
    console.log(result)
}
/**
 * f6981751-4865-4ab4-b413-93b2db99bd49
 * 122ab120-5c21-48c3-9ee1-fcd21028202a
 * 87fe776d-2172-4984-b48e-8b600fa05410
 */
async function setDeviceProfileHere() {
    const profile: IfSetDeviceProfile = {
        adrAlgorithmID: 'default',
        classBTimeout: 0,
        classCTimeout: 0,
        factoryPresetFreqs: [],
        geolocBufferTTL: 0,
        geolocMinBufferSize: 0,
        id: "",
        macVersion: "1.0.0",
        maxDutyCycle: 0,
        maxEIRP: 0,
        name: "dummydev2",
        networkServerID: "1",
        organizationID: "2",
        payloadCodec: "",
        payloadDecoderScript: "",
        payloadEncoderScript: "",
        pingSlotDR: 0,
        pingSlotFreq: 0,
        pingSlotPeriod: 0,
        regParamsRevision: "A",
        rfRegion: "",
        rxDROffset1: 0,
        rxDataRate2: 0,
        rxDelay1: 0,
        rxFreq2: 0,
        supports32BitFCnt: true,
        supportsClassB: false,
        supportsClassC: false,
        supportsJoin: true,
        tags: {},
        uplinkInterval: "60s"
    }
    let result = await setDeviceProfile(profile)
    console.log(result)
}
async function updateDeviceProfileByIdHere() {
    const profile: IfSetDeviceProfile = {
        adrAlgorithmID: 'default',
        classBTimeout: 0,
        classCTimeout: 0,
        factoryPresetFreqs: [],
        geolocBufferTTL: 0,
        geolocMinBufferSize: 0,
        id: "",
        macVersion: "1.0.0",
        maxDutyCycle: 0,
        maxEIRP: 0,
        name: "dummydevYang",
        networkServerID: "1",
        organizationID: "2",
        payloadCodec: "",
        payloadDecoderScript: "",
        payloadEncoderScript: "",
        pingSlotDR: 0,
        pingSlotFreq: 0,
        pingSlotPeriod: 0,
        regParamsRevision: "A",
        rfRegion: "",
        rxDROffset1: 0,
        rxDataRate2: 0,
        rxDelay1: 0,
        rxFreq2: 0,
        supports32BitFCnt: true,
        supportsClassB: false,
        supportsClassC: false,
        supportsJoin: true,
        tags: {},
        uplinkInterval: "60s"
    }
    let result = await updateDeviceProfileById('87fe776d-2172-4984-b48e-8b600fa05410', profile)
    console.log(result)
}
async function enqueueDeviceHere() {
    const eui = "60c5a8fffe782f64" // 60c5a8fffe782f64
    const item: IfDeviceQueueItem = {
        confirmed: false,
        data: "AQID",
        devEUI: eui,
        fCnt: 0,
        fPort: 1
    }
    let result = await enqueueDeviceQueueByEui(eui, item);
    console.log(result)
}

async function main() {
    await init();

    // await createOrg();
    // await getOrg(2)
    // await getNW()

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

    // await setGatewaysHere('01');
    // await setGatewaysHere('02');
    // let result = await getGatewayById('5000201090123402')
    // console.log(result)

    // await updateGatewayByIdHere('5000201090123402');
    // let result = await deleteGatewayById('5000201090123402')
    // console.log(result)

    // await setDeviceProfileHere()
    // let result = await getDeviceProfileById('87fe776d-2172-4984-b48e-8b600fa05410')
    // console.log(result)
    // await updateDeviceProfileByIdHere()

    let result = await getDevices(0, 10)
    console.log(result)

    // let result = await getDeviceByEui('60c5a8fffe782da1');
    // console.log(result)

    let result1 = await getDeviceQueueByEui('60c5a8fffe782f64')
    console.log(result1)

    // await enqueueDeviceHere();

    // let rtn = await getApplications(0, 10, 1);
    // console.log(rtn)

    // let ret = await flushDeviceQueueByEui('60c5a8fffe782f64')
    // console.log(ret)
}

main()