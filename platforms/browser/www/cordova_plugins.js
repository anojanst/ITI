cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/com.cesidiodibenedetto.filechooser/www/filechooser.js",
        "id": "com.cesidiodibenedetto.filechooser.FileChooser",
        "pluginId": "com.cesidiodibenedetto.filechooser",
        "clobbers": [
            "FileChooser"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "id": "cordova-plugin-network-information.network",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "id": "cordova-plugin-network-information.Connection",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/src/browser/network.js",
        "id": "cordova-plugin-network-information.NetworkInfoProxy",
        "pluginId": "cordova-plugin-network-information",
        "runs": true
    },
    {
        "file": "plugins/phonegap-plugin-local-notification/www/notification.js",
        "id": "phonegap-plugin-local-notification.Notification",
        "pluginId": "phonegap-plugin-local-notification",
        "clobbers": [
            "Notification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-console": "1.0.7",
    "cordova-plugin-statusbar": "1.0.1",
    "com.cesidiodibenedetto.filechooser": "1.0.4",
    "cordova-plugin-crosswalk-webview": "2.3.0",
    "cordova-plugin-geolocation": "3.0.0",
    "cordova-plugin-network-information": "1.3.4",
    "cordova.plugins.diagnostic": "3.8.1",
    "phonegap-plugin-local-notification": "1.0.1"
}
// BOTTOM OF METADATA
});