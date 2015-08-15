var React = require("react");

var ResumeExperience = React.createClass({
    render: function() {
        var self = this,
            experience = this.props.experience;

        return (
            <div className="resume-experience">
                <h3>Experience</h3>
                <ul>
                    {Object.keys(experience).map(function(job) {
                        return (
                            <li key={job}>
                                <h4 className="title">{experience[job].title}</h4>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
});

module.exports = ResumeExperience;