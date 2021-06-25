## Lora device management

Config Parameters

- host, ip setting are in .env file under root direcotry. As below:
  - NODE_ENV=development
  - HOST=192.168.90.45
  - PORT=8080
  - EMAIL=admin
  - PASSWORD=admin

## Requirement

1. profile initialization
   - device-profile
   - service-profile
   - gateway-profile
   - gateway
   - application
2. CRUD
   - device creation/deletion
   - device status
   - device communication
   - gateway status

## Config File

Save jwt to config.json, so we don't have to query token everytime. Every time axios is used, jwt token will be checked , otherwise it will be updated.

```
config/config.json

```

## Test with mocha

% ./node_modules/.bin/mocha out/test/api/testAll.js

## APIs

0. steps:

- [x] add an organization, test.org
- [x] add a network server
- [x] add a service, service profile
- [x] add a gateway,gateway profile
  - [x] query gateway
- [x] add an application,
- [x] add a device profile, device
  - [] delete device
  - [] query device
  - [] update device
  - [] device status,
  - [] send to device,

1. getApplications

```javascript
{
  totalCount: '1',
  result: [
    {
      id: '1',
      name: 'dida',
      description: '地质灾害设备',
      organizationID: '1',
      serviceProfileID: '7fde5908-1e05-4146-94c3-042c2a2bf0aa',
      serviceProfileName: 'service-profile'
    }
  ]
}
```

2. setApplication

```javascript
{"application":
{
   "name":"orgapp1",
   "description":"org test app","serviceProfileID":"66eba771-2854-4fa9-bb50-9049d330282a",
   "organizationID":"3"}
}



{
  error: 'application must not be nil',
  code: 3,
  message: 'application must not be nil',
}

{
  err: 3,
  data: 'application and service-profile must be under the same organization'
}

// pass
{ id: '3' }

```

3. setOrganization

```javascript
const organization: IfSetOrganization = {
  canHaveGateways: true,
  displayName: "yangTest",
  id: "3",
  maxDeviceCount: 100,
  maxGatewayCount: 5,
  name: "yangTest",
}; // id:2

// Success feedback
{
  id: "3";
}
```

4. getOrganizations

```javascript
{
      id: '3',
      name: 'organization-9901',
      displayName: 'test.org',
      canHaveGateways: true,
      createdAt: '2021-06-16T05:58:23.972958Z',
      updatedAt: '2021-06-16T05:58:23.972958Z'
}

```

5. getOrganizationById

```javascript
{
  organization: {
    id: '3',
    name: 'organization-9901',
    displayName: 'test.org',
    canHaveGateways: true,
    maxGatewayCount: 5,
    maxDeviceCount: 100
  },
  createdAt: '2021-06-16T05:58:23.972958Z',
  updatedAt: '2021-06-16T05:58:23.972958Z'
}
```

6. setService
   test.org.service1

```javascript
{

    "addGWMetaData": true,
    "channelMask": "string",
    "devStatusReqFreq": 0,
    "dlBucketSize": 0,
    "dlRate": 0,
    "dlRatePolicy": "DROP",
    "drMax": 0,
    "drMin": 0,
    "gwsPrivate": true,
    "hrAllowed": true,
    "id": "string",
    "minGWDiversity": 0,
    "name": "string",
    "networkServerID": "1",
    "nwkGeoLoc": true,
    "organizationID": "string",
    "prAllowed": true,
    "raAllowed": true,
    "reportDevStatusBattery": true,
    "reportDevStatusMargin": true,
    "targetPER": 0,
    "ulBucketSize": 0,
    "ulRate": 0,
    "ulRatePolicy": "DROP"
}
// feedback
{
  error: 'unexpected end of JSON input',
  code: 3,
  message: 'unexpected end of JSON input',
  details: []
}
// success
{ id: '66eba771-2854-4fa9-bb50-9049d330282a' }

```

- getServices

```javascript
{
  totalCount: '2',
  result: [
    {
      id: '66eba771-2854-4fa9-bb50-9049d330282a',
      name: 'service1',
      organizationID: '3',
      networkServerID: '1',
      createdAt: '2021-06-16T07:11:27.410950Z',
      updatedAt: '2021-06-16T07:11:27.410950Z',
      networkServerName: 'ns'
    },
    {
      id: '7fde5908-1e05-4146-94c3-042c2a2bf0aa',
      name: 'service-profile',
      organizationID: '1',
      networkServerID: '1',
      createdAt: '2021-06-09T10:50:10.754210Z',
      updatedAt: '2021-06-09T10:50:10.754210Z',
      networkServerName: 'ns'
    }
  ]
}
```

- getServiceById()

```javascript

{
  serviceProfile: {
    id: '9ade8de6-ead4-4ce6-8aca-d6a043637513',
    name: 'service-profile',
    organizationID: '1',
    networkServerID: '1',
    ulRate: 0,
    ulBucketSize: 0,
    ulRatePolicy: 'DROP',
    dlRate: 0,
    dlBucketSize: 0,
    dlRatePolicy: 'DROP',
    addGWMetaData: true,
    devStatusReqFreq: 0,
    reportDevStatusBattery: false,
    reportDevStatusMargin: false,
    drMin: 0,
    drMax: 0,
    channelMask: null,
    prAllowed: false,
    hrAllowed: false,
    raAllowed: false,
    nwkGeoLoc: false,
    targetPER: 0,
    minGWDiversity: 0,
    gwsPrivate: false
  },
  createdAt: '2021-06-15T07:29:49.917213Z',
  updatedAt: '2021-06-15T07:29:49.917213Z'
}

```

- getNetworkServers

```javascript
{
  totalCount: '1',
  result: [
    {
      id: '1',
      name: 'ns',
      server: '127.0.0.1:8000',
      createdAt: '2021-06-09T10:42:45.491444Z',
      updatedAt: '2021-06-10T01:25:58.943664Z'
    }
  ]
}

```

- getNetworkServerById(id)

```javascript
{
  networkServer: {
    id: '1',
    name: 'ns',
    server: '127.0.0.1:8000',
    caCert: '',
    tlsCert: '',
    tlsKey: '',
    routingProfileCACert: '',
    routingProfileTLSCert: '',
    routingProfileTLSKey: '',
    gatewayDiscoveryEnabled: false,
    gatewayDiscoveryInterval: 0,
    gatewayDiscoveryTXFrequency: 0,
    gatewayDiscoveryDR: 0
  },
  createdAt: '2021-06-15T07:29:11.397527Z',
  updatedAt: '2021-06-15T07:29:11.397527Z',
  version: '3.13.0',
  region: 'CN470'
}

```

- setNetworkServer
  test.org.server

```javascript
{
    "caCert": "string",
    "gatewayDiscoveryDR": 0,
    "gatewayDiscoveryEnabled": true,
    "gatewayDiscoveryInterval": 0,
    "gatewayDiscoveryTXFrequency": 0,
    "id": "string",
    "name": "string",
    "routingProfileCACert": "string",
    "routingProfileTLSCert": "string",
    "routingProfileTLSKey": "string",
    "server": "string",
    "tlsCert": "string",
    "tlsKey": "string"
  }

// fb
{
  error: 'invalid gateway-discovery interval, it must be greater than 0',
  code: 3,
  message: 'invalid gateway-discovery interval, it must be greater than 0',
  details: []
}
{
  error: 'context deadline exceeded',
  code: 2,
  message: 'context deadline exceeded',
  details: []
}
Should be a server we can connect ,otherwise...
```

- setGatewayProfile

```javascript
"gatewayProfile": {
    "channels": [
      0
    ],
    "extraChannels": [
      {
        "bandwidth": 0,
        "bitrate": 0,
        "frequency": 0,
        "modulation": "LORA",
        "spreadingFactors": [
          0
        ]
      }
    ],
    "id": "string",
    "name": "string",
    "networkServerID": "string",
    "statsInterval": "string"
  }

{"gatewayProfile":
{"name":"orggateway1",
"statsInterval":"30s",
"channelsStr":"0,1,2",
"channels":[0,1,2],
"networkServerID":"1"}}
// feedback
{
  error: 'object does not exist',
  code: 5,
  message: 'object does not exist',
  details: []
}
{
  error: 'service_profile must not be nil',
  code: 3,
  message: 'service_profile must not be nil',
  details: []
}
// pass
{ id: '60013b9f-2f4d-45be-b035-1bc99fd5c437' }

```

- getGatewayProfiles

```javascript

{
   "totalCount":"1",
   "result":[
   {
      "id":"6472c530-d432-4b41-b0c4-a8847e972365","name":"orggateway1","networkServerID":"1","networkServerName":"ns","createdAt":"2021-06-16T08:08:17.981509Z","updatedAt":"2021-06-16T08:08:17.981509Z"}
   ]}


```

- getGateways

```javascript
{
  totalCount: '1',
  result: [
    {
      id: '3133383031004400',
      name: 'SX1308',
      description: 'internal gateway',
      createdAt: '2021-06-10T01:48:05.386193Z',
      updatedAt: '2021-06-10T07:19:13.700093Z',
      firstSeenAt: '2021-06-10T01:53:48.275945Z',
      lastSeenAt: '2021-06-10T07:19:13.697247Z',
      organizationID: '1',
      networkServerID: '1',
      location: [Object],
      networkServerName: 'ns'
    }
  ]
}

// pass
{
   "totalCount":"1",
   "result":[
      {
      "id":"4030201090123456",
      "name":"orggw01",
      "description":"org gateway","createdAt":"2021-06-16T09:11:43.092936Z","updatedAt":"2021-06-16T09:11:43.092936Z","firstSeenAt":null,"lastSeenAt":null,"organizationID":"3","networkServerID":"1","location":
      {
         "latitude":0.004677772516779128,
         "longitude":-0.008239746093750002,
         "altitude":1,
         "source":"UNKNOWN",
         "accuracy":0
      },
      "networkServerName":"ns"}]}

```

- setGateway

```javascript
{
        "boards": [
            {
                "fineTimestampKey": "string",
                "fpgaID": "string"
            }
        ],
        "description": "string",
        "discoveryEnabled": true,
        "gatewayProfileID": "string",
        "id": "string",
        "location": {
            "accuracy": 0,
            "altitude": 0,
            "latitude": 0,
            "longitude": 0,
            "source": "UNKNOWN"
        },
        "metadata": {},
        "name": "string",
        "networkServerID": "string",
        "organizationID": "string",
        "serviceProfileID": "string",
        "tags": {}
    }

{
   "gateway":
   {
      "location":
      {
         "latitude":0.004677772516779128,
         "longitude":-0.008239746093750002,
         "altitude":1
      },
      "name":"orggw01",
      "description":"org gateway",
      "id":"4030201090123456","gatewayProfileID":"6472c530-d432-4b41-b0c4-a8847e972365","serviceProfileID":"66eba771-2854-4fa9-bb50-9049d330282a",
      "networkServerID":"1",
      "organizationID":"3"
   }
}


// feedback
{"error":"bad gateway mac: lorawan: exactly 8 bytes are expected","code":3,"message":"bad gateway mac: lorawan: exactly 8 bytes are expected","details":[]}

// pass
{}


```

- setDeviceProfile

```javascript

{
    "adrAlgorithmID": "string",
    "classBTimeout": 0,
    "classCTimeout": 0,
    "factoryPresetFreqs": [
      0
    ],
    "geolocBufferTTL": 0,
    "geolocMinBufferSize": 0,
    "id": "string",
    "macVersion": "string",
    "maxDutyCycle": 0,
    "maxEIRP": 0,
    "name": "string",
    "networkServerID": "string",
    "organizationID": "string",
    "payloadCodec": "string",
    "payloadDecoderScript": "string",
    "payloadEncoderScript": "string",
    "pingSlotDR": 0,
    "pingSlotFreq": 0,
    "pingSlotPeriod": 0,
    "regParamsRevision": "string",
    "rfRegion": "string",
    "rxDROffset1": 0,
    "rxDataRate2": 0,
    "rxDelay1": 0,
    "rxFreq2": 0,
    "supports32BitFCnt": true,
    "supportsClassB": true,
    "supportsClassC": true,
    "supportsJoin": true,
    "tags": {},
    "uplinkInterval": "string"
  }


{"deviceProfile":

{
   "name":"dummydev1",
   "networkServerID":"1",
   "macVersion":"1.0.0",
   "regParamsRevision":"A",
   "adrAlgorithmID":"default",
   "uplinkInterval":"60s",
   "organizationID":"3"
   }}

// pass
{"id":"3c4fc4f0-71cd-42ac-895e-a65f2052ec53"}
{ "id": '023d60c9-7e65-4737-9637-52fb35a5f48a' }



```

- getDeviceProfiles

```javascript
{
  totalCount: '3',
  result: [
    {
      id: 'e3a98fa2-3477-47dc-bbca-a2bb2752a607',
      name: 'device-profile-otaa',
      organizationID: '1',
      networkServerID: '1',
      createdAt: '2021-06-10T02:30:48.923431Z',
      updatedAt: '2021-06-10T02:30:48.923431Z',
      networkServerName: 'ns'
    },
    {
      id: '3c4fc4f0-71cd-42ac-895e-a65f2052ec53',
      name: 'dummydev1',
      organizationID: '3',
      networkServerID: '1',
      createdAt: '2021-06-16T09:57:11.638551Z',
      updatedAt: '2021-06-16T09:57:11.638551Z',
      networkServerName: 'ns'
    },
    {
      id: '023d60c9-7e65-4737-9637-52fb35a5f48a',
      name: 'dummydev2',
      organizationID: '3',
      networkServerID: '1',
      createdAt: '2021-06-16T10:14:28.537721Z',
      updatedAt: '2021-06-16T10:14:28.537721Z',
      networkServerName: 'ns'
    }
  ]
}

```

- setDevice

```javascript
{
    "applicationID": "string",
    "description": "string",
    "devEUI": "string",
    "deviceProfileID": "string",
    "isDisabled": true,
    "name": "string",
    "referenceAltitude": 0,
    "skipFCntCheck": true,
    "tags": {},
    "variables": {}
}

// pass
{}

```

- getDevices

```javascript
{
  totalCount: '2',
  result: [
    {
      devEUI: '60c5a8fffe782164',
      name: 'CN470节点1',
      applicationID: '1',
      description: '测试节点',
      deviceProfileID: 'e3a98fa2-3477-47dc-bbca-a2bb2752a607',
      deviceProfileName: 'device-profile-otaa',
      deviceStatusBattery: 255,
      deviceStatusMargin: 256,
      deviceStatusExternalPowerSource: false,
      deviceStatusBatteryLevelUnavailable: true,
      deviceStatusBatteryLevel: 0,
      lastSeenAt: null
    },
    {
      devEUI: '60c5a8fffe782f64',
      name: 'node',
      applicationID: '1',
      description: '测试节点',
      deviceProfileID: 'e3a98fa2-3477-47dc-bbca-a2bb2752a607',
      deviceProfileName: 'device-profile-otaa',
      deviceStatusBattery: 255,
      deviceStatusMargin: 256,
      deviceStatusExternalPowerSource: false,
      deviceStatusBatteryLevelUnavailable: true,
      deviceStatusBatteryLevel: 0,
      lastSeenAt: '2021-06-10T07:18:50.808837Z'
    }
  ]
}



```

- getGatewayStats

```javascript
{
  error: 'timestamp: nil Timestamp',
  code: 3,
  message: 'timestamp: nil Timestamp',
  details: []
}

http://192.168.31.159:8080/api/gateways/5000201090123402/stats?interval=DAY&startTimestamp=2021-05-19T08%3A17%3A56.396Z&endTimestamp=2021-06-17T08%3A17%3A56.396Z

// pass
{"result":[
  {
    "timestamp":"2021-05-18T16:00:00Z",
    "rxPacketsReceived":0,
    "rxPacketsReceivedOK":0,
    "txPacketsReceived":0,
    "txPacketsEmitted":0},

  {"timestamp":"2021-05-19T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},

  {"timestamp":"2021-05-20T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-05-21T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-05-22T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-05-23T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-05-24T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-05-25T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-05-26T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-05-27T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-05-28T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-05-29T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-05-30T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-05-31T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-06-01T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-06-02T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-06-03T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-06-04T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-06-05T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-06-06T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-06-07T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-06-08T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-06-09T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-06-10T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-06-11T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-06-12T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-06-13T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-06-14T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-06-15T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0},{"timestamp":"2021-06-16T16:00:00Z","rxPacketsReceived":0,"rxPacketsReceivedOK":0,"txPacketsReceived":0,"txPacketsEmitted":0}]}

```
