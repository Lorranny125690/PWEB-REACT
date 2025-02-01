import { Header } from './Components/Post.jsx';
import { Searcher } from './Components/Search.jsx';
import { Mid } from './Components/middle.jsx';
import { Final } from './Components/final.jsx';
import { Footer } from './Components/footer.jsx';
import { GamesPage } from './Components/comunidade.jsx';
import { Destaques } from "./Destaques/Destaque.jsx";
import { Routes, Route } from "react-router-dom";
import { Login } from './Login/login.jsx';
import { SingUp } from './Login/singup.jsx'
import { Post } from './Post/Poste.jsx'
import { HelpPage } from './Ajuda/Ajuda.jsx'

function Homenosingup() {
  return (
    <>
      <Header />
      <Searcher />
      <Mid />
      <Final />
      <GamesPage />
      <Footer />
    </>
  );
}

function Homesingup() {
  return (
    <>
      <Header />
      <Searcher />
      <Mid />
      <Final />
      <GamesPage />
      <Footer />
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

function CategoriasPage() {
  return (
    <>
      <Header />
      <Searcher />
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
  return (
    <>
      <Header />
      <Searcher />
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

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Homenosingup />} />
      <Route path="/" element={<Homesingup />} />
      <Route path="/destaque" element={<DestaquesPage />} />
      <Route path="/categorias" element={<CategoriasPage />} />
      <Route path="/comunidades" element={<ComunidadesPage />} />
      <Route path="/noticias" element={<NoticiasPage />} />
      <Route path="/ajuda" element={<AjudaPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}
