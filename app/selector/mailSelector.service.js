(function () {
  angular.module("mailApp").service("mailSelectorService", ["$http", "mailTemplateService", function ($http, mailTemplateService) {
    let serv = this;

    // Properties
    serv.selectedType = {}

    serv.types = {
      mail: {
        denial: { key: "denial", display: "Denial", recipientTypes: ["trainingFC", "resident"] },
        review: { key: "review", display: "Review", recipientTypes: ["trainingFC", "resident", "fleetCommander", "logiMaster"] },
        removal: { key: "removal", display: "Removal", recipientTypes: ["trainingFC", "resident", "fleetCommander", "logiMaster"] }, 
      },
      recipient: {
        trainingFC: { key: "trainingFC", display: "Training Fleet Commander" },
        resident: { key: "resident", display: "Resident" },
        fleetCommander: { key: "fleetCommander", display: "Fleet Commander" },
        logiMaster: {key: "logiMaster", display: "Logi Master" }
      }
    }

    // Functions
    serv.selectType = function (typeKey, type) {
      switch (typeKey) {
        case "mail": serv.selectMailType(type); break;
        case "recipient": serv.selectRecipientType(type); break;
      }
    }

    serv.selectMailType = function (type) {
      serv.selectedType.mail = type;

      // Reassign recipient type if out of range
      if (serv.selectedType.recipient) {
        if (type.recipientTypes && type.recipientTypes.indexOf(serv.selectedType.recipient.key) < 0) {
          Object.keys(serv.types.recipient).some(function (propertyKey) {
            let currentRecipientType = serv.types.recipient[propertyKey];
            if (type.recipientTypes.indexOf(currentRecipientType.key) >= 0) {
              serv.selectedType.recipient = currentRecipientType;
              return true;
            }
          });
        }
      }

      if (serv.selectedType.recipient) {
        mailTemplateService.setTemplate(serv.selectedType.mail.key, serv.selectedType.recipient.key);
      }

    }

    serv.selectRecipientType = function (type) {
      serv.selectedType.recipient = type;
      if (serv.selectedType.mail) {
        mailTemplateService.setTemplate(serv.selectedType.mail.key, serv.selectedType.recipient.key);
      }
    }

    // Constructing
    serv.selectMailType(serv.types.mail.denial);
    serv.selectRecipientType(serv.types.recipient.trainingFC);

  }]);
})();