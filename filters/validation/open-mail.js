var promise = require('promise');

module.exports = function (req) {
  return new promise(function (resolve, reject) {
    if (req.baseUrl !== 'api/open-mail') { return resolve(); }
    
    if (!req.body.subject || typeof req.body.subject !== 'string') {
      return reject('Mail subject is required.');
    }
    if (!req.body.body || typeof req.body.body !== 'string') {
      return reject('Mail body is required.');
    }
    if (req.body.recipients && !Array.isArray(req.body.recipients)) {
      return reject('Recipients must be an array.');
    }

    resolve();
  })
}