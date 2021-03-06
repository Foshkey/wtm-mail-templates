var express = require('express');
var router = express.Router();

var responseCode = require('./response-code');
var charService = require('../crest/char/char-service');
var openMailService = require('../crest/open-mail/open-mail-service');

router.get('/char', function (req, res, next) {
  charService.getChar(req).then(function (charData) {
    res.json({
      CharacterID: charData.CharacterID,
      CharacterName: charData.CharacterName
    });
  }).catch(function (error) {
    console.log(error);
    var errRes = new Error('Could not find character');
    errRes.status = 500;
    next(errRes);
  })
});

router.post('/logout', function (req, res, next) {
  req.session.destroy();
  res.status(200).send();
});

router.post('/open-mail', function (req, res, next) {
  openMailService.openMailWindow(req).then(function () {
    res.status(200).send();
  }).catch(function (error) {
    console.log(error);
    res.status(500).send();
  })
});

module.exports = router;