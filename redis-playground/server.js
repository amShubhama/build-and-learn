const express = require('express');
const axios = require('axios');
const client = require('./client');


const app = express();

app.get('/', async (req, res) => {
    const cache = await client.get('storedTodos');

    if (cache)
        return res.json(JSON.parse(cache));

    const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos");

    await client.set('storedTodos', JSON.stringify(data));
    await client.expire('storedTodos', 45);

    return res.json(data);
})

app.listen(3000, () => console.log('Server is running..'));