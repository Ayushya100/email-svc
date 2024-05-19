'use strict';

const mailTemplateName = {
    USER_VERIFICATION_MAIL: 'userVerificationMail',
    VERIFICATION_SUCCESSFULL_MAIL: 'verificationSuccessfulMail',
    USER_REACTIVATE_MAIL: 'accountReactivateMail'
}

const mailSubjectLine = {
    USER_VERIFICATION_MAIL: 'Welcome to Finance Tracker - Verify Your Email and Activate Your Account.',
    VERIFICATION_SUCCESSFULL_MAIL: 'Account Verified - Welcome to Finance Tracker.',
    USER_REACTIVATE_MAIL: 'Welcome Back! Your Account is Reactivated.'
}

export {
    mailTemplateName,
    mailSubjectLine
}
