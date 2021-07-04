import { Link } from "react-router-dom";
import { Header } from "../../components/header/Header";
import pageNotFound from "../../images/404.jpg"

export function Page404() {
  return (
    <div id="page-404">
        <Header />
      <div className="container">
        <img src={pageNotFound} alt="Pagina não encontrada!" />
        <Link to="#">Return To The Home Page</Link>
      </div>
    </div>
  );
}
