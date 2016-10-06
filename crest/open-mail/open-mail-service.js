var promise = require('promise');

var charService = require('../char/char-service');
var commOpenMail = require('../comm/open-mail');

var openMailWindow = function (req) {
  return new promise(function (resolve, reject) {
    charService.getChar(req).then(function (charData) {
      
      var postData = {
        recipients: [{ id: 119696222 }],
        toMailingListId: 145173339,
        subject: 'Test Subject',
        body: 'Test body'
      }

      commOpenMail(req.session.authData.accessToken, charData.CharacterID, postData).then(resolve, reject);
    })
  });
}

module.exports = {
  openMailWindow: openMailWindow
}