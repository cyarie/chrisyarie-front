require("bootstrap");
window.React = require("react");

var ResumeApi = require("./utils/ResumeApi.js");
var ResumeApp = require("./components/Resume.react");

// Load ye olde data up
ResumeApi.getResumeData();

React.render(
    <ResumeApp />,
    document.getElementById("resume")
);