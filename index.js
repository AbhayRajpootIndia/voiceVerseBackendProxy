/* eslint-disable no-console */
// Accessing .env variables
require('dotenv').config();

const mongoose = require('mongoose');

// const DB_URL = process.env.MONGODB_URL.replace(
//   '<USERNAME>',
//   process.env.MONGODB_USERNAME,
// ).replace('<PASSWORD>', process.env.MONGODB_PASSWORD);

// mongoose
//   .connect(DB_URL)
//   // eslint-disable-next-line no-unused-vars
//   .then((connection) => {
//     console.log('MONGO DB CONNECTED');
//   })
//   .catch((err) => {
//     console.error('CONNECTING TO MONGODB: ', err);
//   });

const app = require('./src/app');

// PORT for the server
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
