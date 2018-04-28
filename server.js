const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './public')));

app.get('/product/:productId', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/product/:productId/sizes_qtys', (req, res) => {
  axios.get(`http://13.57.205.67:3001/product/${req.params.productId}/sizes_qtys`)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err));
});

app.get('/product/:productId/addtocart', () => {});
app.get('/product/:productId/colors', () => {});
app.get('/product/:productId/images', () => {});
app.get('/productdetails/:productId', () => {});
app.get('/reviews/:productId', () => {});

app.listen(port, () => console.log(`Proxy listening on ${port}`));
