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
    //* Uso se estiver utilizando  (recomendado)
    if (e.target.files) {
      //# 1 - Evento do file
      const files = Array.from(e.target.files);

      files.forEach((file) => {
        const { name, size } = file;

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
          const preview = reader.result;
          const image = {
            name,
            size,
            preview,
          };

          setImages((oldState) => [...oldState, image]);
        };
      });
      return;
    }
    if (e.dataTransfer.files) {
      //# 2 - Evento do drag
      const files = Array.from(e.dataTransfer.files);

      files.forEach((file) => {
        const { name, size } = file;

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
          const preview = reader.result;
          const image = {
            name,
            size,
            preview,
          };

          setImages((oldState) => [...oldState, image]);
        };
      });
    }

    // % Uso se estiver utilizando URL.createObjectURL (não recomendado)
    // if (e.target.files) {
    //   //# 1 - Evento do file
    //   const newImages = Array.from(e.target.files);
    //   setImages((oldState) => oldState.concat(newImages));
    //   return;
    // }
    // if (e.dataTransfer.files) {
    //   //# 2 - Evento do drag
    //   const newImages = Array.from(e.dataTransfer.files);
    //   setImages((oldState) => oldState.concat(newImages));
    //   return;
    // }
  };

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Logo photography group" />
      </div>

      <div>
        <label className="fileSection" {...dragEvents}>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
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
      </div>

      <div className="preview">
        {images.map((image, index) => (
          <div className="image" key={image.name + index}>
            {/* //# Usando fileReader  */}
            <img src={image.preview} alt="" />

            {/* //% URL.createObjectURL não é uma boa opção pois torna o carregamento das imagens um pouco lento  */}
            {/* <img src={URL.createObjectURL(image)} alt="" /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
