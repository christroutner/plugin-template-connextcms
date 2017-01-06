# connextcms-plugin-template
This is a template for developing your own plugins for [ConnextCMS](https://github.com/skagitpublishing/ConnextCMS)
and [KeystoneJS](https://github.com/keystonejs/keystone).

This repository is actively being developed. It is not ready for general use yet. 

## Installation
It is assumed that this repository will be cloned into a working copy of [ConnextCMS](http://connextcms.com/). 
You can [clone your own working copy of ConnextCMS](http://connextcms.com/page/clone-your-own) for testing purposes.

## File Structure
    |--keystone
    |  This is where the KeystoneJS specific files live.
    |  |--models
    |  |  Add any KeystoneJS models that your plugin needs to this directory.
    |  |--routes
    |  |  This directory contains the handlers for any new APIs
    |  |  |
    |  |  |--exampleRouter.js
    |  |  |  This file be ready by KeystoneJS and any new API paths with be added the KeystoneJS router.
    |  |  |--exampleplugin.js
    |  |  |  This is a demo/example API handler file.
    |--connextcms
    |  This is where ConnextCMS specific files live.
    |  |--models
    |  |  Contains Backbone.js Models and Collections that will be used by the ConnextCMS Backbone application.
    |  |--views
    |  |  Contains Backbone.js Views that will be added to the ConnextCMS Dashboard.
    |  |--templates
    |  |  Contains HTML template files used by ConnextCMS Backbone.js Views.
    |--myCMS
    |  This directory contains the working code.
    |  |--keystone.js
    |  |  This is the file you execute to get ConnextCMS up and running with the command `node keystone.js`

## Design Overview
ConnextCMS now has hooks to allow the development of plugins. Plugins allow new websites and web apps to
develop their code base totally independent of ConnextCMS's code base. ConnextCMS software and plugin
code can be be updated without any manual editing. This plugin template has been developed for two reasons:

1. To give an example on how JavaScript developers can create their own ConnextCMS/KeystoneJS plugins.

2. To illustrate the various interfaces between KeystoneJS and ConnextCMS. To show where and how the two systems interact and where they are independent.

## KeystoneJS

### Keystone Routes

### Keystone Views

### Keystone Models

## ConnextCMS

### Backbone Views

### Backbone Models & Collections




# Plugin & New Site Considerations
The main things that a plugin or new site will need to modify on a ConnextCMS install is:
* Keystone Misc Files
  * /keystone.js - Probably want to add or modify parts of this file, or at least replace the original.
* KeystoneJS Routes
  * routes/index.js - need to modify or insert instructions into this file
  * routes/api/ - just need to copy files into this directory
  * routes/views/ - just need to copy files into this directory
* KeystoneJS Templates
  * templates/views/index.hbs - Will want to replace this default file.
  * templates/views/dashboard.hbs - Will want to append parts to this file. **Not sure how to do this**
    * *I may be able to create a div at the end of all the view divs. Make sure it's not of class 'container'. I can then create a Backbone view that loads the plugin views into this div.*
  * templates/views/layouts/default.hbs  - Will want to modify parts of this file.
  * templates/views/ - May want to add files to this directory.
* KeystoneJS Models
  * models/ - Will want to add or replace files in this directory.
* Public directory
  * /public/images/ - Will want to add images to this directory
  * /public/styles/ - Will want to add files to this directory
  * /public/js/ - Will want to add files to this directory
  * /public/js/lib/ - Will want to add files to this directory
  * /public/js/cms_common.js - Require.js file. Each plugin can have its own file like this that gets loaded after this one.
* Backbone
  * /public/app/model/ - Will want to add files to this directory
  * /public/app/templates/ - Will want to add or modify files in this directory
  * /public/app/views/ - Will want to add or modify files in this directory
  * /public/app/ - May want to add whole new directories here containing Backbone applications.
  * /public/app/templates/leftMenu.html - Will want to modify this to add new views to the menu. **Not sure how to do this.**
  * /public/app/views/leftMenuView.js - Will want to modify this to add new views to the menu. **Not sure how to do this.**


# New Site vs Plugin
Need to differentiate between Customizing a new site vs plugins:


* A plugin:
  * Will probably want to add an entry to the Left Menu View in the /dashboard.
    * If so, they'll want their own Backbone View and Template
  * Will probably need an API.
  * Will probably need both Backbone and Keystone Models.
  * May want to create a brand new Backbone app.
    * Which would need its own KeystoneJS View and Route
      * =2 new files + modification of routes/index.js file
  * Assumption: No need to modify the main keystone.js file.
  * Will probably want to load additional JavaScript libraries in the /public/js directory.
  * There can be zero to many plugins per site.
  * More appropriate if loaded into a `/private/plugins` directory
  
  
  * Examples of plugins:
    * eCommerce/Product Management
    * User Management
    * Logging work
    * Displaying website analytics summary
      
      
      
* A new site:
  * Will definitely want to replace the default.hbs and index.hbs files.
  * Will definitely want to replace the keystone.js file.
  * Will have its own JavaScript, CSS, and Font files.
  * There will only be one 'site' that may contain many 'plugins'
  * A site is more appropriate for a `./merge` file.
