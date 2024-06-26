'use strict';

const mailTemplateName = {
    USER_VERIFICATION_MAIL: 'userVerificationMail',
    VERIFICATION_SUCCESSFULL_MAIL: 'verificationSuccessfulMail',
    USER_REACTIVATE_MAIL: 'accountReactivateMail',
    USER_UPDATED_MAIL: 'userUpdatedMail',
    USER_PASSWORD_UPDATED_MAIL: 'passwordUpdatedMail',
    USER_DEACTIVATE_MAIL: 'accountDeactivatedMail',
    ACCOUNT_REGISTRATION_MAIL: 'registerNewAccountMail',
    CARD_REGISTRATION_MAIL: 'registerNewCardMail'
}

const mailSubjectLine = {
    USER_VERIFICATION_MAIL: 'Welcome to Finance Tracker - Verify Your Email and Activate Your Account.',
    VERIFICATION_SUCCESSFULL_MAIL: 'Account Verified - Welcome to Finance Tracker.',
    USER_REACTIVATE_MAIL: 'Welcome Back! Your Account is Reactivated.',
    USER_UPDATED_MAIL: 'Account Details Successfully Updated',
    USER_PASSWORD_UPDATED_MAIL: 'Password Updated Successfully',
    USER_DEACTIVATE_MAIL: 'Account Deactivation Confirmation',
    ACCOUNT_REGISTRATION_MAIL: 'Welcome to Your New Investment Account!',
    CARD_REGISTRATION_MAIL: 'Confirmation: New Card Registration'
}

export {
    mailTemplateName,
    mailSubjectLine
}
