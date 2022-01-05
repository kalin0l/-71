import { useEffect, useState } from "react";
import "./App.css";
import Document from "./Document";

function App() {
  const [content,setContent] = useState('');
  const fetchData = async() => {
    const res = await fetch('https://jaspervdj.be/lorem-markdownum/markdown.txt');
    const data = await res.text();
    setContent(data);
    
  }
  useEffect(() => {
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
