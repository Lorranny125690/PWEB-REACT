import { Header } from './Components/Post.jsx';
import { Searcher } from './Components/Search.jsx';
import { Mid } from './Components/middle.jsx';
import { Final } from './Components/final.jsx';
import { Footer } from './Components/footer.jsx';
import { GamesPage } from './Components/comunidade.jsx';
import { Destaques } from "./Destaques/Destaque.jsx";
import { Routes, Route } from "react-router-dom";
import { Login } from './Login/login.jsx';
import { SingUp } from './Login/singup.jsx';
import { Post } from './Post/Poste.jsx';
import { HelpPage } from './Ajuda/Ajuda.jsx';
import { Noticias } from './Noticias/Noticias.jsx';
import { Sidebar } from './Components/sidebar.jsx';
import { AuthProvider } from "./services/contexts";
import { PostDetail } from './Post/PostDetail.jsx';
import { UpdateUser } from './Login/EditarPerfil.jsx'
import { NoticiaDetalhe } from './Noticias/NoticiaDetail.jsx';
import "react-toastify/dist/ReactToastify.css";
import { Favoritos } from './Login/favoritos.jsx';
import { Imagem } from './Imagem/Imagem.jsx';


function Homenosingup() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Searcher />
        <Mid />
        <Final />
        <GamesPage />
        <Footer />
      </AuthProvider>
    </>
  );
}

function DestaquesPage() {
  return (
    <>
      <Header />
      <Searcher />
      <Destaques />
      <Footer />
    </>
  );
}

function ComunidadesPage() {
  return (
    <>
      <Header />
      <Searcher />
      <Post />
    </>
  );
}

function NoticiasPage() {
  console.log("Renderizando NoticiasPage...");
  return (
    <>
      <Header />
      <Searcher />
      <Noticias />
    </>
  );
}


function AjudaPage() {
  return (
    <>
      <Header />
      <HelpPage />
    </>
  );
}

function LoginPage() {
  return (
    <>
      <Login />
      <div className="voltar">
        <button 
          onClick={() => window.location.href = "/"} 
          style={{ cursor: 'pointer', color: 'white'}}>
          Voltar
        </button>
      </div>
    </>
  );
}

function SignUpPage() {
  return (
    <>
      <SingUp />
      <div className="voltar">
        <button 
          onClick={() => window.location.href = "/"} 
          style={{ cursor: 'pointer', color: 'white'}}>
          Voltar
        </button>
      </div>
    </>
  );
}

function EditarPerfil() {
  return (
    <>
      <Header/>
      <UpdateUser/>
    </>
  )
}

function NoticiaDetail() {
  return (
    <>
      <Header />
      <Searcher />
      <NoticiaDetalhe/>
      <Footer />
    </>
  );
}

function GaleriaPage() {
  console.log("Renderizando...");
  return (
    <>
      <Header />
      <Searcher />
      <Footer />
    </>
  );
}

function ImagePage() {
  console.log("Renderizando...");
  return (
    <>
      <Header />
      <Searcher />
      <Imagem/>
      <Footer />
    </>
  );
}

function PostDetail1() {
  console.log("Renderizando...");
  return (
    <>
      <Header />
      <Searcher />
      <UpdateUser/>
      <Footer />
    </>
  );
}

function Favorito() {
  console.log("Renderizando...");
  return (
    <>
      <Header />
      <Searcher />
      <Footer />
    </>
  )
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Homenosingup />} />
      <Route path="/destaque" element={<DestaquesPage />} />
      <Route path="/comunidades" element={<ComunidadesPage />} />
      <Route path="/noticias" element={<NoticiasPage />} />
      <Route path="/ajuda" element={<AjudaPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/post/:id" element={<PostDetail />} />
      <Route path="/noticia/:id" element={<NoticiaDetalhe />} />
      <Route path="/galeria" element={<GaleriaPage />} />
      <Route path="/editarperfil" element={<EditarPerfil />} />
      <Route path="/favorito" element={<Favorito />} />
      <Route path="/image" element={<ImagePage />} />
    </Routes>
  );
}
