var promise = require('promise');

var charService = require('../char/char-service');
var charIds = require('../../eve-api/character-ids');
var commOpenMail = require('../comm/open-mail');

var openMailWindow = function (req) {

  var charData;
  var recipientIds;

  // Get charData and recipient Ids (can run concurrently)
  return promise.all([
    charService.getChar(req).then(function (data) { charData = data; }),
    charIds(req.body.recipients || []).then(function (ids) { 
      recipientIds = ids.map(function (char) { return { id: char.characterID }; })
    })
  ])

  // Create & send request
  .then(function () {
    var postData = {
      toMailingListId: 145173339,
      subject: req.body.subject,
      body: req.body.body
    }

    if (recipientIds && recipientIds.length > 0) { postData.recipients = recipientIds; }

    return commOpenMail(req.session.authData.accessToken, charData.CharacterID, postData);
  })

  // Catch and throw
  .catch(function (error) {
    return promise.reject(error);
  });
}

module.exports = {
  openMailWindow: openMailWindow
}