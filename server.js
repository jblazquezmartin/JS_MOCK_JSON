const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const dataDirectory = path.join(__dirname, 'data');

app.get('/159.235.132.125', (req, res) => {
  const loc1Data = fs.readFileSync(path.join(dataDirectory, '159.235.132.125.json'));
  const loc1Json = JSON.parse(loc1Data);
  res.json(loc1Json);
});

app.get('/159.235.165.1', (req, res) => {
  const loc2Data = fs.readFileSync(path.join(dataDirectory, '159.235.165.1.json'));
  const loc2Json = JSON.parse(loc2Data);
  res.json(loc2Json);
});

app.get('/165.235.123.1', (req, res) => {
  const loc3Data = fs.readFileSync(path.join(dataDirectory, '165.235.123.1.json'));
  const loc3Json = JSON.parse(loc3Data);
  res.json(loc3Json);
});


const port = 3000; // Puerto en el que se ejecutará el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});