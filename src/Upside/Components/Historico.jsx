import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../services/api';

export const SearchHistory = () => {
  const [history, setHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await axios.get(`${api}/historico`);
      setHistory(response.data);
    } catch (error) {
      console.error('Erro ao buscar histórico:', error);
    }
  };

  const addHistory = async () => {
    if (!searchTerm) return;
    const newEntry = {
      id_usuario: localStorage("usuarioId"),
      termo_buscado: searchTerm,
      data_busca: new Date().toISOString()
    };
    try {
      await axios.post(`${api}/historico`, newEntry);
      setSearchTerm('');
      fetchHistory();
    } catch (error) {
      console.error('Erro ao adicionar histórico:', error);
    }
  };

  const deleteHistory = async (id) => {
    try {
      await axios.delete(`${api}/historico/${id}`);
      fetchHistory();
    } catch (error) {
      console.error('Erro ao excluir histórico:', error);
    }
  };

  return (
    <div>
      <h1>Histórico de Pesquisa</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Digite um termo de busca"
      />
      <button onClick={addHistory}>Adicionar</button>
      <ul>
        {history.map((item) => (
          <li key={item.id}>
            {item.termo_buscado} - {new Date(item.data_busca).toLocaleString()}
            <button onClick={() => deleteHistory(item.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};