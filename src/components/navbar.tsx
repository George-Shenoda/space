import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

interface params {
    onClick: () => void;
}

function NavLinks({ onClick }: params) {
    return (
        <ul>
            <li>
                <NavLink to="/space/" onClick={onClick} viewTransition end>
                    <span>00</span> Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/space/destination" onClick={onClick} viewTransition>
                    <span>01</span> Destination
                </NavLink>
            </li>
            <li>
                <NavLink to="/space/crew" onClick={onClick} viewTransition>
                    <span>02</span> Crew
                </NavLink>
            </li>
            <li>
                <NavLink to="/space/technology" onClick={onClick} viewTransition>
                    <span>03</span> Technology
                </NavLink>
            </li>
        </ul>
    );
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleImageClick = () => {
        navigate("/");
    };

    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <nav>
            <div className="logo" onClick={handleImageClick}>
                <img src="assets/shared/logo.svg" alt="logo" />
            </div>
            <div className="links">
                <NavLinks onClick={toggleMenu} />
            </div>
            <div className="list">
                <img
                    src="assets/shared/icon-hamburger.svg"
                    alt=""
                    className="list"
                    onClick={toggleMenu}
                />
                <div className={`phone-links ${isOpen ? "show" : ""}`}>
                    <div className="close">
                        <img
                            src="assets/shared/icon-close.svg"
                            alt=""
                            className="close"
                            onClick={toggleMenu}
                        />
                    </div>
                    <NavLinks onClick={toggleMenu} />
                </div>
            </div>
        </nav>
    );
}
