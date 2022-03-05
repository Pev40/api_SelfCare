import { ContentRecetasFiltros } from "../filterrecipes/components/contentRecetafiltro";
import { SearchFiltro } from "../filterrecipes/components/searchFiltro";

import "./filterrecipes.css";
import { BottomMenu } from "../../components/bottom-menu";

function RecetasFiltro() {
  return (
    <div className="App">
      <header className="header">
        <SearchFiltro />
      </header>
        <ContentRecetasFiltros />

      <BottomMenu />
    </div>
  );
}
export { RecetasFiltro };