import "./header.css";
import "./font.css";

function Header(props) {
  const { title = "" } = props;

  return (
    <header className="headerC">
      <h1 className="headerH1">{title}</h1>
    </header>
  );
}
export { Header };
