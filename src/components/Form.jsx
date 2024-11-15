import React from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";

function Form({ data, updatePersonalInfo, updateExperience, addExperience, updateEducation, addEducation }) {
  return (
    <div>
      <h2>Form</h2>
      <PersonalInfoForm data={data.personalInfo} onChange={updatePersonalInfo} />
      <ExperienceForm data={data.experience} onChange={updateExperience} onAdd={addExperience} />
      <EducationForm data={data.education} onChange={updateEducation} onAdd={addEducation} />
    </div>
  );
}

export default Form;
