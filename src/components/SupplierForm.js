import React, { useState } from "react";
//import ''

function SupplierForm({ onSubmit }) {
  const [supplierName, setSupplierName] = useState("");
  const [companyName, setCompnayName] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ supplierName, companyName, country, state, city, email });
  };

  return (
    <form onSubmit={handleSubmit}>
    <h3>Supplier Details</h3>
      <div className="form-row">
        <div className="form-group">
          <label>Supplier Name:</label>
          <input
            type="text"
            placeholder="Enter supplier name"
            value={supplierName}
            onChange={(e) => setSupplierName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>company Name:</label>
          <input
            type="text"
            placeholder="Enter company name"
            value={companyName}
            onChange={(e) => setCompnayName(e.target.value)}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Country:</label>
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="">---Select country---</option>
            <option>India</option>
          </select>
        </div>
        <div className="form-group">
          <label>State:</label>
          <select value={state} onChange={(e) => setState(e.target.value)}>
            <option value="">---Select state---</option>
            <option>MH</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>City:</label>
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="">---Select city---</option>
            <option>Pune</option>
          </select>
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default SupplierForm;
