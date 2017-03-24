'use strict';

export var componentName = 'lcbPartner';

import controller = require('./partner-controller');

export var Component: angular.IComponentOptions = {

  templateUrl: 'features/welcome/partner.html',
  controller: controller.Controller

};