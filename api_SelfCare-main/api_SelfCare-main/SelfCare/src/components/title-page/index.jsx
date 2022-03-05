import toplogo from "../../images/assets/img/logo-blue.png";
import "./title-page.css"

function TitlePage(props) {
  const { title = "", subtitle = ""} = props;
 
  return (
    <div className="title-page text-center object-center container-title-log">
      <img className="logo" src={toplogo} alt="selfcare-logo-top-face" />
      <h2>{title}</h2>
      {subtitle.length > 0 && <p className="text-gray-400">{subtitle}</p>}
    </div>
  );
}

export { TitlePage };
