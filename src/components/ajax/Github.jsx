import axios from "axios";

import github from "./../../assets/svg/github.svg";
import csharp from "./../../assets/images/csharp.png";

import { useState, useEffect } from "react";
import { Projects } from "../body/Body";

const Peticion = () => {

    const [repos, setRepos] = useState([]); // Capturar los repositorios de dicho usuario
    
    // Manejo de estado para los modales de los respectivos proyectos
    const [eCommerce, setEcommerce] = useState(false);
    const [sena, setSena] = useState(false);
    const [pokedes, setPokedex] = useState(false);

    // Funciones para ver los modales
    const handleVisibilityEcommerce = () => {
        setEcommerce(!eCommerce);
    }
    const handleVisibiltySena = () => {
        setSena(!sena);
    }
    const handleVisibilityPokedex = () => {
        setPokedex(!pokedes);
    }

    // Obtener los repositorios del usuario
    useEffect(() => {
        axios.get(`https://api.github.com/users/JhonSsShell/repos`)
            .then((response) => {
                console.log(response.data)
                setRepos(response.data);
            })
    }, [])

    return(
        <Projects>
            <article className="max-w-5xl my-0 mx-auto w-full flex justify-evenly items-center flex-wrap h-full ">
                {
                    repos.map((repo, index) => {
                        if (repo.name === "E-commerce-Api") {
                            return(
                                <div key={index} className="max-w-sm p-4 bg-gray-200 rounded-xl flex flex-col gap-2">
                                    <div>
                                        <h1 className="text-center font-bold text-xl">
                                            {repo.name}
                                        </h1>
                                    </div>
                                    <div className="overflow-y-auto h-36">
                                        <p className="text-sm text-center">
                                        Desarrollé una API pequeña para un e-commerce utilizando EntityFramework en C#. Esta API se diseñó con un enfoque en la eficiencia y la simplicidad, utilizando cinco tablas para gestionar las entidades fundamentales del sistema, incluyendo productos, usuarios, pedidos, detalles de pedidos y categorías.
                                        </p>
                                    </div>
                                    <div>
                                        <a href={repo.html_url} className="flex gap-3 items-center btn btn-sm btn-primary">
                                            Codigo
                                            <img src={github} alt="" className="w-4 h-4" />
                                        </a>
                                    </div>
                                    <div>
                                        <button className="btn btn-secondary btn-sm w-full" onClick={handleVisibilityEcommerce} >
                                            Mas detalles
                                        </button>
                                    </div>
                                </div>
                            )
                        } else if (repo.name === "mdaSenaAnt") {
                            return (
                                <div key={index} className="max-w-sm p-4 bg-gray-200 rounded-xl flex flex-col gap-2">
                                    <div>
                                        <h1 className="text-center font-bold text-xl">
                                            {repo.name}
                                        </h1>
                                    </div>
                                    <div className="overflow-y-auto h-36">
                                        <p className="text-sm text-center">
                                        Desarrolle un aplicativo web que funciono como base de conocimientos para aprendices SENA, el cual algunos aprendices con cierto rol, seran los encargado de poder subir un respectivo material de apoyo, se realizo con JSP (Java web) y bases de datos (MySql), teniendo propios metodos como autenticacion de usuario, a travez de correo institucional, donde se deberia confirmar la identidad en el portal a travez del codigo de verificacion entrante.
                                        </p>
                                    </div>
                                    <div>
                                        <a href={repo.html_url} className="flex gap-3 items-center btn btn-sm btn-primary">
                                            Codigo
                                            <img src={github} alt="" className="w-4 h-4" />
                                        </a>
                                    </div>
                                    <div>
                                        <button className="btn btn-sm btn-secondary w-full">
                                            Mas detalles
                                        </button>
                                    </div>
                                </div>
                            )
                        } else if (repo.name === "PokeApi-ReactJs") {
                            return (
                                <div key={index}>
                                    <p>
                                        {repo.name}
                                    </p>
                                    <a href={repo.html_url}>Proyecto</a>
                                </div>
                            )
                        } else {
                            return
                        }
                    })
                }
            </article>
            {eCommerce && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
                        <div>
                            <h2 className="text-xl font-bold">Detalles del Proyecto</h2>
                            <p className="mt-4 text-center">
                                Este proyecto principalmente, se enfonco para una practica, para desarrollar mis habilidades, algo que no se menciono en el portafolio, es que tambien pude desarrollar con C# exactamente .NETCore 8, para el desarrollo de la API web.
                            </p>
                            <div className="w-full h-56 p-2">
                                <img src={csharp} alt="Ecommerce" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex justify-end mt-6">
                                <button className="btn btn-error text-white" onClick={handleVisibilityEcommerce}>
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Projects>
    )
}

export default Peticion;