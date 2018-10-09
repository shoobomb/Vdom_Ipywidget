import ipywidgets as widgets
from traitlets import Unicode, Instance
from vdom import to_json

def ser(el, w):
    return to_json(el)

@widgets.register
class customVdomWidget(widgets.DOMWidget):
    """An example widget."""
    _view_name = Unicode('HelloView').tag(sync=True)
    _model_name = Unicode('HelloModel').tag(sync=True)
    _view_module = Unicode('jupyter-widget-example').tag(sync=True)
    _model_module = Unicode('jupyter-widget-example').tag(sync=True)
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    _model_module_version = Unicode('^0.1.0').tag(sync=True)
    value = Unicode('Hello World!').tag(sync=True)
    vdom = Instance(object).tag(sync=True, to_json=ser)
    
    def __init__(self, vdom_el, *args, **kwargs):
        self.vdom = vdom_el
        super(HelloWorld, self).__init__(*args, **kwargs)



''' 
# Testing on Jupyter Notebook
obj = customVdomWidget(h1('hello world'))
obj
obj.vdom = div(h1('Heyy'), p('Testing...'))
obj 
'''