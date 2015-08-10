var AppDispatcher = require("../dispatcher/AppDispatcher");
var EventEmitter = require("events").EventEmitter;
var ResumeConstants = require("../constants/ResumeConstants");
var _ = require("underscore");

// Define our initial data
var _resume = {};

function loadResumeData(data) {
    _resume = data.data[0];
}

var ResumeStore = _.extend({}, EventEmitter.prototype, {
    getResume: function() {
        return _resume;
    },

    emitChange: function() {
        this.emit("change");
    },

    addChangeListener: function(callback) {
        this.on("change", callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener("change", callback);
    }
});

AppDispatcher.register(function(payload) {
    var action = payload.action;
    var text;

    switch(action.actionType) {
        case ResumeConstants.RECEIVE_DATA:
            loadResumeData(action.data);
            break;
        default:
            return true;
    }

    ResumeStore.emitChange();

    return true;
});

module.exports = ResumeStore;