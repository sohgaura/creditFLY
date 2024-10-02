import React, { useState, useEffect } from 'react';
//import { PDFViewer } from 'react-pdf-viewer';
// import 'react-pdf-viewer/styles/index.css';
const { GoogleGenerativeAI } = require("@google/generative-ai");
function FileUploadScreen({ userData }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [response, setResponse] = useState(null);
 
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    // Handle file upload and analysis here
//   useEffect(() => {
    if (selectedFile) {
      const genAI = new GoogleGenerativeAI('api key');
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    //   const prompt = 'Analyze this file and share the information extracted in tabular format, is it a man or woman in photograph. how does the person looks ? can you compare it with any celebrity'; // Replace with your desired prompt
    const prompt = 'limit your responce to maximum 30 words and ensure consistent response wording. The following file represents the financial cash flow of a specific business account , Do a credit risk analysis for the account holder and suggest maximum loan amount that can be lended to this business for short term 1 to 3 months give reason for the deciding of amount for each tenure. Give the output in the format "Mr. <Name of the account holder> ! move to new line with statement We Promise you below loan Amount : move to new line and line one calculated amount Rupees for calculated tenure ; similarly line 2 and line 3 for three tenure options 1 month two month and three months in three separate lines; "  you must give a credit recommendation and be consistent in your responses for same data and also suggest five different Indian government schemes which target the account holder business type; format of scheme should start like - You are in <type of business> business ,Start new line ;  your business can befefit from following GOI schemes and put each scheme names in new separate line,  . the file starts now:'; // Replace with your desired prompt

    // console.log('message : ', selectedFile + prompt )
    //   model.generateContent(prompt + selectedFile)
    //   .then((result) => {
    //     console.log('inside model call :'+result);
    //     setResponse(result.response.text());
    //   })

      // Read the file contents
      const fileReader = new FileReader();
      fileReader.onload = () => {
        model.generateContent(prompt + fileReader.result)
          .then((result) => {
            setResponse(result.response.text());
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };
      fileReader.readAsText(selectedFile);
    }
//   }, [selectedFile]);

  };

  return (
    <div className="form-container">
    <div className="form-group">
      <label>Upload Document: </label><label> </label>
      <input type="file" onChange={handleFileChange} />
      <br/>
      <br/>
    </div>
         
    <button onClick={handleSubmit}>Calculate Loan Eligibility</button>
    <br/>
    <br/>
    <div className="form-group">
    {response ? (
        
        <pre>{response}</pre>
      ) : (
        <p>No file selected or analysis is in progress</p>
      )}
    </div>
    </div>
  );
}
{/* <h1>Welcome, {userData.firstName} {userData.lastName}!</h1>
<p>Mobile Number: {userData.mobileNumber}</p> */}
export default FileUploadScreen;