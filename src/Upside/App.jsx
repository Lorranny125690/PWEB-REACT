import { Header } from './Post.jsx';
import { Searcher } from './Search.jsx';
import '../Estlizacao/styles.css'
import { Mid } from './middle.jsx';
import { Sidebar } from './sidebar.jsx';

export function App() {
  return (
    <>
      <Header />
      <Searcher />
      <Mid/>
    </>
  )
}
