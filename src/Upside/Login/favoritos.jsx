import { useState, useEffect } from "react";
import api from "../services/api";

export const Favoritos = ({ userId }) => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const fetchFavoritos = async () => {
      try {
        const response = await api.get(`/favoritos/${userId}`);
        setFavoritos(response.data);
      } catch (error) {
        console.error("Erro ao buscar favoritos:", error);
      }
    };
    if (userId) {
      fetchFavoritos();
    }
  }, [userId]);

  const handleAddFavorito = async (postId) => {
    try {
      const response = await api.post("/favoritos", { id_usuario: usuarioId, id_post: postId });
      setFavoritos([...favoritos, response.data]);
    } catch (error) {
      console.error("Erro ao adicionar favorito:", error);
    }
  };

  const handleRemoveFavorito = async (favoritoId) => {
    try {
      await api.delete(`/favoritos/${favoritoId}`);
      setFavoritos(favoritos.filter(fav => fav.id !== favoritoId));
    } catch (error) {
      console.error("Erro ao remover favorito:", error);
    }
  };

  return (
    <div>
      <h3>Meus Favoritos</h3>
      <ul>
        {favoritos.map(fav => (
          <li key={fav.id}>
            {fav.titulo} <button onClick={() => handleRemoveFavorito(fav.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

