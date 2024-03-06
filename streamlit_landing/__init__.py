import streamlit.components.v1 as components

# Create a function _component_func which will call the frontend component when run
_component_func = components.declare_component(
    "landing_page",
    url="http://localhost:3001",  # Fetch frontend component from local webserver
)


def landing_page(title1="Welcome", title2="", key=None):
    component_value = _component_func(title1=title1, title2=title2, key=key)
    return component_value
