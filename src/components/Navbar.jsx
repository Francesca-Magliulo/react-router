import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
            <div className="container-fluid">

                <span className="navbar-brand">
                    Store
                </span>

                <div className="navbar-nav gap-2">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "nav-link active fw-bold text-warning" : "nav-link"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "nav-link active fw-bold text-warning" : "nav-link"
                        }
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            isActive ? "nav-link active fw-bold text-warning" : "nav-link"
                        }
                    >
                        Products
                    </NavLink>

                </div>

            </div>
        </nav>
    )
}