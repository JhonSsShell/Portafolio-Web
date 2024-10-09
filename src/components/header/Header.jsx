import { useEffect, useState } from "react";
import bash from "./../../assets/svg/bash.svg";

const Header = ({ children, isMenuOpen, setMenuOpen }) => {
    const [isVisible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            setVisible(false);
        } else {
            setVisible(true);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header
            className={
                isVisible
                    ? "transform translate-y-0 w-screen flex fixed top-0 left-0 transition-transform duration-100"
                    : "transform -translate-y-full fixed top-0 left-0 w-full transition-transform duration-1000"
            }
        >
            <div className="navbar w-full max-w-5xl flex justify-between my-0 mx-auto bg-gray-100 rounded-bl-xl rounded-br-xl max-md:rounded-none">
                <div className="navbar-center">
                    <h1 className="font-bold text-xl flex items-center gap-4">
                        Jhon Shell Ss
                        <img src={bash} alt="Bash icon" className="w-7 h-7" />
                    </h1>
                </div>
                {/* Botón para el menú hamburguesa */}
                <div className="navbar-end lg:hidden">
                    <button
                        className="btn btn-ghost"
                        onClick={() => setMenuOpen(!isMenuOpen)} // Cambia el estado al hacer clic
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
                <div className="navbar-center hidden max-w-lg w-full lg:flex">
                    <ul className="menu menu-horizontal px-1 w-full flex items-center justify-around">
                        {children}
                    </ul>
                </div>
            </div>
            {/* Menú desplegable para pantallas pequeñas */}
            {isMenuOpen && (
                <div className="lg:hidden w-full absolute top-full left-0 z-10">
                    <ul className="menu bg-gray-100 shadow-lg rounded-b-xl p-2 w-full">
                        {children}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
