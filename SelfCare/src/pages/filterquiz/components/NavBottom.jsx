import "./NavBottom.css";
import "./font.css";

function NavBottom() {
  return (
    <div className="icon-bottom">
      <a className="icon" href="#">
        <span className="material-icons-outlined">quiz</span>
        <p>Quizz</p>
      </a>
      <a className="icon" href="#">
        <span class="material-icons-outlined">quiz</span>
        <p>Recetas</p>
      </a>
      <a className="icon" href="#">
        <span class="material-icons-outlined">favorite_border</span>
        <p>Favourit</p>
      </a>
    </div>
  );
}

export { NavBottom };
