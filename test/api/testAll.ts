
import { IfApplications } from 'src/RestApi/interface.js';
import { init, getApplications } from '../../src/index.js'
import * as chai from 'chai';
import { expect } from 'chai';
import { getDbEnv } from '../../src/RestApi/env.js';

// async function main() {
//     console.log("test all")

//     await init();

//     let result = await getApplications(0, 10, 1)
//     console.log('\ngetApplications:')
//     console.log(result as IfApplications)

// }

// main()

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
            //console.log('\ngetApplications:')
            //console.log(result as IfApplications)
            let applications = result as IfApplications;
            expect(applications.totalCount).equal('1')
        })

    })
});