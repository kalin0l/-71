import { useEffect, useState } from "react";
import "./App.css";
import Document from "./Document";

function App() {
  const [content,setContent] = useState('');
 
  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch('https://jaspervdj.be/lorem-markdownum/markdown.txt');
      const data = await response.text();
      setContent(data);
      
    }
    fetchData();
  },[])
  const title = 'Terms and Conditions'
  return (
    <div className="App">
      <Document title={title} content={content}/>
    </div>
  );
}

export default App;
