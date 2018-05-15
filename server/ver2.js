import router from './ver1';
import express from 'express';
import path from 'path';
var app = express();

app.use('/static', express.static(path.join(__dirname, 'public', 'static')));
app.use('/users', router)
// console.log(`${__dirname}/build`);

export default app;