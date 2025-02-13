import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import { Header } from '../Components/Post.jsx';  
import { Searcher } from '../Components/Search.jsx';  
import { Footer } from '../Components/footer.jsx';  
import "./PostDetail.css";

export const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [images, setImages] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [comments, setComments] = useState([]); 
  const [newComment, setNewComment] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get(`/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Erro ao carregar o post:", error);
      }
    };

    const fetchImages = async () => {
      try {
        const response = await api.get("/imagens");
        setImages(response.data); 
      } catch (error) {
        console.error("Erro ao carregar imagens:", error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await api.get(`/comentarios/${id}`);
        setComments(response.data);
      } catch (error) {
        console.error("Erro ao carregar comentários:", error);
      }
    };

    fetchPost();
    fetchImages();
    fetchComments();

    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, [id]);

  const handleAddComment = async (e) => {
    e.preventDefault();
  
    if (!newComment.trim()) return;
  
    try {
      const response = await api.post(`/comentarios`, {
        conteudo: newComment,
        id_usuario: localStorage.getItem("usuarioId"),
        id_post: id
      });
  
      setComments((prevComments) => [...prevComments, response.data]); 
      setNewComment("");
    } catch (error) {
      console.error("Erro ao adicionar comentário:", error.response?.data || error);
    }
  };
  
  const handleAddFavorite = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("usuarioId")

    try {
      console.log(userId)
      console.log(id)
      const response = await api.post(`/favoritos`, {
        id_usuario: userId,
        id_post: id
      });
  
    } catch (error) {
    }

    console.log("Mamãe eu quero: ")
  };

  if (!post) return <p>Carregando post...</p>;

  const image = images.find((img) => String(img.id) === String(post.id_imagem));

  return (
    <div className="post-detail-container">
      <Header /> 
      <Searcher />
      <div className="main-content"> 
        <div className="content">
          <div className="post-detail">
            <div className="back-button">
              <button onClick={() => navigate("/comunidades")}>Voltar para a lista de posts</button>
            </div>

            <h3>{post.titulo}</h3>
            <p>{post.conteudo}</p>
            <p><strong>Categoria:</strong> {post.categoria}</p>

            {image?.url_post ? (
              <img src={image.url_post} alt="Imagem do post" className="post-image" />
            ) : (
              <p>Imagem não disponível</p>
            )}

            <div className="comments-section">
              <h4>Comentários:</h4>
              {comments.length === 0 ? (
                <p>Não há comentários ainda.</p>
              ) : (
                <ul>
                  {comments.map((comment) => (
                    <li key={comment.id}>{comment.conteudo}</li>
                  ))}
                </ul>
              )}
              {isAuthenticated && (
                <form onSubmit={handleAddComment}>
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Adicione um comentário..."
                  />
                  <button type="submit">Comentar</button>
                </form>
              )}
              <div className="favorito-container"><button onClick = {handleAddFavorite}
              type="favorito-button">
                Favoritar
              </button></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />  
    </div>
  );
};
