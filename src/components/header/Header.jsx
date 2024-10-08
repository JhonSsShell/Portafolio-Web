import { useEffect, useState } from "react";
import bash from "./../../assets/svg/bash.svg"

const Header = ({ children }) => {

    const [isVisible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            setVisible(false)
        } else {
            setVisible(true);
        }

        setLastScrollY(currentScrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [lastScrollY])


    return (
        <header className={isVisible ? "transform translate-y-0 w-screen flex fixed top-0 left-0 transition-transform duration-100" : "transform -translate-y-full fixed top-0 left-0 w-full transition-transform duration-1000"} >
            <nav className="max-w-screen-lg w-full flex h-full bg-blue-100 rounded-br-2xl rounded-bl-2xl justify-between my-0 mx-auto p-4">
                <div>
                    <h1 className="font-bold text-xl flex items-center gap-4">
                        Jhon Shell Ss 
                        <img src={bash} alt="Bash icon" className="w-7 h-7" />
                    </h1>
                </div>
                <div className="max-w-sm w-full">
                    {children}
                </div>
            </nav>
        </header>
    )
}

export default Header;