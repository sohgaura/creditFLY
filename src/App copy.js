// import logo from './logo.svg';
// import './App.css';
// import React, { useState, useEffect } from 'react';
// import { getDocument } from 'pdfjs-dist';


// //import Component from './Component';
// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// // function App() {
// //   const [response, setResponse] = useState(null);
// //   const [inputValue, setInputValue] = useState('');

// //   const handleButtonClick = () => {
// //     // Call the App function
// //     // MyComponent(inputValue).then((result) => {
// //     //   setResponse(result.response.text());

// //       const genAI = new GoogleGenerativeAI("AIzaSyDnfzPMGwfQqQWWXfrRkHXPhkEbtSxEtCg");
// //       const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
// //       //const prompt = a ;
    
// //       model.generateContent(inputValue)
// //         .then((result) => {
// //           setResponse(result.response.text());
// //         })
// //         .catch((error) => {
// //           console.error('Error:', error);
// //         });
 

// //     // }).catch((error) => {
// //     //   console.error('Error:', error);
// //     // });
// //   };
// // //chatbot
// //   return (
// //     <div>
// //     <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
 
// //       <button onClick={handleButtonClick}>Call Gemini Model</button>
// //       {response ? (
// //         <>
// //           <p>Response from Gemini model:</p>
// //           <pre>{response}</pre>
// //         </>
// //       ) : (
// //         <p>Loading response...</p>
// //       )}
// //     </div>
// //   );
// // }

// // function MyComponent(prompt) {

// //   const [response, setResponse] = useState(null);
  
// //   useEffect(() => {
// //     const genAI = new GoogleGenerativeAI("AIzaSyDnfzPMGwfQqQWWXfrRkHXPhkEbtSxEtCg");
// //     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
// //     //const prompt = a ;
  
// //     model.generateContent(prompt)
// //       .then((result) => {
// //         setResponse(result.response.text());
// //       })
// //       .catch((error) => {
// //         console.error('Error:', error);
// //       });
// //   }, [prompt]);
  
// //   return response;
// //   }



// // export default App;

// /**
// function FileSelector() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [response, setResponse] = useState(null);

//   useEffect(() => {
//     if (selectedFile) {
//       const genAI = new GoogleGenerativeAI('AIzaSyDnfzPMGwfQqQWWXfrRkHXPhkEbtSxEtCg');
//       const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

//       const prompt = 'Analyze this file and share the information extracted in tabular format, is it a man or woman in photograph. how does the person looks ? can you compare it with any celebrity'; // Replace with your desired prompt

//       // Read the file contents
//       const fileReader = new FileReader();
//       fileReader.onload = () => {
//         model.generateContent(prompt + fileReader.result)
//           .then((result) => {
//             setResponse(result.response.text());
//           })
//           .catch((error) => {
//             console.error('Error:', error);
//           });
//       };
//       fileReader.readAsText(selectedFile);
//     }
//   }, [selectedFile]);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

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
// }

// export default FileSelector;
//  */




// function FileSelector() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [response, setResponse] = useState(null);

//   useEffect(() => {
//     if (selectedFile) {
//       const genAI = new GoogleGenerativeAI('AIzaSyDnfzPMGwfQqQWWXfrRkHXPhkEbtSxEtCg');
//       const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

//       const prompt = 'Analyze this file and share the information extracted in tabular format, is it a man or woman in photograph. how does the person looks ? can you compare it with any celebrity'; // Replace with your desired prompt

//       // Read the file contents
//       const fileReader = new FileReader();
//       fileReader.onload = () => {
//         // const typedarray1 = new Uint8Array(fileReader.result.result);
//         const pdf =  getDocument({
//            workerSrc: '../../node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs',
//            url:
//         }).promise;
//         const numPages = pdf.numPages;

//         let text = '';
//         for (let i = 1; i <= numPages; i++) {
//           const page =  pdf.getPage(i);
//           const content =  page.getTextContent();
//           const pageText = content.items.map(item => item.str).join(' ');
//           text += pageText + '\n';
//         }



//         model.generateContent(prompt + text)
//           .then((result) => {
//             setResponse(result.response.text());
//           })
//           .catch((error) => {
//             console.error('Error:', error);
//           });
//       };
//       fileReader.readAsText(selectedFile);
//     }
//   }, [selectedFile]);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

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
// }

// export default FileSelector;




/*
function FileSelector() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (selectedFile) {
      const genAI = new GoogleGenerativeAI('AIzaSyDnfzPMGwfQqQWWXfrRkHXPhkEbtSxEtCg');
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      const prompt = 'Analyze this file and share the information extracted in tabular format, is it a man or woman in photograph. how does the person looks ? can you compare it with any celebrity'; // Replace with your desired prompt

      // Read the file contents
      const fileReader = new FileReader();
      fileReader.onload = async() => {
        // const data =  await (fileReader.result.arrayBuffer());
        const data =  new Uint8Array (fileReader.result);
        const pdf =  await getDocument({
          data,
          workerSrc: './node_modules/react-pdf/node_modules/pdfjs-dist/build/pdf.worker.mjs' // Relative path
        }).promise;
        const numPages = pdf.numPages;

        let text = '';
        for (let i = 1; i <= numPages; i++) {
          const page =  pdf.getPage(i);
          const content =  page.getTextContent();
          const pageText = content.items.map(item => item.str).join(' ');
          text += pageText + '\n';
        }



        model.generateContent(prompt + text)
          .then((result) => {
            setResponse(result.response.text());
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };
      fileReader.readAsText(selectedFile);
    }
  }, [selectedFile]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange}   
 />
      {response ? (
        <pre>{response}</pre>
      ) : (
        <p>No file selected or analysis is in progress</p>
      )}
    </div>
  );
}

export default FileSelector; 
*/