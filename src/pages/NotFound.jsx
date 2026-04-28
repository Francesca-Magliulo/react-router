import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="container py-5 text-center">

            <h1>404</h1>

            <p>Pagina non trovata</p>

            <Link to="/" className="btn btn-dark">
                Torna alla Home
            </Link>

        </div>
    );
}