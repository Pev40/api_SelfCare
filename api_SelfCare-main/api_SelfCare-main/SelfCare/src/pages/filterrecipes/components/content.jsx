import "./content.css";
import "./font.css";

function Content() {
  return (
    <>
      <div className="easy">
        <div className="titulo">
          <h2 className="h2">Fácil</h2>
          <a href="../../recipes" className="titulo_a">
            Ver
          </a>
        </div>
        <div className="boxes">
          <div className="box">
            <div className="box-content">
              <h3 className="h3"> Name Quizz</h3>
              <p className="P">Description</p>
            </div>
          </div>
          <div className="box">
            <div className="box-content">
              <h3 className="h3"> Name Quizz</h3>
              <p className="p">Description</p>
            </div>
          </div>
        </div>
      </div>
      <div className="intermediate">
        <div className="titulo">
          <h2 className="h2">Intermedio</h2>
          <a href="index.html" className="titulo_a">
            Ver
          </a>
        </div>
        <div className="boxes">
          <div className="box">
            <div className="box-content">
              <h3 className="h3"> Name Quizz</h3>
              <p className="p">Description</p>
            </div>
          </div>
          <div className="box">
            <div className="box-content">
              <h3 className="h3"> Name Quizz</h3>
              <p className="p">Description</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hard">
        <div className="titulo">
          <h2 className="h2">Difícil</h2>
          <a href="index.html" className="titulo_a">
            Ver
          </a>
        </div>
        <div className="boxes">
          <div className="box">
            <div className="box-content">
              <h3 className="h3"> Name Quizz</h3>
              <p className="p">Description</p>
            </div>
          </div>
          <div className="box">
            <div className="box-content">
              <h3 className="h3"> Name Quizz</h3>
              <p className="p">Description</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { Content };
