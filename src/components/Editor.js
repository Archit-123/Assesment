import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

export default function Editor() {
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };
  return (
    <div>
      <h1>WYSIWYG Editor</h1>
      <ReactQuill theme="snow" value={content} onChange={handleChange} />
      <div>
        <h2>Editor Output:</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}
