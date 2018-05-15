import express from 'express';
import bodyParser from 'body-parser';

import env from './config/env';
import routes from './routes';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send("ya");
});

export default router;