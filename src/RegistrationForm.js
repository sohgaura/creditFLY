import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function RegistrationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // onRegister(formData);
    // setFormData({
    //   firstName: formData.firstName,
    //   lastName: formData.firstName,
    //   mobileNumber: formData.firstName,
    // });
    console.log('Registration data:', formData);

    // Navigate to file upload screen
    navigate('/file-upload');
  };

  return (
    <div className="form-container">
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        <br />
        </div>
        <div className="form-group">
        <label>Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        <br />
        </div>
        <div className="form-group">
        <label>Mobile Number:</label>
        <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
        <br />
        </div><br/>
        <div className="form-group">
        <button type="submit">SignUp</button>
        </div><br/><div className="form-group">
        <button type="submit">SignUp with Google</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;