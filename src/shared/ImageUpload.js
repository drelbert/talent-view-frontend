import React, { useRef, useState, useEffect } from "react";
import Button from "./Button";
import "./Shared.css";

const ImageUpload = (props) => {
  // update the DOM with useState
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  // const that will store values and establish connection to a DOM element
  const filePickerRef = useRef();

  // handling the state change with the useEffect function
  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }, [file]);

  // function to handle the file once choosen
  const uploadedImageHandler = (event) => {
    let choosenFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length == 1) {
      choosenFile = event.target.files[0];
      setFile(choosenFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    props.onInput(props.id, choosenFile, fileIsValid);
  };

  // function to handle the add image for execution onClick
  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div className="form-control">
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: "none" }}
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={uploadedImageHandler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          {previewUrl && <img src={previewUrl} alt="Preview" />}
          {!previewUrl && <p>Please add an image.</p>}
        </div>
        <Button type="button" onClick={pickImageHandler}>
          ADD IMAGE
        </Button>
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default ImageUpload;
