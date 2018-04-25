const express = require('express');
const path = require('path');
const Route = require('react-router').Route;
const Router = require('react-router').Router;
const Switch = require('react-router').Switch;

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './public')));

app.get('/product/:productId', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(port, () => console.log(`Proxy listening on ${port}`));
