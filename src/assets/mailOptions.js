'use strict';

const mailTemplateName = {
    USER_VERIFICATION_MAIL: 'userVerificationMail',
    VERIFICATION_SUCCESSFULL_MAIL: 'verificationSuccessfulMail',
    USER_REACTIVATE_MAIL: 'accountReactivateMail',
    USER_UPDATED_MAIL: 'userUpdatedMail',
    USER_PASSWORD_UPDATED_MAIL: 'passwordUpdatedMail'
}

const mailSubjectLine = {
    USER_VERIFICATION_MAIL: 'Welcome to Finance Tracker - Verify Your Email and Activate Your Account.',
    VERIFICATION_SUCCESSFULL_MAIL: 'Account Verified - Welcome to Finance Tracker.',
    USER_REACTIVATE_MAIL: 'Welcome Back! Your Account is Reactivated.',
    USER_UPDATED_MAIL: 'Account Details Successfully Updated',
    USER_PASSWORD_UPDATED_MAIL: 'Password Updated Successfully'
}

export {
    mailTemplateName,
    mailSubjectLine
}
