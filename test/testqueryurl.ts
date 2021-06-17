import * as querystring from 'querystring'

let str = querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });

console.log('str:', str)

let time = new Date().toISOString()

let strTime = querystring.stringify({
    startTimestamp: `${time}`,
    endTimestamp: time
})
console.log('strTime:', strTime)