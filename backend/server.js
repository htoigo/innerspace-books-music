import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import path from 'path';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';
import uploadRouter from './routers/uploadRouter.js';

//console.log(`MONGODB_URI=${process.env.MONGODB_URI}`);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/innerspace').then(() => {
  console.log('Connected to database.');
}).catch((err) => {
  console.log(err.message);
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.use('/api/uploads', uploadRouter);

app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
// The following allows Heroku to serve the React files in the build folder in
// frontend.
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('{/*path}', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);
// app.get('/', (req, res) => {
//   res.send('Express Server at your service.');
// });

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
