import React from "react";

function EducationForm({ data, onChange, onAdd }) {
  return (
    <div>
      <h3>Education</h3>
      {data.map((edu, index) => (
        <div key={index}>
          <input
            type="text"
            value={edu.school}
            onChange={(e) => onChange(index, "school", e.target.value)}
            placeholder="School"
          />
          <input
            type="text"
            value={edu.degree}
            onChange={(e) => onChange(index, "degree", e.target.value)}
            placeholder="Degree"
          />
          <input
            type="date"
            value={edu.startDate}
            onChange={(e) => onChange(index, "startDate", e.target.value)}
          />
          <input
            type="date"
            value={edu.endDate}
            onChange={(e) => onChange(index, "endDate", e.target.value)}
          />
        </div>
      ))}
      <button onClick={onAdd}>Add Education</button>
    </div>
  );
}

export default EducationForm;
