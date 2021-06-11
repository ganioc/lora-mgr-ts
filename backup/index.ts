import * as grpc from 'grpc';

import * as internalService from '@chirpstack/chirpstack-api/as/external/api/internal_grpc_pb';
import * as internalMessages from '@chirpstack/chirpstack-api/as/external/api/internal_pb';
import * as deviceMessages from '@chirpstack/chirpstack-api/as/external/api/device_pb';
import * as deviceService from '@chirpstack/chirpstack-api/as/external/api/device_grpc_pb';


// Create the client for the 'internal' service
const internalServiceClient = new internalService.InternalServiceClient(
    '192.168.90.45:8080',
    grpc.credentials.createInsecure()
);

// Create and build the login request message
const loginRequest = new internalMessages.LoginRequest();

loginRequest.setEmail('admin');
loginRequest.setPassword('admin');

//
//// Send the login request
internalServiceClient.login(loginRequest, (error, response:any) => {
    // Build a gRPC metadata object, setting the authorization key to the JWT we
    // got back from logging in.
    console.log('error', error);
    const metadata:any = new grpc.Metadata();
    metadata.set('authorization', response.getJwt());
    const deviceClient = new deviceService.DeviceServiceClient(
        '192.168.90.45:8080',
        grpc.credentials.createInsecure()
    );

    let deviceRequest = new deviceMessages.ListDeviceRequest();
    deviceRequest.setLimit(10);
    deviceRequest.setApplicationId(1);
    deviceClient.list(deviceRequest, metadata, (err, repsonse?:deviceMessages.ListDeviceResponse) => {
        console.log('err is', err);
        if (response) {
            console.log('response is', repsonse!.toArray());
        }
    });
});
