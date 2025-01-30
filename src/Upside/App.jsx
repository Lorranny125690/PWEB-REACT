import { Header } from './Post.jsx';
import { Searcher } from './Search.jsx';
import { Mid } from './middle.jsx';
import { Final } from'./final.jsx';
import { Footer } from './footer.jsx';
import { GamesPage } from './comunidade.jsx'

export function App() {
  return (
    <>
      <Header />
      <Searcher />
      <Mid/>
      <Final />
      <GamesPage />
      <Footer/>
    </>
  )
}
