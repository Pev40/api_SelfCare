import { NavBottom } from "../filterrecipes/components/NavBottom";
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
      <main>
        <ContentRecetasFiltros />
      </main>
      <BottomMenu />
    </div>
  );
}
export { RecetasFiltro };