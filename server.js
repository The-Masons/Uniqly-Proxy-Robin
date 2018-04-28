const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());

app.get('/product/:productId', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/product/:productId/sizes_qtys', (req, res) => {
  axios.get(`http://13.57.205.67:3001/product/${req.params.productId}/sizes_qtys`)
    .then(resp => {
      console.log(resp.data);
      res.status(200).send(resp.data);
    })
    .catch(err => res.status(500).send(err));
});

app.get('/product/:productId/addtocart', (req, res) => {
  axios.get(`http://13.57.205.67:3001/product/${req.params.productId}/addtocart`)
  .then(resp => {
    console.log(resp.data);
    res.status(200).send(resp.data);
  })
    .catch(err => res.status(500).send(err));
});

app.get('/product/:productId/colors', (req, res) => {
  axios.get(`http://54.183.208.237:3003/product/${req.params.productId}/colors`)
  .then(resp => {
    console.log(resp.data);
    res.status(200).send(resp.data);
  })
    .catch(err => res.status(500).send(err));
});

app.get('/product/:productId/images', (req, res) => {
  axios.get(`http://54.183.208.237:3003/product/${req.params.productId}/images`)
  .then(resp => {
    console.log(resp.data);
    res.status(200).send(resp.data);
  })
    .catch(err => res.status(500).send(err));
});

app.get('/productdetails/:productId', (req, res) => {
  axios.get(`http://54.183.208.237:3003/productdetails/${req.params.productId}`)
  .then(resp => {
    console.log(resp.data);
    res.status(200).send(resp.data);
  })
    .catch(err => res.status(500).send(err));
});

app.get('/reviews/:productId', (req, res) => {
  axios.get(`http://13.58.109.199:3005/reviews/${req.params.productId}`)
    .then(resp => res.status(200).send(resp.data))
    .catch(err => res.status(500).send(err));
});

app.listen(port, () => console.log(`Proxy listening on ${port}`));
