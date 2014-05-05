require.config({
  noGlobal: true,
  paths: {
    'angular': 'angular.min'
  },
  shim: {
    'angular': {
      exports: 'angular'
    }
  },
  deps: ['bootstrap'] // depend on (and load) app.js
});
