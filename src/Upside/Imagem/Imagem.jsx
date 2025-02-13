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
  // const handleDeleteImage = async(e)=>{
  //   e.preventDefault();

  //   let id = e.id;

  //   try{
  //     console.log(id);
  //     const response = await api.delete(`/imagens/${id}`)
  //     console.log(response.data)
  //     alert("Deletado com sucesso")
  //   }catch(err){
  //     console.error("Deletar imagem")
  //   }
  // }

  // const handleUpdateImage = async(e)=>{
  //   e.preventDefault();
  //   let id = e.id;

  //   try{
  //     const data = {
  //       titulo:"",
  //       categoria:""
  //     }
  //     data.categoria = prompt("Insira a nova categoria");
  //     data.titulo = prompt("Insira a nova categoria");
  //     console.log(id);
  //     const response = await api.put(`/imagens/${id}`,data)
  //     console.log(response.data)
  //     alert("Deletado com sucesso")
  //   }catch(err){
  //     console.error("Deletar imagem")
  //   }
  // }


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
    <div className="image-container6">
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
              <div className="ImageExampleContainer">
                <img src={e.url_post} className="ImageExample"  />
                <h4>{e.titulo}</h4>
                <div>
                  <button className="deleteButton" onClick={async()=>{
                  let id = e.id;

                  try{
                    console.log(id);
                    const response = await api.delete(`/imagens/${id}`)
                    console.log(response.data)
                    alert("Deletado com sucesso")
                  }catch(err){
                    console.error("Deletar imagem")
                  }
                }}>Deletar</button>

                <button className="editButton" 
                  onClick={async()=>{
                  let id = e.id;

                  try{
                    const data = {
                      url_post:e.url_post,
                      titulo:"",
                      categoria:""
                    }
                    data.categoria = prompt("Insira a nova categoria");
                    data.titulo = prompt("Insira a nova categoria");
                    console.log(id);
                    const response = await api.put(`/imagens/${id}`,data)
                    console.log(response.data)
                    alert("Atualizado com sucesso")
                  }catch(err){
                    console.error("Erro ao atualizar imagem:"+err)
                  }
                }}>Editar</button>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  );
};
