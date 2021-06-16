
import { IfApplications, IfNetworkServers, IfOrganization, IfOrganizations, IfServices, IfSetApplication, IfSetGateway, IfSetGatewayProfile, IfSetNetworkServer, IfSetOrganization, IfSetServiceProfile } from '../../src/RestApi/interface.js';
import { init, getApplications, setApplication, setOrganization, getOrganizations, getOrganizationById, setService, getNetworkServers, setNetworkServer, getServices, getGatewayProfiles, setGatewayProfile, getGateways, setGateway } from '../../src/index.js'
import { expect } from 'chai';
import { getDbEnv } from '../../src/RestApi/env.js';


describe('Test all', async () => {
    // 
    describe('Test Init', async () => {
        it('init', async () => {
            await init();
            expect(getDbEnv().data?.urlBase).to.equal('http://192.168.90.45:8080')
        })
    })

    describe('Checking Apis', () => {
        it('getApplications, id = 1, offset = 0, limit = 10', async () => {
            let result = await getApplications(0, 10)
            let applications = result as IfApplications;
            console.log(applications)
            expect(applications.totalCount).exist
        })

        // it('setApplication', async () => {
        //     const application: IfSetApplication = {
        //         description: 'Dummy application 1',
        //         id: '901',
        //         name: 'Dummy901',
        //         organizationID: '3',
        //         payloadCodec: '',
        //         payloadDecoderScript: '',
        //         payloadEncoderScript: '',
        //         serviceProfileID: '66eba771-2854-4fa9-bb50-9049d330282a'
        //     }
        //     let result = await setApplication(application);
        //     console.log(result);

        //     expect(1).to.equal(1)
        // })

        // it('setOrganization', async () => {
        //     const organization: IfSetOrganization = {
        //         canHaveGateways: true,
        //         displayName: 'test.org',
        //         id: '9901',
        //         maxDeviceCount: 100,
        //         maxGatewayCount: 5,
        //         name: 'organization-9901'
        //     }
        //     let result = await setOrganization(organization);

        //     console.log(result)

        //     expect(1).to.equal(1)
        // })
        it('getOrganizations', async () => {
            let result = await getOrganizations(0, 10)
            let organizations = result as IfOrganizations;
            // console.log(organizations)
            // expect(organizations.totalCount).equal('3')
            let org = organizations.result.filter((item: IfOrganization) => {
                return item.name === 'organization-9901'
            })
            console.log(org[0])

            expect(org[0]).exist
        })
        it('getOrganizationById(3)', async () => {
            let result = await getOrganizationById(3);
            console.log(result);
            let org = result.organization as IfSetOrganization;
            expect(org.id).equal('3')
        })

        // it('setService to organization 3', async () => {
        //     const profile: IfSetServiceProfile = {
        //         addGWMetaData: true,
        //         channelMask: '',
        //         devStatusReqFreq: 0,
        //         dlBucketSize: 0,
        //         dlRate: 0,
        //         dlRatePolicy: "DROP",
        //         drMax: 0,
        //         drMin: 0,
        //         gwsPrivate: true,
        //         hrAllowed: true,
        //         id: "",
        //         minGWDiversity: 0,
        //         name: "service1",
        //         networkServerID: "1",
        //         nwkGeoLoc: true,
        //         organizationID: '3',
        //         prAllowed: true,
        //         raAllowed: true,
        //         reportDevStatusBattery: true,
        //         reportDevStatusMargin: true,
        //         targetPER: 0,
        //         ulBucketSize: 0,
        //         ulRate: 0,
        //         ulRatePolicy: "DROP"

        //     }
        //     let result = await setService(profile);
        //     console.log(result)

        //     expect(result.id).not.empty
        // })

        it('getServices', async () => {
            let result = await getServices(0, 10, 3)
            console.log(result);
            let services = result as IfServices;
            expect(services.result[0].organizationID).to.equal('3')
        })

        // it('setNetworkServer', async () => {
        //     const server: IfSetNetworkServer = {
        //         caCert: "",
        //         gatewayDiscoveryDR: 0,
        //         gatewayDiscoveryEnabled: false,
        //         gatewayDiscoveryInterval: 0,
        //         gatewayDiscoveryTXFrequency: 0,
        //         id: "2",
        //         name: "org",
        //         routingProfileCACert: "",
        //         routingProfileTLSCert: "",
        //         routingProfileTLSKey: "",
        //         server: "127.0.0.1:9000",
        //         tlsCert: "",
        //         tlsKey: ""
        //     }
        //     let result = await setNetworkServer(server);
        //     console.log(result)

        //     expect(1).to.equal(1)
        // })

        it('getNetworkServers', async () => {
            let result = await getNetworkServers(0, 10, 3)
            console.log(result)
            let servers: IfNetworkServers = result;
            expect(servers.totalCount).to.equal('1')
        })

        it('getGatewayProfiles', async () => {
            let result = await getGatewayProfiles(0, 10)
            console.log(result);
            expect(1).to.equal(1)
        })

        // it('setGatewayProfile', async () => {
        //     const profile: IfSetGatewayProfile = {
        //         channels: [0, 1, 2],
        //         channelsStr: "0,1,2",
        //         extraChannels: [],
        //         id: '1',
        //         name: 'gwprofile2',
        //         networkServerID: '1',
        //         statsInterval: '30s'
        //     }

        //     let result = await setGatewayProfile(profile)
        //     console.log(result);
        //     expect(1).to.equal(1)
        // })

        it('getGateways', async () => {
            let result = await getGateways(0, 10);
            console.log(result);
            expect(1).to.equal(1)
        })

        // it('setGateway', async () => {
        //     const gw: IfSetGateway = {
        //         boards: [],
        //         description: '2nd test gateway',
        //         discoveryEnabled: false,
        //         gatewayProfileID: '6472c530-d432-4b41-b0c4-a8847e972365',
        //         id: '5000201090123402',
        //         location: {
        //             accuracy: 0,
        //             altitude: 1,
        //             latitude: 1,
        //             longitude: 1,
        //             source: "UNKNOWN"
        //         },
        //         metadata: {},
        //         name: 'orggw02',
        //         networkServerID: '1',
        //         organizationID: '3',
        //         serviceProfileID: '66eba771-2854-4fa9-bb50-9049d330282a',
        //         tags: {}
        //     }
        //     let result = await setGateway(gw)
        //     console.log(result)
        //     expect(1).to.equal(1)
        // })

    })
});