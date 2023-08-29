const Buscador = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Busca por Nombre del Feriado"
        onChange={handleChange}
      />
    </div>
  );
};

export default Buscador
