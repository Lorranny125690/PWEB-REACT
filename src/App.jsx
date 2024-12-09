import { useState } from 'react';
import { Header } from './Post';
import { Searcher } from './Search';
import './styles.css';

export default function App() {
  return (
    <>
      <Header />
      <Searcher/>
    </>
  )
}
