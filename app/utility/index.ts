'use strict';

export import utilService = require('./util-service');

export var load = (app: angular.IModule) => {

  app.service(utilService.serviceName, utilService.Service);

};