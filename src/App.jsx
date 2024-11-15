import React, { useState } from "react";
import Form from "./components/Form";
import ResumeDisplayer from "./components/ResumeDisplayer";
import "./App.css";

function App() {
  const [cvData, setCvData] = useState({
    personalInfo: { name: "", email: "", phone: "" },
    experience: [{ company: "", position: "", startDate: "", endDate: "" }],
    education: [{ school: "", degree: "", startDate: "", endDate: "" }],
  });

  // Update personal information
  const updatePersonalInfo = (field, value) => {
    setCvData((prevData) => ({
      ...prevData,
      personalInfo: { ...prevData.personalInfo, [field]: value },
    }));
  };

  // Update an individual experience entry
  const updateExperience = (index, field, value) => {
    setCvData((prevData) => ({
      ...prevData,
      experience: prevData.experience.map((exp, i) =>
        i === index ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  // Add a new experience entry
  const addExperience = () => {
    setCvData((prevData) => ({
      ...prevData,
      experience: [
        ...prevData.experience,
        { company: "", position: "", startDate: "", endDate: "" },
      ],
    }));
  };

  // Update an individual education entry
  const updateEducation = (index, field, value) => {
    setCvData((prevData) => ({
      ...prevData,
      education: prevData.education.map((edu, i) =>
        i === index ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  // Add a new education entry
  const addEducation = () => {
    setCvData((prevData) => ({
      ...prevData,
      education: [
        ...prevData.education,
        { school: "", degree: "", startDate: "", endDate: "" },
      ],
    }));
  };

  return (
    <div>
      <h1>CV Builder</h1>
      <div className="container">
        <div className="sidebar">
          <Form
            data={cvData}
            updatePersonalInfo={updatePersonalInfo}
            updateExperience={updateExperience}
            addExperience={addExperience}
            updateEducation={updateEducation}
            addEducation={addEducation}
          />
        </div>
        <div className="content">
          <div className="resume">
            <ResumeDisplayer data={cvData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
