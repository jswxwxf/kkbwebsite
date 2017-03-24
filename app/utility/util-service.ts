'use strict';

import baseDialogController = require('./base-dialog-controller');

export var serviceName = 'utility.utilService';

class UtilService {

  private defaultDialogOptions = {
    animation: true,
    size: 'md'
  };

  static $inject = ['dialogs'];

  constructor(private dialogs) {}

  /**
   * 各种弹窗
   */

  wait(msg, header = '进度', progress, opts?: angular.dialogservice.IDialogOptions): ng.ui.bootstrap.IModalServiceInstance {
    opts = angular.extend(this.defaultDialogOptions, opts || {});
    return this.dialogs.wait(header, msg, progress, opts);
  }

  error(msg, header = '错误', opts?: angular.dialogservice.IDialogOptions): ng.ui.bootstrap.IModalServiceInstance {
    opts = angular.extend(this.defaultDialogOptions, opts || {});
    return this.dialogs.error(header, msg, opts);
  }

  notify(msg, header = '通知', opts?: angular.dialogservice.IDialogOptions): ng.ui.bootstrap.IModalServiceInstance {
    opts = angular.extend(this.defaultDialogOptions, opts || {});
    return this.dialogs.notify(header, msg, opts);
  }

  confirm(msg, header = '确认', opts?: angular.dialogservice.IDialogOptions): ng.ui.bootstrap.IModalServiceInstance {
    opts = angular.extend(this.defaultDialogOptions, { size: 'lg' }, opts || {});
    return this.dialogs.confirm(header, msg, opts);
  }

  dialog(url, ctrl?, data?, opt?): ng.ui.bootstrap.IModalServiceInstance {
    ctrl = ctrl || baseDialogController.controllerName;
    opt = opt || {};
    opt.size = opt.size || 'md';
    return this.dialogs.create(url, ctrl, data, opt, 'ctrl');
  }

}

export class Service extends UtilService {}
