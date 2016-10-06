var promise = require('promise');

var commService = require('./comm-service');

module.exports = function (characterNames) {
  return new promise(function (resolve, reject) {

    if (!characterNames || characterNames.length === 0) {
      return reject('No character names were passed.');
    }

    var querystringNames = characterNames.map(function (name) {
      return encodeURIComponent(name);
    });

    var options = {
      host: 'api.eveonline.com',
      path: '/eve/CharacterID.xml.aspx?names=' + querystringNames.join(','),
      method: 'GET',
    };

    commService.sendRequest(options).then(function (result) {
      if (!result.eveapi || !result.eveapi.result || result.eveapi.result.lenghth === 0) {
        reject('Could not find eve api result.');
      }
      else {
        var charIdList = [];
        var rowset = result.eveapi.result[0].rowset[0].row;
        console.log(rowset);
        rowset.forEach(function (row) {
          charIdList.push({
            name: row.$.name,
            characterID: row.$.characterID
          })
        })
        resolve(charIdList);
      }
    }).catch(function (error) {
      reject(result);
    });
  });
}