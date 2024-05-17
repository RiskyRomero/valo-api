# VALO-API
Just another Valorant API wrapper written in TypeScript, based on Henrik-3's [unofficial-valorant-api](https://www.npmjs.com/package/unofficial-valorant-api)!

#### Important Note :D
Please don't abuse the API, don't ruin it for the rest of us:)

### Installation
``npm install valo-api``

### Example Code
```js
import VALOAPI from "valo-api";
const valApi = new VALOAPI();

async function fetchUserDetails() {
    const getUser = await valApi.getAccount({name: "Ryumin", tag: "ELI"});
    return console.log(getUser);

}
```

### Expected Output
```js
{
  status: 200,
  data: {
    puuid: 'c5050e26-bf7d-569e-a8e3-a5af8ca3ba30',
    region: 'ap',
    account_level: 271,
    name: 'Ryumin',
    tag: 'ELI',
    card: {
      small: 'https://media.valorant-api.com/playercards/910ace70-4d3b-3c53-2c55-5f9fa179caa8/smallart.png',
      large: 'https://media.valorant-api.com/playercards/910ace70-4d3b-3c53-2c55-5f9fa179caa8/largeart.png',
      wide: 'https://media.valorant-api.com/playercards/910ace70-4d3b-3c53-2c55-5f9fa179caa8/wideart.png',
      id: '910ace70-4d3b-3c53-2c55-5f9fa179caa8'
    },
    last_update: 'an hour ago',
    last_update_raw: 1715867399
  },
  ratelimits: { used: 1, remaining: 29, reset: 60 },
  error: null,
  url: 'https://api.henrikdev.xyz/valorant/v1/account/Ryumin/ELI'
}
```