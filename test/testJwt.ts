// import { validJwt, parseJwt } from "../src/RestApi";

import { isValidJwtExp, parseJwt } from "../src/RestApi/env.js"

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhcyIsImV4cCI6MTYyMzgwNTk4MiwiaWQiOjEsImlzcyI6ImFzIiwibmJmIjoxNjIzNzE5NTgyLCJzdWIiOiJ1c2VyIiwidXNlcm5hbWUiOiJhZG1pbiJ9.kNUy37zm1en1fFkyBPYQn7uVDjOxMumnZz7gVfStmc0'

let parsed = parseJwt(token)
console.log('jwt parsed:', parsed)

console.log('jwt valid:', isValidJwtExp(parsed.exp))


