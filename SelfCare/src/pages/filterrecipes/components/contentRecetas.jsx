import "./contentRecetas.css";
import "./content.css";
import "./font.css";

function ContentRecetas() {
  return (
    <>
      <div className="Desayuno">
        <div className="titulo">
          <h2 className="h2">Desayuno</h2>
          <a href="index.html" className="titulo_a">
            Ver
          </a>
        </div>
        <div className="boxes">
          <a href="index.html" className="box_a">
            <i className="favourit">
              <span className="material-icons-outlined ">favorite_border</span>
            </i>
            <div>
              <div className="box-content">
                <h3 className="h3"> Panqueques</h3>
                <p className="P">100 kcal</p>
              </div>
            </div>
          </a>
          <a href="index.html" className="box_a">
            <i className="favourit">
              <span className="material-icons-outlined ">favorite_border</span>
            </i>
            <div>
              <div className="box-content">
                <h3 className="h3"> Panqueques</h3>
                <p className="P">100 kcal</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="Almuerzo">
        <div className="titulo">
          <h2 className="h2">Almuerzo</h2>
          <a href="index.html" className="titulo_a">
            Ver
          </a>
        </div>
        <div className="boxes">
          <a href="index.html" className="box_a">
            <div>
              <i className="favourit">
                <span className="material-icons-outlined ">
                  favorite_border
                </span>
              </i>
              <div className="box-content">
                <h3 className="h3"> Panqueques</h3>
                <p className="P">100 kcal</p>
              </div>
            </div>
          </a>
          <a href="index.html" className="box_a">
            <div>
              <i className="favourit">
                <span className="material-icons-outlined ">
                  favorite_border
                </span>
              </i>
              <div className="box-content">
                <h3 className="h3"> Panqueques</h3>
                <p className="P">100 kcal</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="Cena">
        <div className="titulo">
          <h2 className="h2">Cena</h2>
          <a href="index.html" className="titulo_a">
            Ver
          </a>
        </div>
        <div className="boxes">
          <a href="index.html" className="box_a">
            <i className="favourit">
              <span className="material-icons-outlined ">favorite_border</span>
            </i>
            <div>
              <div className="box-content">
                <h3 className="h3"> Panqueques</h3>
                <p className="P">100 kcal</p>
              </div>
            </div>
          </a>
          <a href="index.html" className="box_a">
            <i className="favourit">
              <span className="material-icons-outlined ">favorite_border</span>
            </i>
            <div>
              <div className="box-content">
                <h3 className="h3"> Panqueques</h3>
                <p className="P">100 kcal</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
export { ContentRecetas };
