# MDButton

[![Build
Status](https://travis-ci.org/Madadata/MDButton.svg?branch=master)](https://travis-ci.org/Madadata/MDButton)
[![Dependency Status](https://dependencyci.com/github/Madadata/MDButton/badge)](https://dependencyci.com/github/Madadata/MDButton)
[![GitHub version](https://badge.fury.io/gh/Madadata%2FMDButton.svg)](https://badge.fury.io/gh/Madadata%2FMDButton)
[![GitHub issues](https://img.shields.io/github/issues/Madadata/MDButton.svg)](https://github.com/Madadata/MDButton/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Madadata/MDButton/master/LICENSE)

[![NPM](https://nodei.co/npm/mdbutton.png)](https://nodei.co/npm/mdbutton/)

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
