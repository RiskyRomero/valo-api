const HenrikDevValorantAPI = require('../src/index');
const VAPI = new HenrikDevValorantAPI();

async function meow() {
    let rawr = await VAPI.getMatches({region: "ap", name: "Ryumin", tag: "ELI", filter: "swiftplay"});
    console.log(rawr.data[0].metadata);
}

meow();