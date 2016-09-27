var types = {
  mail: {
    denial: "Denial",
    review: "Review",
    removal: "Removal" 
  },
  recipient: {
    trainingFC: "Training Fleet Commander",
    resident: "Resident",
    fleetCommander: "Fleet Commander",
    logiMaster: "Logi Master"
  }
};

(function () {
  angular.module("mailApp").service("mailSelectorService", function () {
    let serv = this;
    
    serv.type = {
      mail: types.mail.denial,
      recipient: types.recipient.trainingFC
    }
  });
})();