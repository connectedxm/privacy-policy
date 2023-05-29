import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch("/privacy.md")
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);

  return (
    <div
      className="App"
      style={{
        maxWidth: "600px",
        marginLeft: "auto",
        marginRight: "auto",
        fontFamily: "sans-serif",
      }}
    >
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
}

export default App;
