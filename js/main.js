require.config({
  noGlobal: true,
  paths: {
    'angular': 'js/lib/angular.min'
  },
  shim: {
    'angular': {
      exports: 'angular'
    }
  },
  deps: ['js/bootstrap'] // depend on (and load) bootstrap.js
});
