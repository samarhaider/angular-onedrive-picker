one-drive-picker
=====================

Angular directive that interact with the OneDrive Picker API :
* [OneDrive Picker SDK Docs](https://dev.onedrive.com/sdk/js-v7/js-picker-open.htm)

**Requirements:** AngularJS 1.4+

# [Demo](https://samarhaider.github.io/angular-onedrive-picker/demo/)


# Installation

1. Using Bower (recommended)

  ```Bash
  bower install angular-onedrive-picker --save
  ```
    OR 

  ```Bash
  npm install angular-onedrive-picker --save
  ```

2. Manually

Download [https://github.com/samarhaider/angular-one-drive-picker/archive/master.zip](https://github.com/samarhaider/angular-one-drive-picker/archive/master.zip)


# Usage

1. Include OneDrive refefence to SDK

  ```html
  <script type="text/javascript" src="https://js.live.net/v7.0/OneDrive.js"></script>
  ```

2. Include the OneDrive Picker as a dependency for your app

  ```js
  angular.module('myApp', ['one-drive-picker'])
  ```

3. Configure the plugin (see below **configuration** section)

4. Create a scope to handle files that will be selected

  ```js
  angular.module('myApp', ['one-drive-picker'])

  .controller('ExampleCtrl', ['$scope', function ($scope) {
        $scope.OneDrivedriveSuccess = function (files) {
            console.log(files);
        }

        $scope.onOnedriveCancel = function () {
            console.log('Onedrive close/cancel!');
        }
  }]);
  ```

5. Add the directive to your HTML element

  ```html
  <a href="javascript:;"  href="javascript:;" one-drive-picker on-onedrive-success="OneDrivedriveSuccess(files)" on-onedrive-error="onOnedriveError()" on-onedrive-cancel="onOnedriveCancel()">Open my OneDrive Drive</a>
  ```

6. That's it, you're done!


# Configuration

In order to work, OneDrive Picker needs to connect to the OneDrive API using an application client ID and redirect URI. For more information on how to create an application, please refer to [https://apps.dev.microsoft.com/#/appList](https://apps.dev.microsoft.com/#/appList). To do so, you'll need to configure the app.


### Using configure(options)

```js
angular.module('myApp', ['one-drive-picker'])

.config(['OneDriveSettingsProvider', function (OneDriveSettingsProvider) {

 // Configure the options
    OneDriveSettingsProvider.configure({
        clientId: 'YOUR_CLIENT_ID', // One Drive Id 32 chars
        action: 'download', // "share | download | query
        openInNewWindow: true,
        multiSelect: true,//one drive multiselect
        advanced: {}
    });
}])
```

# Callbacks

The directive provide you 3 callbacks that you can use in order to work with the Picker.

### success, error and cancel

This callback is triggered after you select files and click on the `select` button from the Picker.

```js
angular.module('myApp', ['angular-one-drive-picker'])

.controller('ExampleCtrl', ['$scope', function ($scope) {
        $scope.OneDrivedriveSuccess = function (files) {
            // data contains the list of OneDrive files.
        }

        $scope.onOnedriveCancel = function () {
            // after modal is closed with cancel button you can do something.
        }

        $scope.onOnedriveError = function () {
            // when error occured.
        }
}]);
```

```html
<a href="javascript:;"  href="javascript:;" one-drive-picker on-onedrive-success="OneDrivedriveSuccess(files)" on-onedrive-error="onOnedriveError()" on-onedrive-cancel="onOnedriveCancel()">Open my OneDrive Drive</a>
```

# License
Licensed under the MIT license
