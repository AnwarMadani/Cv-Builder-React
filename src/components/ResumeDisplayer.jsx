import React from "react";

function ResumeDisplayer({ data }) {
  return (
    <div className="resume-displayer">
      <div className="personal-info">
        <h2>Resume</h2>
        <h3>Personal Information</h3>
        <p>👤 {data.personalInfo.name}</p>
        <p>📧 {data.personalInfo.email}</p>
        <p>📞 {data.personalInfo.phone}</p>
      </div>

      <div className="experience-section">
        <h3>Experience</h3>
        {data.experience.map((exp, index) => (
            <div key={index} className="experience-element">
            <div className="right">
              <p>{exp.company}</p>
              <p>{exp.position}</p>
            </div>
            <div className="left">
            {exp.startDate} {exp.endDate && '-'} {exp.endDate}
            </div>
            </div>
        ))}
      </div>

      <div className="education-section">
      <h3>Education</h3>
        {data.education.map((edu, index) => (
            <div key={index} className="education-element">
            <div className="r">
              <p>{edu.school}</p>
              <p>{edu.degree}</p>
            </div>
            <div className="left">
            {edu.startDate} {edu.endDate && '-'} {edu.endDate}
            </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default ResumeDisplayer;
