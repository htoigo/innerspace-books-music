import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/', (req, res) => {
  res.send('Express Server at your service.');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
