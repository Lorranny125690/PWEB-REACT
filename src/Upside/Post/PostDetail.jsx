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
  const [comments, setComments] = useState([]);  // Estado para armazenar comentários
  const [newComment, setNewComment] = useState(""); // Estado para o novo comentário
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get(`/posts/${id}`);
        setPost(response.data); // Carrega o post específico
      } catch (error) {
        console.error("Erro ao carregar o post:", error);
      }
    };

    const fetchImages = async () => {
      try {
        const response = await api.get("/imagens");
        setImages(response.data); // Carrega todas as imagens
      } catch (error) {
        console.error("Erro ao carregar imagens:", error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await api.get(`/posts/${id}/comentarios`); // Ajuste conforme seu backend
        setComments(response.data); // Carrega os comentários
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

    if (!newComment.trim()) return; // Verifica se o comentário não está vazio

    try {
      const response = await api.post(`/posts/${id}/comentarios`, {
        conteudo: newComment,
      });
      setComments((prevComments) => [...prevComments, response.data]); // Atualiza os comentários
      setNewComment(""); // Limpa o campo do comentário
    } catch (error) {
      console.error("Erro ao adicionar comentário:", error);
    }
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
            </div>
          </div>
        </div>
      </div>
      <Footer />  
    </div>
  );
};
