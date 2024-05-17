'use strict';

import { dbConnection, logger } from 'lib-finance-service';
import app from './app.js';
import dotenv from 'dotenv';

dotenv.config({
    path: './.env'
});

const log = logger('service-connection');

dbConnection()
.then(() => {
    const port = process.env.PORT || 5200;
    app.listen(port, () => {
        log.info(`Server is running on PORT: ${port}`);
    });
}).catch((err) => {
    log.error(`DB Connection Failed!, ${err}`);
});