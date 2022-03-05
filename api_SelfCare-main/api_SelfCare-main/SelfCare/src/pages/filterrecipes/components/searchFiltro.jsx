import "./searchFiltro.css";

function SearchFiltro() {
  return (
    <div className="box-SearchFiltros">
      <div className="search" >
      <a href="../../recipes"></a>
        <input type="search" className="inputSearch" placeholder="search" />
        <i className="icon-search">
          <span className="material-icons-outlined">search</span>
        </i>
      </div>
      <button className="btnFiltros"> <a href="../../filterpage">Filtros</a></button>
    </div>
  );
}
export { SearchFiltro };
