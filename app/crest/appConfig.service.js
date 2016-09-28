(function () {
  angular.module("eveCrest")
  .service("appConfigService", function () {
    let serv = this;

    // Config
    function init() {
      serv.clientId = "6419217e48b44d2291083f679b4158eb",
      serv.currentScope = [
        serv.availableScopes.remoteClientUI
      ];
    }

    // Client Id
    serv.clientId = "";

    // Scope
    serv.currentScope = [];
    serv.availableScopes = {
      publicData: "publicData",
      characterAccountRead: "characterAccountRead",
      characterBookmarksRead: "characterBookmarksRead",
      characterCalendarRead: "characterCalendarRead",
      characterChatChannelsRead: "characterChatChannelsRead",
      characterClonesRead: "characterClonesRead",
      characterContactsRead: "characterContactsRead",
      characterContactsWrite: "characterContactsWrite",
      characterFactionalWarfareRead: "characterFactionalWarfareRead",
      characterFittingsRead: "characterFittingsRead",
      characterFittingsWrite: "characterFittingsWrite",
      characterIndustryJobsRead: "characterIndustryJobsRead",
      characterKillsRead: "characterKillsRead",
      characterLocationRead: "characterLocationRead",
      characterMailRead: "characterMailRead",
      characterMarketOrdersRead: "characterMarketOrdersRead",
      characterMedalsRead: "characterMedalsRead",
      characterNavigationWrite: "characterNavigationWrite",
      characterNotificationsRead: "characterNotificationsRead",
      characterResearchRead: "characterResearchRead",
      characterSkillsRead: "characterSkillsRead",
      characterWalletRead: "characterWalletRead",
      remoteClientUI: "remoteClientUI"
    }
    serv.getScopeString = function() {
      return serv.currentScope.join(" ");
    }
    serv.addScope = function(scope) {
      if (serv.currentScope.indexOf(scope) < 0) {
        serv.currentScope.push(scope);
      }
    }
    init();
  });
})();