const yup = require('yup');

module.exports.emailSchema = yup.string().email();
module.exports.contentSchema = yup.string().matches(/[\sa-z0-9]+/i );
module.exports.nameSchema = yup.string().matches(/^[A-Z][a-z]{2,15}$/ );