var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');

var react = require('react')
var react_dom = require('react-dom')
var vdom_transform = require('@nteract/transform-vdom').default


// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`s
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
var HelloModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'HelloModel',
        _view_name : 'HelloView',
        _model_module : 'jupyter-widget-example',
        _view_module : 'jupyter-widget-example',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
        value : 'Hey! This is a custom Ipywidget using VDOM'
    })
});


// Custom View. Renders the widget model.
var HelloView = widgets.DOMWidgetView.extend({
    render: function() {
        this.value_changed();
        this.model.on('change:vdom', this.value_changed, this);
    },

    value_changed: function() {
        //var d1 = this.model.get('vdom');
        var element = react.createElement(vdom_transform, {data:this.model.get('vdom')} );
        react_dom.render(element, this.el);
        //this.el.textContent = this.model.get('vdom');
    }
});


module.exports = {
    HelloModel : HelloModel,
    HelloView : HelloView
};
