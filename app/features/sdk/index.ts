'use strict';

import sdkController = require('./sdk-controller');

export var load = (app: angular.IModule) => {
  app.controller(sdkController.controllerName, sdkController.Controller);
};

export var states = ($stateProvider: angular.ui.IStateProvider) => {

  $stateProvider
    .state('sdk', {
      url: '/sdk',
      templateUrl: 'features/sdk/sdk.html',
      controller: sdkController.controllerName,
      controllerAs: 'ctrl'
    });

};
