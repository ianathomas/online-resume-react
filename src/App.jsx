import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { useState, useEffect } from "react";
// import axios from "axios";

function App() {
  const [resumes, setResumes] = useState([]);

  const dummydata = [
    { id: 1, name: "aaa", quantity: 1 },
    { id: 2, name: "bbb", quantity: 2 },
    { id: 3, name: "ccc", quantity: 3 },
  ];

  const handleSetResumes = () => {
    // axios.get(`http://localhost:3000`).then((response) => {
    //   console.log("handleSetResumes");
    //   setResumes(response.data);
    // })
    console.log("handleSetResumes");
    setResumes(dummydata);
  };

  useEffect(handleSetResumes);

  return (
    <div>
      <Header />
      <Content resumes={resumes} />
      <Footer />
    </div>
  );
}

export default App;
