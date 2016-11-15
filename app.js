var drawer = new tabris.Drawer();
new tabris.PageSelector().appendTo(drawer);
var NewsPage = require("./news");
var SettingsPage = require("./settings");
// You can open a page by calling its open() method.
NewsPage.create().open();
// SettingsPage waits to be opened...
SettingsPage.create(); 
