
import { IfApplications, IfSetApplication, IfSetOrganization } from '../../src/RestApi/interface.js';
import { init, getApplications, setApplication, setOrganization, getOrganizations } from '../../src/index.js'
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
            let result = await getApplications(0, 10, 1)
            let applications = result as IfApplications;
            console.log(applications)
            expect(applications.totalCount).equal('1')
        })

        // it('setApplication', async () => {
        //     const application: IfSetApplication = {
        //         description: 'Dummy application 1',
        //         id: '901',
        //         name: 'Dummy 901',
        //         organizationID: '9',
        //         payloadCodec: '',
        //         payloadDecoderScript: '',
        //         payloadEncoderScript: '',
        //         serviceProfileID: '7fde5908-1e05-4146-94c3-042c2a2bf0aa'
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
            let organizations = result as IfApplications;
            console.log(organizations)
            expect(organizations.totalCount).equal('3')
        })

    })
});