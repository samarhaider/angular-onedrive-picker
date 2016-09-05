'use strict';

angular.module('OnedriveControllers', ['one-drive-picker'])

        .config(['OneDriveSettingsProvider', function (OneDriveSettingsProvider) {

                // Configure the options
                OneDriveSettingsProvider.configure({
                    clientId: '3752ba28-2b80-4dd4-8f84-a8b6b795e203', // One Drive Id 32 chars
                    action: 'download', // "share | download | query
                    openInNewWindow: true,
                    multiSelect: true,//one drive multiselect
                    advanced: {}
                });
            }])

        .controller('OneDriveCtrl', ['$scope', function ($scope) {
//               Onedrive
                $scope.onedrive_files = [];
                $scope.OneDrivedriveSuccess = function (files) {
                    angular.forEach(files.value, function (file, index) {
                        $scope.onedrive_files.push(file);
                    });
                }
                $scope.onOnedriveCancel = function () {
                    console.log('Onedrive close/cancel!');
                }
                $scope.remove = function (idx) {
                    $scope.onedrive_files.splice(idx, 1);
                }

            }]);