cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.geolocation",
    "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.PositionError",
    "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
    "pluginId": "cordova-plugin-geolocation",
    "runs": true
  },
  {
    "id": "cordova-plugin-network-information.network",
    "file": "plugins/cordova-plugin-network-information/www/network.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "navigator.connection",
      "navigator.network.connection"
    ]
  },
  {
    "id": "cordova-plugin-network-information.Connection",
    "file": "plugins/cordova-plugin-network-information/www/Connection.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "Connection"
    ]
  },
  {
    "id": "cordova.plugins.diagnostic.Diagnostic",
    "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.js",
    "pluginId": "cordova.plugins.diagnostic",
    "clobbers": [
      "cordova.plugins.diagnostic"
    ]
  },
  {
    "id": "com.cesidiodibenedetto.filechooser.FileChooser",
    "file": "plugins/com.cesidiodibenedetto.filechooser/www/filechooser.js",
    "pluginId": "com.cesidiodibenedetto.filechooser",
    "clobbers": [
      "FileChooser"
    ]
  },
  {
    "id": "phonegap-plugin-local-notification.Notification",
    "file": "plugins/phonegap-plugin-local-notification/www/notification.js",
    "pluginId": "phonegap-plugin-local-notification",
    "clobbers": [
      "Notification"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-console": "1.0.7",
  "cordova-plugin-statusbar": "1.0.1",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-geolocation": "3.0.0",
  "cordova-plugin-crosswalk-webview": "2.3.0",
  "cordova-plugin-network-information": "1.3.4",
  "cordova.plugins.diagnostic": "3.8.1",
  "com.cesidiodibenedetto.filechooser": "1.0.4",
  "phonegap-plugin-local-notification": "1.0.1"
};
// BOTTOM OF METADATA
});