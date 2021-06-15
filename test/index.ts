import { init } from "../src/index.js";

async function test() {
    console.log('test ...')
    await init();
}
test();