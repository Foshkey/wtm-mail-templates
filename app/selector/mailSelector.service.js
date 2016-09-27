var types = {
  mail: {
    denial: { key: 0, display: "Denial" },
    review: { key: 1, display: "Review" },
    removal: { key: 2, display: "Removal" }, 
  },
  recipient: {
    trainingFC: { key: 0, display: "Training Fleet Commander", showOnMailType: [0,1,2] },
    resident: { key: 1, display: "Resident", showOnMailType: [0,1,2] },
    fleetCommander: { key: 2, display: "Fleet Commander", showOnMailType: [1,2] },
    logiMaster: {key: 3, display: "Logi Master", showOnMailType: [1,2] }
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