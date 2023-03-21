import {setupApp} from './app'

main();

const PORT = 80;
const HOST = "0.0.0.0";

async function main() {

    const app = await setupApp();

    await app.listen(PORT, HOST, () => {
        console.log(`App is listening at ${HOST}:${PORT}`)
    });

}