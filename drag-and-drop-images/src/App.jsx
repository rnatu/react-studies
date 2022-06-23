import { useState } from "react";
import "./App.css";
import logo from "./images/photography-group.png";

function App() {
  const [images, setImages] = useState([]);

  const dragEvents = {
    // onDragEnter: (e) => {
    //   e.preventDefault();
    //   console.log("Entrou");
    // },
    // onDragLeave: (e) => {
    //   e.preventDefault();
    //   console.log("leave");
    // },
    onDragOver: (e) => {
      e.preventDefault();
      // console.log("DragOver");
    },
    //! Para funcionamento do onDrop, a função onDragOver tem que existir
    onDrop: (e) => {
      e.preventDefault();
      // console.log("Drop");
      handlePreviewImages(e);
      // const newImages = Array.from(e.dataTransfer.files);

      // setImages((oldState) => oldState.concat(newImages));
    },
  };

  const handlePreviewImages = (e) => {
    //! Os eventos precisarão estar nessa ordem
    if (e.target.files) {
      //# Evento do file
      const newImages = Array.from(e.target.files);
      setImages((oldState) => oldState.concat(newImages));
      return;
    }
    if (e.dataTransfer.files) {
      //# Evento do drag
      const newImages = Array.from(e.dataTransfer.files);
      setImages((oldState) => oldState.concat(newImages));
      return;
    }
  };

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Logo photography group" />
      </div>

      {/* <div className="fileSection"> */}
      <label className="fileSection" {...dragEvents}>
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="text-3xl text-green-500"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="16 16 12 12 8 16"></polyline>
          <line x1="12" y1="12" x2="12" y2="21"></line>
          <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
          <polyline points="16 16 12 12 8 16"></polyline>
        </svg>
        <span>Arraste a imagem pra cá</span>
        <input type="file" multiple onChange={handlePreviewImages} />
      </label>
      {/* </div> */}

      <div className="preview">
        {images.map((image, index) => (
          <div className="image" key={image.name}>
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
