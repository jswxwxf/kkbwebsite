'use strict';

import partnerComponent = require('./partner-component');

export var load = (app: angular.IModule) => {
  app.component(partnerComponent.componentName, partnerComponent.Component);
};

export var states = ($stateProvider: angular.ui.IStateProvider) => {

  $stateProvider
    .state('welcome', {
      url: '/welcome',
      templateUrl: 'features/welcome/welcome.html',
    });

};
