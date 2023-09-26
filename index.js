import express from 'express';

const app = express();

//REST API http://api.controledegastos.com/transactions

//GET http://api.controledegastos.com/transactions
app.get('/transactions', (request, response) => {
    console.log('Get transactions');
    response.json({
        id: 1
    })
})

//GET http://api.controledegastos.com/transactions/:id
//POST http://api.controledegastos.com/transactions
//PUT http://api.controledegastos.com/transactions/:id
//DELETE http://api.controledegastos.com/transactions/:id

app.listen(3000, () => console.log('API Rest iniciada em http://localhost:3000'));