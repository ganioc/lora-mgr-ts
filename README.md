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

Save jwt to config.json, so we don't have to query token everytime. Every time axios used, jwt token will be checked , otherwise it will be updated.

```
config/config.json

```

## Test with mocha

% ./node_modules/.bin/mocha out/test/api/testAll.js

## APIs

0. steps:

- add an organization, test.org
- add a service,
- add a gateway,
- add an application,

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
{
  error: 'application must not be nil',
  code: 3,
  message: 'application must not be nil',
}

{
  err: 3,
  data: 'application and service-profile must be under the same organization'
}


```

3. setOrganization

```
// Success feedback
{ id: '3' }

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
