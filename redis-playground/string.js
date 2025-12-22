const client = require('./client.js');

async function init() {
    // const result = await client.mget(['user:1', 'user:2', 'user:3']);
    // const r1 = await client.get('msg:3');
    // console.log("result: ", result);
    // console.log(r1);
    // await client.set('msg:3', "hey from node.js");
    // console.log(await client.get("msg:3"));
    // console.log(await client.del("msg:3"));
    //console.log(await client.get("msg:4"));
    // await client.expire("msg:4", 10);

    // await client.set("name", "Shubham");
    // await client.expire("name", 30);
    const result = await client.get("name");
    console.log(result);
}

init();