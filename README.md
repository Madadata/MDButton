# MDButton

[![Build
Status](https://travis-ci.org/Madadata/MDButton.svg?branch=master)](https://travis-ci.org/Madadata/MDButton)
[![npm](https://img.shields.io/npm/dm/localeval.svg?maxAge=2592000)]()
[![VersionEye](https://img.shields.io/versioneye/d/ruby/rails.svg?maxAge=2592000)]()
[![DUB](https://img.shields.io/dub/l/vibe-d.svg?maxAge=2592000)]()

A react button component

# Properties
-----
## Actions

* **onClick**: Function - function to be called when the button is clicked
* **onDoubleClick**: Function - function to be called when the button is double clicked
* **onMouseEnter**: Function - function to be called when mouse enters the button area
* **onMouseLeave**: Function - function to be called when mouse leaves the button area
* **onMouseUp**: Function - function to be called when the button is clicked and held elsewhere, then release it above the object.
* **onMouseDown**: Function - function to be called when the button is clicked or then held elsewhere.

### Order: onMouseDown -> onMouseUp -> onClick

## Styling

* **isDisabled**: Bool - determine whether or not the button is disabled.
* **theme**: String['default', 'primary', 'danger'] - bootstrap like theme.
* **href**: String - url redirect after clicked.
