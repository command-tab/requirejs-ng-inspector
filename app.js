define([
  // This RequireJS module depends on the 'angular'
  // RequireJS module already defined in main.js, and the
  // 'controllers' RequireJS module defined in controllers.js
  'angular',
  'controllers'
], function (ng) {
  'use strict';
  // Define the emtpy Angular app
  return ng.module('DemoApp', [
    // Angular module dependencies
    'app.controllers'
  ]);
});
