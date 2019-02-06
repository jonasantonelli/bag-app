const express = require('express');
const cors = require('cors');
const database = require('./database');

const updateDatabase = (bagId, items) => {
    if(!database.bag) {
        return;
    }

    database.bag.map(bag => {
        if(bag.id === bagId) {
            bag.items = items;
        }
    });
};

const app = express();

app.use(cors());

app.get('/bag/:bagId', (request, response) => {
    const { bagId } = request.params;
    const bag = database.bag.filter(b => b.id === bagId);
    response.json(bag);
});

app.delete('/bag/:bagId/items/:itemId', (request, response) => {
    const { bagId } = request.params;
    const bag = database.bag.filter(b => b.id === bagId);

    if (!bag.length) {
        response.status(404);
        response.send({ error: 'Not found' });
    }

    const { itemId } = request.params;
    const found = bag[0].items.find(i => i.id === itemId);

    if(!found) {
        response.status(404);
        response.send({ error: 'Not Found' });
        return;
    }

    const result = bag[0].items.filter(i => i.id !== itemId);
    updateDatabase(bagId, result);

    response.status(200);
    response.send(result);
});

const port = 3000;
app.listen(port, (err) => {
    if (err) {
        return console.log('unexpected error', err);
    }

    console.log(`server is listening on ${port}`);

    return null;
});
