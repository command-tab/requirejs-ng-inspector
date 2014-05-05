// Bootstrap angular onto the window.document node.
// Must do this rather than defining the ng-app directive
// so that RequireJS is able to first load dependencies.
define([
  'require',
  'angular',
  'app'
], function (require, ng) {
  'use strict';
  angular.element(document).ready(function() {
    ng.bootstrap(document, ['DemoApp']);
  });
});
