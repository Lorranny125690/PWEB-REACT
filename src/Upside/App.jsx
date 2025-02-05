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
import { Character } from './Personagens/Char.jsx';

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

const pikachuData = {
  name: "Pikachu",
  description: "Pikachu é um Pokémon do tipo Elétrico conhecido por sua aparência fofa e seus ataques elétricos.",
  image: "https://i.pinimg.com/474x/00/f8/b1/00f8b1df62b83086707b5e85fc6c9629.jpg",
  type: "Electric",
  gender: "50% ♂ / 50% ♀",
  abilities: ["Static", "Lightning Rod"],
  species: "Mouse Pokémon",
};

function CharPage() {
  return (
    <>
      <Header />
      <Searcher />
      <Character character={pikachuData} />
      <Footer />
    </>
  );
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
      <Route path="/char" element={<CharPage />} />
    </Routes>
  );
}
