'use strict';

export var load = (app: angular.IModule) => {

};

export var states = ($stateProvider: angular.ui.IStateProvider) => {

  $stateProvider
    .state('faq', {
      url: '/faq',
      templateUrl: 'features/faq/faq.html',
    });

};
