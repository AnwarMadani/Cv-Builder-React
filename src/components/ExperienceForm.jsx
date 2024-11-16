import React from "react";

function ExperienceForm({ data, onChange, onAdd }) {
  return (
    <div>
      <h3>Experience</h3>
      {data.map((exp, index) => (
        <div key={index}>
          <input
            type="text"
            value={exp.company}
            onChange={(e) => onChange(index, "company", e.target.value)}
            placeholder="Company"
          />
          <input
            type="text"
            value={exp.position}
            onChange={(e) => onChange(index, "position", e.target.value)}
            placeholder="Position"
          />
          <input
            type="date"
            value={exp.startDate}
            onChange={(e) => onChange(index, "startDate", e.target.value.split('-').reverse().join('-'))}
          />
          <input
            type="date"
            value={exp.endDate}
            onChange={(e) => onChange(index, "endDate", e.target.value.split('-').reverse().join('-'))}
          />
        </div>
      ))}
      <button onClick={onAdd}>Add Experience</button>
    </div>
  );
}

export default ExperienceForm;
