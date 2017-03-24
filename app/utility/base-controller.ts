'use strict';

import common = require('./index');

export abstract class BaseController {

  constructor(protected $scope: angular.IScope, protected utilService: common.utilService.Service) {

  }

}