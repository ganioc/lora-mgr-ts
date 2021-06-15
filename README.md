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

Save jwt to config.json, so we don't have to query token everytime.

```
config/config.json

```
