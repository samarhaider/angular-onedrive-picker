/*
 * one-drive-picker
 *
 * Interact with the OneDrive API Picker
 * More information about the OneDrive API can be found at https://dev.onedrive.com/sdk/js-v7/js-picker-open.htm
 *
 * (c) 2016 Samar Haider
 * License: MIT
 */
(function () {
    angular.module('one-drive-picker', [])

            .provider('OneDriveSettings', function () {
                this.clientId = null;
                this.action = 'download';
                this.multiSelect = true;
                this.openInNewWindow = false;
                this.advanced = {};

                /**
                 * Provider factory $get method
                 * Return OneDrive Picker API settings
                 */
                this.$get = ['$window', function ($window) {
                        return {
                            clientId: this.clientId,
                            action: this.action,
                            multiSelect: this.multiSelect,
                            openInNewWindow: this.openInNewWindow,
                            advanced: this.advanced
                        }
                    }];

                /**
                 * Set the API config params using a hash
                 */
                this.configure = function (config) {
                    for (var key in config) {
                        this[key] = config[key];
                    }
                };
            })
            .directive("oneDrivePicker", ["OneDriveSettings",
                function (OneDriveSettings) {
                    return {
                        restrict: "A",
                        scope: {
                            onOnedriveCancel: '&',
                            onOnedriveError: '&',
                            onOnedriveSuccess: '&'
                        },
                        link: function (scope, element, attrs) {
                            function instanciate() {
                                OneDrive.open(dropboxOptions);
                            }
                            var dropboxOptions = {
                                success: onedrivesuccess,
                                cancel: onedrivecancel,
                                error: onedriveerror,
                                clientId: OneDriveSettings.clientId,
                                action: OneDriveSettings.action,
                                multiSelect: OneDriveSettings.multiSelect,
                                openInNewWindow: OneDriveSettings.openInNewWindow,
                                advanced: OneDriveSettings.advanced
                            };
                            function onedrivesuccess(files) {
                                (scope.onOnedriveSuccess || angular.noop)({files: files});
                                scope.$apply();
                            }
                            ;
                            function onedrivecancel() {
                                (scope.onOnedriveCancel || angular.noop)();
                                scope.$apply();
                            }
                            ;
                            function onedriveerror(e) {
                                (scope.onOnedriveError || angular.noop)({e: e});
                                scope.$apply();
                            }
                            ;
                            element.bind("click", function () {
                                instanciate()
                            })
                        }
                    }
                }]);
})();