import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
// import { getDocument } from 'pdfjs-dist';
// import { Document, Page, getDocument } from 'react-pdf';
// import { Document, Page, getDocument } from 'pdfjs-dist';
// getDocument.GlobalWorkerOptions.workerSrc = "../../node_modules/pdfjs-dist/build/pdf.worker.mjs"; 

// import { PDFViewer } from 'react-pdf-viewer';
// import 'react-pdf-viewer/styles/index.css';

const { GoogleGenerativeAI } = require("@google/generative-ai");





function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    panNumber: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  // useEffect(() => {
    const handleAnalyze = async () => {
    // if (selectedFile) {
      if (formData.file) {
      const genAI = new GoogleGenerativeAI('AIzaSyDnfzPMGwfQqQWWXfrRkHXPhkEbtSxEtCg---');
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      const prompt = 'limit your responce to maximum 30 words considering all lines and ensure consistent response wording. The following file represents the financial cash flow of a business account in last 1 month, Do a credit risk analysis for the account holder and suggest maximum loan amount that can be lended to this business for short term 1 to 3 months give reason for the deciding of amount for each tenure. Give the output in the format "Mr. <Name of the account holder> You can apply for loan Amount : line one calculated amount Rupees for calculated tenure ; similarly line 2 and line 3; give three tenure options 1 month two month and three months in three lines "  you must give a credit recommendation ,  . the file starts now:'; // Replace with your desired prompt

      // Read the file contents
      const fileReader = new FileReader();
      fileReader.onerror = (error) => {
        console.error('Error reading file:', error);
        // Handle the error (e.g., display an error message)
      };
  
      await new Promise((resolve) => {
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.readAsText(selectedFile);
      });
      const response = await model.generateContent(prompt + fileReader.result);
      setResponse(response.response.text());
      // fileReader.onload = () => {
      //   model.generateContent(prompt + fileReader.result)
      //     .then((result) => {
      //       setResponse(result.response.text());
      //     })
      //     .catch((error) => {
      //       console.error('Error:', error);
      //     });
      // };
      // fileReader.readAsText(selectedFile);
    }else {
      console.error('No file selected.');
    }
  };
  // }, [selectedFile]);

  const handleSubmit = async () => {
    // Store data in local SQLite database
    // ... (code to store data in database)

    // Call Gemini GenAI API for analysis
    // ... (code to call Gemini API and process response)
  };

  // const handleAnalyze = async () => {
  //   // Call Gemini GenAI API for analysis
  //   // ... (code to call Gemini API and process response)
  // };

  const handleFileChange = (e)  => {
     setFormData((prevFormData) => ({
       ...prevFormData,
       file: e.target.files[0],
     }));
   };
  
  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };


  return (
    <div className="form-container">
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}   
 />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text"   
 name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Mobile Number:</label>
          <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
        </div>
        <div className="form-group">   

          <input type="file" onChange={handleFileChange} />
        </div>
      {/* <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}   
 />
        <br />
        <label width= "100">Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        <br />
        <label width= "100">Mobile Number:</label>
        <input type="text" name="panNumber" value={formData.panNumber} onChange={handleChange} />
        <br />
        <label>File Upload:</label>
        <input type="file" onChange={handleFileChange} /> */}
        <br /><br /><br />
        <button type="submit">Calulate my Load Eligibility</button>
        <br /> <br />
        <button onClick={handleAnalyze}>Analyze</button>
      </form>
       {response ? (
        <pre>{response}</pre>
      ) : (
        <p>No file selected or analysis is in progress</p>
      )}
    </div>
  );

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange}   
//  />
//       {response ? (
//         <pre>{response}</pre>
//       ) : (
//         <p>No file selected or analysis is in progress</p>
//       )}
//     </div>
//   );
}

export default App;
 
