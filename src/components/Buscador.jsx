const Buscador = ({ onChange, search }) => {

  return (
    <div className="search-container">
      <input
        className="form-control my-3"
        type="search"
        placeholder="Nombre Feriado"
        aria-label="Search"
        value={search}
        onChange={onChange}
      />
    </div>
  );
};

export default Buscador
