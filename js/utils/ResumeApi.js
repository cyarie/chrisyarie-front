var ResumeActions = require("../actions/ResumeActions.js");

module.exports = {
    getResumeData: function() {
        var dataUrl = "http://localhost:63342/chrisyarie.com/json/resume.json";
        var req = new XMLHttpRequest();
        req.open("GET", dataUrl, false);
        req.send(null);
        if (req.status == 200) {
            console.log("Received a request for data");
            ResumeActions.receiveResumeData(JSON.parse(req.responseText));
        } else {
            console.log("ERROR");
        }
    }
};