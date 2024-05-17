'use strict';

import { buildApiResponse, responseCodes, logger } from 'lib-finance-service';
import emailService from '../controllers/index.js';

const header = 'route: send-mail';
const msg = 'Send Mail router started';

const log = logger(header);

// API Function
const sendMail = async(req, res, next) => {
    log.info(msg);

    try {
        const payload = req.body;

        log.info('Call controller function to validate payload');
        const isValidPayload = emailService.validateSendMailPayload(payload);
        if (!isValidPayload.isValid) {
            throw isValidPayload;
        }

        log.info('Call controller function to send mail to user');
        const isMailSend = await emailService.sendMailToUser(payload);
        if (!isMailSend.isValid) {
            throw isMailSend;
        }

        log.success(`Mail sent to user successfully`);
        res.status(responseCodes[isMailSend.resType]).json(
            buildApiResponse(isMailSend)
        );
    } catch (err) {
        if (err.resType === 'INTERNAL_SERVER_ERROR') {
            log.error('Internal Error occurred while working with register user router function');
        } else {
            log.error(`Error occurred : ${err.resMsg}`);
        }
        next(err);
    }
}

export default sendMail;
