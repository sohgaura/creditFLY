// import logo from './logo.svg';
// import './App.css';
// import React, { useState, useEffect } from 'react';
// // import { getDocument } from 'pdfjs-dist';
// // import { Document, Page, getDocument } from 'react-pdf';
// // import { Document, Page, getDocument } from 'pdfjs-dist';
// // getDocument.GlobalWorkerOptions.workerSrc = "../../node_modules/pdfjs-dist/build/pdf.worker.mjs"; 

// // import { PDFViewer } from 'react-pdf-viewer';
// // import 'react-pdf-viewer/styles/index.css';




import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import FileUploadScreen from './FileUploadScreen';

function App() {
  // const navigate = useNavigate();
  // const [userData, setUserData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   mobileNumber: '',
  // });

  // const handleRegistration = (formData) => {
  //   // Handle registration logic here (e.g., store data in database)
  //   setUserData(formData);
  // };

  return (
    <div className="form-container">
      
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

    <h1>Welcome to CreditFLY</h1>
    <Router>
      <nav>
        <ul>
          <li><Link to="/registration">Registration</Link></li>
          <li><Link to="/file-upload">Fileupload</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/file-upload" element={<FileUploadScreen />} />
      </Routes>
    </Router>
    </div>
  );
}

{/* <Routes>
<Route path="/" element={<RegistrationForm onRegister={handleRegistration} navigate={navigate} />} />
<Route path="/file-upload" element={<FileUploadScreen userData={userData} />} />
</Routes>
</Router> */}

export default App;
