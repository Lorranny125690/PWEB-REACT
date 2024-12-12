import React, { useState } from 'react';
import { Header } from './Post';
import { Searcher } from './Search';
import './styles.css';

export function App() {
  return (
    <>
      <Header />
      <Searcher/>
    </>
  )
}
