import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { useState, useEffect } from "react";
// import axios from "axios";

function App() {
  const [resumes, setResumes] = useState([]);
  const [isResumesShowVisible, setIsResumesShowVisible] = useState(false);
  const [currentResume, setCurrentResume] = useState();

  const dummydata = [
    { id: 1, name: "aaa", quantity: 1 },
    { id: 2, name: "bbb", quantity: 2 },
    { id: 3, name: "ccc", quantity: 3 },
  ];
  const handleShowResume = (resume) => {
    console.log("handleShowResume", resume);
    setIsResumesShowVisible(true);
    setCurrentResume(resume);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsResumesShowVisible(false);
  };

  const handleSetResumes = () => {
    // axios.get(`http://localhost:3000/resumes.json`).then((response) => {
    //   console.log("handleSetResumes");
    //   setResumes(response.data);
    // });
    console.log("handleSetResumes");
    setResumes(dummydata);
  };

  useEffect(handleSetResumes, []);

  return (
    <div>
      <Header />
      <Content
        resumes={resumes}
        isResumesShowVisible={isResumesShowVisible}
        currentResume={currentResume}
        handleShowResume={handleShowResume}
        handleClose={handleClose}
      />
      <Footer />
    </div>
  );
}

export default App;
