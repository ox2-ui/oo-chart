Package.describe({
  name: 'ox2:chart',
  summary: 'TESTING_DO_NOT_USE Chart components',
  version: '2.0.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Npm.depends({
  'chart.js': '2.6.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.3.1');
  // Core
  api.use([
    'templating@1.3.2',
    'ecmascript',
    'underscore',
    'less'
    ]);
  // 3rd party
  api.use([
    'mquandalle:jade@0.4.9']);
  api.addFiles('lib/oo-chart.jade', C);
  api.addFiles('lib/oo-chart.js', C);
  api.addFiles('lib/oo-chart.less', C);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:chart');
  api.addFiles('tests/oo-chart-tests.js');
});
