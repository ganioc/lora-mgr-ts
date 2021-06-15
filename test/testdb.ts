// import { JSONFile } from 'lowdb'
import { join } from 'path'
import * as path from 'path'
import { Low, JSONFile } from 'lowdb';
import { Config } from '../src/RestApi/env'

const __dirname = path.resolve();

async function main() {
    console.log('test db')
    const file = join('config', 'config.json')
    console.log('file:', file)
    // const adapter = new JSONFile(file)
    const db = new Low(new JSONFile<Config>(file))
    await db.read()
    db.data = {
        jwt: "who",
        urlBase: "http://localhost"
    }
    await db.write()
}
main();