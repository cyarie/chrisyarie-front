var Dispatch = require("flux").Dispatcher;

// Create a new dispatcher instance
var AppDispatcher = new Dispatcher();

// Method for handling dispatch requests
AppDispatcher.handleAction = function(action) {
    this.dispatch({
        source: "VIEW_ACTION",
        "action": action
    });
};

module.exports = AppDispatcher;