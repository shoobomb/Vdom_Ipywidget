var jupyter-widget-example = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'jupyter-widget-example',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'jupyter-widget-example',
          version: jupyter-widget-example.version,
          exports: jupyter-widget-example
      });
  },
  autoStart: true
};

