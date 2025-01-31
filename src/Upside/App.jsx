import { Header } from './Post.jsx';
import { Searcher } from './Search.jsx';
import { Mid } from './middle.jsx';
import { Final } from './final.jsx';
import { Footer } from './footer.jsx';
import { GamesPage } from './comunidade.jsx';
import { Destaque } from "../Destaques/Destaque";
import { Routes, Route } from "react-router-dom";

function Home() {
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
      <Destaque />
    </>
  );
}

function CategoriasPage() {
  return (
    <>
      <Header />
      <h1>Categorias</h1>
    </>
  );
}

function ComunidadesPage() {
  return (
    <>
      <Header />
      <h1>Comunidades</h1>
    </>
  );
}

function NoticiasPage() {
  return (
    <>
      <Header />
      <h1>Notícias</h1>
    </>
  );
}

function AjudaPage() {
  return (
    <>
      <Header />
      <h1>Ajuda</h1>
    </>
  );
}

function LoginPage() {
  return (
    <>
      <Header />
      <h1>Login</h1>
    </>
  );
}

function SignUpPage() {
  return (
    <>
      <Header />
      <h1>Sign Up</h1>
    </>
  );
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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
