/// <reference path="../typings/app.d.ts" />

'use strict';

var app = angular.module('lcbapp', [
  'ui.bootstrap', 'ui.router',
  'ngAnimate', 'ngTouch', 'ngSanitize',
  'pascalprecht.translate', 'dialogs.default-translations', 'dialogs.main'
]);

import common = require('./utility/index'); common.load(app);
import i18n = require('./i18n/index'); i18n.load(app);

/* features */
import welcome = require('./features/welcome/index'); welcome.load(app);
import faq = require('./features/faq/index'); faq.load(app);
import sdk = require('./features/sdk/index'); sdk.load(app);

app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', ($locationProvider: angular.ILocationProvider, $stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) => {

  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false,
  //   rewriteLinks: false
  // });

  welcome.states($stateProvider);
  faq.states($stateProvider);
  sdk.states($stateProvider);

  $urlRouterProvider.otherwise('/welcome');


}]);