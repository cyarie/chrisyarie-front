var React = require("react");
var ResumeStore = require("../stores/ResumeStore");
var ResumeEducation = require("./Education.react");
var ResumeExperience = require("./Experience.react");
var ResumeSkills = require("./Skills.react");
var ResumeVitals = require("./Vitals.react");

function getResumeState() {
    return {
        resume: ResumeStore.getResume(),
        vitals: ResumeStore.getVitals(),
        experience: ResumeStore.getExperience(),
        skills: ResumeStore.getSkills()
    };
}

var ResumeApp = React.createClass({
    getInitialState: function() {
        return getResumeState();
    },

    componentDidMount: function() {
        ResumeStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        ResumeStore.removeChangeListener(this._onChange);
    },

    render: function() {
        return (
            <div className="resume-app">
                <ResumeVitals vitals={this.state.vitals} />
                <ResumeExperience experience={this.state.experience} />
            </div>
        );
    },

    _onChange: function() {
        this.setState(getResumeState());
    }
});

module.exports = ResumeApp;