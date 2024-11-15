import React from "react";

function PersonalInfoForm({ data, onChange }) {
  return (
    <div>
      <h3>Personal Information</h3>
      <input
        type="text"
        value={data.name}
        onChange={(e) => onChange("name", e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={data.email}
        onChange={(e) => onChange("email", e.target.value)}
        placeholder="Email"
      />
      <input
        type="tel"
        value={data.phone}
        onChange={(e) => onChange("phone", e.target.value)}
        placeholder="Phone"
      />
    </div>
  );
}

export default PersonalInfoForm;
