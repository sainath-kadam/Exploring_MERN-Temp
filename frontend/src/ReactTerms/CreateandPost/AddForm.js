// src/components/AddForm.js

import React, { useState } from 'react';

const AddForm = () => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, department };

    try {
      const response = await fetch('http://localhost:8082/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Data added successfully!', data);
      // If you want to do something with the response from the backend, handle it here.

      // Clear the form after successful submission
      setName('');
      setDepartment('');
    } catch (error) {
      console.error('An error occurred while adding data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <br />
      <label>
        Department:
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddForm;
