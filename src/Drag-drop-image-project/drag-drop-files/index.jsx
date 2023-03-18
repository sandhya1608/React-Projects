import React, { useRef, useState } from "react";
import "./index.css";
import { FaCloudUploadAlt } from "react-icons/fa";
import { AiFillCloseSquare } from "react-icons/ai";

const DragDropImage = () => {
  const inputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [isDragging, setDragging] = useState(false);

  const handleFile = (files) => {
    setFiles((prevFiles) => [...prevFiles, ...Array.from(files)]);
  }
  const handleOnInputChange = (e) => {
    handleFile(e.target.files);
  };

  const handleOnCrossClick = (index) => {
    const data = [...files];
    data.splice(index, 1);
    setFiles(data);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragging(true);
    } else if (e.type === "dragleave") {
      setDragging(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };

  return (
    <div className="container">
      <div
        className="drag-area"
        style={{background : isDragging ? '#00000057' : ''}}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <FaCloudUploadAlt className="upload-image-icon" size={"3rem"} />
        <h3>
          Drag and Drop to upload the file <br />
          OR
        </h3>
        <button
          className="browse-button"
          onClick={() => inputRef.current.click()}
        >
          Browse File
        </button>
        <input
          type={"file"}
          ref={inputRef}
          className={"drag-drop-input"}
          onChange={handleOnInputChange}
          multiple
          accept=".png, .jpg, .jpeg"  
        />
      </div>
      <div>
        {files.map((file, index) => (
          <div
            key={index.toString()}
            style={{
              margin: "10px",
              display: 'flex',
            }}
          >
            <img
              src={URL.createObjectURL(file)}
              alt={file.name}
              width={"40px"}
              height={"40px"}
            />
            <p className="image-content">{file.name}</p>
            <AiFillCloseSquare
              className="image-cross-icon"
              onClick={() => handleOnCrossClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragDropImage;
