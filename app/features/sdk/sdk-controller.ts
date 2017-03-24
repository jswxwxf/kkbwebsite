'use strict';

import common = require('../../utility/index');
import {BaseController} from "../../utility/base-controller";

export var controllerName = 'sdk.sdkController';

class SdkController extends BaseController {

  static $inject = ['$scope', common.utilService.serviceName];

  constructor(protected $scope, protected utilService: common.utilService.Service) {
    super($scope, utilService);
  }

  apply() {
    this.utilService.notify('<h4>申请APK和SDK请联系</h4><a href="mailto:niannian.lu@kaikaibao.com">niannian.lu@kaikaibao.com</a>', null, { size: 'sm', windowClass: 'sdkModal' });
  }

}

export class Controller extends SdkController {}