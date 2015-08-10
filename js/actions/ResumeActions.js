var AppDispatcher = require("../dispatcher/AppDispatcher");
var ResumeConstants = require("../constants/ResumeConstants");

var ResumeActions = {
    recieveData = function(data) {
        AppDispatcher.handleAction({
            actionType: ResumeConstants.RECEIVE_DATA,
            data: data
        })
    }
};

module.exports = ResumeActions;