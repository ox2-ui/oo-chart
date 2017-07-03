Package.describe({
  name: 'ox2:chart',
  summary: 'TESTING_DO_NOT_USE Chart components',
  version: '1.4.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  // Core
  api.use([
    'templating',
    'ecmascript',
    'underscore',
    'less'
    ]);
  // 3rd party
  api.use([
    'mquandalle:jade@0.4.9', 'ox2:chartjs@1.0.2_1'
    ]);
  api.addFiles('lib/oo-chart.jade', C);
  api.addFiles('lib/oo-chart.js', C);
  api.addFiles('lib/oo-chart.less', C);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:chart');
  api.addFiles('tests/oo-chart-tests.js');
});
