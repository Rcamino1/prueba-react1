import React, { useState, useEffect } from 'react';
import Buscador from './Buscador';

const MiApi = () => {
  const [feriados, setFeriados] = useState([]);
  const [filteredFeriados, setFilteredFeriados] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://api.victorsanmartin.com/feriados/en.json");
    const jsonData = await response.json();
    setFeriados(jsonData.data);
  };

  useEffect(() => {
    const filteredResults = feriados.filter((feriado) => {
      return feriado.title.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredFeriados(filteredResults);
  }, [feriados, search]);

  return (
    <div>
      <Buscador onChange={handleChange} search={search} />
      {filteredFeriados.map((feriado, index) => (
        <div key={index}>
          <h2>{feriado.title}</h2>
          <p>Fecha: {feriado.date}</p>
          <p>Tipo: {feriado.type}</p>
        </div>
      ))}
    </div>
  );
};

export default MiApi;