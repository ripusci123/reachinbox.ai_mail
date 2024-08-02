// src/components/ReplyEditor.js
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ReplyEditor = ({ value, onChange }) => {
  return (
    <div>
      <ReactQuill value={value} onChange={onChange} />
      <button>SAVE</button>
      <button>Variables</button>
    </div>
  );
};

export default ReplyEditor;
