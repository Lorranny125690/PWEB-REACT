import { Header } from './Components/Post.jsx';
import { Searcher } from './Components/Search.jsx';
import { Mid } from './Components/middle.jsx';
import { Final } from './Components/final.jsx';
import { Footer } from './Components/footer.jsx';
import { GamesPage } from './Components/comunidade.jsx';
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
      <Searcher />
    </>
  );
}

function ComunidadesPage() {
  return (
    <>
      <Header />
      <Searcher />
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
      <Searcher />
    </>
  );
}

function LoginPage() {
  return (
    <>
      
    </>
  );
}

function SignUpPage() {
  return (
    <>

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
