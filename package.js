Package.describe({
  name: 'ox2:chart',
  summary: 'Chart components',
  version: '1.0.0',
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
    'ecmascript'
    ]);
  // 3rd party
  api.use([
    'lauricio:less-autoprefixer@2.5.0_3','mquandalle:jade@0.4.5', 'ox2:chartjs@1.0.2_1'
    ]);
  // 3rd party
  // api.addFiles('lib/chart.js', C);
  // api.export('Chart');
  // oo
  api.addFiles('lib/oo-chart.jade', C);
  api.addFiles('lib/oo-chart.js', C);
  api.addFiles('lib/oo-chart.less', C);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:chart');
  api.addFiles('tests/oo-chart-tests.js');
});
