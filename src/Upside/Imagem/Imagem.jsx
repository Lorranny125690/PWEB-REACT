import { useState, useEffect } from "react";
import api from "../services/api";
import "./imagem.css";

export const Imagem = () => {
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await api.get("/imagens");
        setImages(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Erro ao carregar imagens:", error);
      }
    };

    fetchImages();
  }, []);

  const handleAddImage = async (e) => {
    e.preventDefault();

    if (!newImage) return;

    try {
      console.log(newImage)
      const response = await api.post("/imagens", {
        url_post: newImage,
        id_usuario: localStorage.getItem("usuarioId"),
        titulo: "whalter white gremista",
        categoria: "gremio"
      });

      setImages((prevImages) => [...prevImages, response.data]);
      setNewImage("");
    } catch (error) {
      console.error("Erro ao adicionar imagem:", error.response?.data || error);
    }
  };

  return (
    <div className="image-container">
      <h2>Galeria de Imagens</h2>
      <form onSubmit={handleAddImage}>
        <input
          type="text"
          placeholder="URL da nova imagem"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
        />
        <button type="submit">Adicionar Imagem</button>
      </form>
      <div id="ImageList">
        {images.map(e=>{
            return(
              <img src={e.url_post} className="ImageExample" />
            )
          })}
      </div>
    </div>
  );
};
