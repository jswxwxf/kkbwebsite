'use strict';
//import services = require('../../../components/services/index');
//import models = require('../../../components/models/index');
//import {BaseController} from "../../../utility/base-controller";

export var controllerName = 'utility.BaseDialogController';

export class BaseDialogController {

  yes = this.ok;
  no = this.cancel;
  close = this.cancel;

  static $inject = ['$uibModalInstance', 'data'];

  constructor(protected $modalInstance, protected data) {}

  ok() {
    this.$modalInstance.close('ok');
  }

  cancel() {
    this.$modalInstance.dismiss('cancel');
  }

}

export class Controller extends BaseDialogController {}