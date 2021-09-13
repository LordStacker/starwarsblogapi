import {  useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const Navbar = () => {
    const { store, actions } = useContext(Context);
    const deleteTask = (key) => {
        actions.removeFavorite(key);
    }
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Star Wars</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Favorites
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {(store.favoriteListing.length === 0) ? <li className="dropdown-item text-center">(empty)</li> :
                                        store.favoriteListing.map((item, index) => <li className="dropdown-item" key={index}>{item}<span className="ps-5"><button onClick={() => {
                                            deleteTask(index);
                                        }}><i class="bi bi-trash-fill"></i></button></span></li>)}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}
export default Navbar;