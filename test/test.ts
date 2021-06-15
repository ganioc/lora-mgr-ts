const result = require('dotenv').config()

import { hello } from "../index"

import * as grpc from 'grpc';

import * as internalService from '@chirpstack/chirpstack-api/as/external/api/internal_grpc_pb';
import * as internalMessages from '@chirpstack/chirpstack-api/as/external/api/internal_pb';
import * as deviceMessages from '@chirpstack/chirpstack-api/as/external/api/device_pb';
import * as deviceService from '@chirpstack/chirpstack-api/as/external/api/device_grpc_pb';
// import { getJwt } from "../src/RestApi/getJwt";



console.log("test.ts")

console.log("env:", process.env.NODE_ENV)

const internalServiceClient = new internalService.InternalServiceClient(
    process.env.HOST + ':' + process.env.PORT,
    grpc.credentials.createInsecure()
)

const loginRequest = new internalMessages.LoginRequest();

loginRequest.setEmail(process.env.EMAIL!)
loginRequest.setPassword(process.env.PASSWORD!)


async function main() {
    hello();
    // internalServiceClient.login(loginRequest,
    //     (error, response) => {
    //         const metadata = new grpc.Metadata();
    //         metadata.set('authorization', response!.getJwt())
    //         console.log('jwt:', response!.getJwt())
    //     })


    // const url = 'http://' + process.env.HOST + ':' + process.env.PORT + '/api/internal/login'
    // console.log('url:', url)
    // console.log('email:', process.env.EMAIL)
    // console.log('password:', process.env.PASSWORD)
    // const jwt = await getJwt(url, process.env.EMAIL!, process.env.PASSWORD!);
    // console.log(jwt)
}
main();
