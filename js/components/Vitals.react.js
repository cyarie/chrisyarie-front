var React = require("react");

var ResumeVitals = React.createClass({
    render: function() {
        var self = this,
            vitals = this.props.vitals;

        return (
            <div className="resume-vitals">
                <h1>{vitals.name}</h1>
                <ul className="list-inline">
                    <li className="location">{vitals.location}</li>
                    <li className="glyphicon"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></li>
                    <li className="email"><a href={vitals.emailLink} target="_top">{vitals.email}</a></li>
                    <li className="glyphicon"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></li>
                    <li className="git"><a href={vitals.gitLink} target="_blank">{vitals.git}</a></li>
                </ul>
            </div>
        );
    }
});

module.exports = ResumeVitals;