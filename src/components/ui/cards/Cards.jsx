import git from "./../../../assets/svg/git.svg"
import mysql from "./../../../assets/svg/mysql.svg"
import html from "./../../../assets/svg/html.svg"
import css from "./../../../assets/svg/css.svg"
import js from "./../../../assets/svg/js.svg"
import postgres from "./../../../assets/svg/postgres.svg"
import java from "./../../../assets/svg/java.svg"
import jsp from "./../../../assets/svg/jsp.svg"
import laravel from "./../../../assets/svg/laravel.svg"
import react from "./../../../assets/svg/react.svg"
import skills from "./../../../assets/svg/skills.svg"


import { useState } from "react"

import { motion } from "framer-motion"


const CardTimeline = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <h1 className="text-center font-bold p-4 text-3xl flex gap-4 justify-center items-center">
                Habilidades tecnologicas <img src={skills} alt="Habilidades" className="w-8 h-8" />
            </h1>

            {/* Tecnologias HTML, CSS Y JS */}
            <li>
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end flex flex-col gap-4">
                    <div>
                        <time className="font-mono italic">Html, Css y Js</time>
                        <div className="text-lg font-black">Manejo de tecnologias basicas</div>
                        <p>
                            Domino HTML, CSS y JavaScript para construir sitios web responsivos y dinámicos, implementando diseño estructurado, estilos avanzados y lógica interactiva.
                        </p>
                    </div>
                    <div className="w-full flex justify-evenly">
                        <motion.div
                            className="p-2 bg-gray-200 rounded-xl"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={html} alt="HTML" className="w-10 h-10" />
                        </motion.div>
                        <motion.div
                            className="p-2 bg-gray-200 rounded-xl"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={css} alt="CSS" className="w-10 h-10" />
                        </motion.div>
                        <motion.div
                            className="p-2 bg-gray-200 rounded-xl"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={js} alt="JavaScript" className="w-10 h-10" />
                        </motion.div>
                    </div>
                </div>
                <hr className="bg-yellow-500" />
            </li>

            {/* Tecnologia de MySQL */}
            <li>
                <hr className="bg-yellow-500" />
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-end mb-10 flex flex-col gap-4">
                    <div>
                        <time className="font-mono italic">Mysql y PostgreSQL</time>
                        <div className="text-lg font-black">Manejo de Base de datos</div>
                        <p>
                            Tengo experiencia en la gestión de bases de datos relacionales, específicamente en MySQL y PostgreSQL. En MySQL, manejo funciones y transacciones que aseguran la integridad y eficiencia en aplicaciones web. Por otro lado, en PostgreSQL, destaco en el uso de funciones avanzadas y transacciones ACID, lo que me permite trabajar con tipos de datos complejos como JSON. Estas habilidades me permiten desarrollar soluciones sólidas y escalables para la gestión de grandes volúmenes de datos.
                        </p>
                    </div>
                    <div>
                        <div className="w-full flex justify-evenly">
                            <motion.div
                                className="p-2 bg-gray-200 rounded-xl"
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img src={postgres} alt="PostgreSQL" className="w-10 h-10" />
                            </motion.div>
                            <motion.div
                                className="p-2 bg-gray-200 rounded-xl"
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img src={mysql} alt="Mysql" className="w-10 h-10" />
                            </motion.div>
                        </div>
                    </div>
                </div>
                <hr className="bg-blue-400" />
            </li>

            {/* Tecnologias de java */}
            <li>
                <hr className="bg-blue-400" />
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end flex flex-col gap-4">
                    <div>
                        <time className="font-mono italic">Java</time>
                        <div className="text-lg font-black">Manejo de Java nativo</div>
                        <p>
                            He creado aplicaciones nativas en Java, implementando funcionalidades clave como gestión de usuarios, almacenamiento de datos y validaciones. Utilizo conceptos de programación orientada a objetos para diseñar sistemas robustos y escalables, asegurando un rendimiento óptimo y una experiencia de usuario fluida.
                        </p>
                    </div>
                    <div className="w-full flex justify-evenly">
                        <motion.div
                            className="p-2 bg-gray-200 rounded-xl"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={java} alt="Java" className="w-10 h-10" />
                        </motion.div>
                        <motion.div
                            className="p-2 bg-gray-200 rounded-xl"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={jsp} alt="JavaWeb" className="w-10 h-10" />
                        </motion.div>
                    </div>
                </div>
                <hr className="bg-yellow-400" />
            </li>

            {/* Framework de Php */}
            <li>
                <hr className="bg-yellow-400" />
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-end mb-10 flex flex-col gap-4">
                    <div>
                        <time className="font-mono italic">Framework Php</time>
                        <div className="text-lg font-black">Buen manejo del ORM de laravel</div>
                        <p>
                            He trabajado con Laravel, un framework PHP que optimiza el desarrollo web. Destaco el uso de su ORM, Eloquent, que simplifica la interacción con bases de datos. Esto permite realizar consultas complejas de manera eficiente y sin escribir SQL. Laravel también facilita la gestión de rutas y autenticación, permitiendo construir aplicaciones robustas y escalables.
                        </p>
                    </div>
                    <div className="w-full flex justify-evenly">
                        <motion.div
                            className="p-2 bg-gray-200 rounded-xl"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={laravel} alt="Laravel" className="w-10 h-10" />
                        </motion.div>
                    </div>
                </div>
                <hr className="bg-red-500" />
            </li>

            {/* Framework de javascript */}
            <li>
                <hr className="bg-red-500" />
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end flex flex-col gap-4">
                    <div>
                        <time className="font-mono italic">Framework de javascript</time>
                        <div className="text-lg font-black">Manejo de componentes con React</div>
                        <p>
                            En mis proyectos de React, aprovecho el poder de los hooks para gestionar el estado y los efectos secundarios de manera eficiente. Los hooks, como useState y useEffect, simplifican la lógica del componente y permiten un código más limpio y legible. Esta práctica mejora la reusabilidad de los componentes y optimiza la experiencia del usuario.
                        </p>
                    </div>
                    <div className="w-full flex justify-evenly">
                        <motion.div
                            className="p-2 bg-gray-200 rounded-xl"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={react} alt="React" className="w-10 h-10" />
                        </motion.div>
                    </div>
                </div>
                <hr className="bg-blue-600" />
            </li>
            <li>
                <hr className="bg-blue-600" />
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-end mb-10 flex flex-col gap-4">
                    <div>
                        <time className="font-mono italic">Git bash</time>
                        <div className="text-lg font-black">Manejo de repositorios</div>
                        <p>
                            Utilizo Git Bash para el control de versiones en mis proyectos. Este entorno de línea de comandos permite gestionar el código de manera eficiente, facilitando el trabajo colaborativo. Con Git, puedo realizar seguimientos de cambios, fusionar ramas y resolver conflictos, lo que optimiza la colaboración en equipos y asegura la integridad del código.
                        </p>
                    </div>
                    <div className="w-full flex justify-evenly">
                        <motion.div
                            className="p-2 bg-gray-200 rounded-xl"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={git} alt="Git" className="w-10 h-10" />
                        </motion.div>
                    </div>
                </div>
                <hr className="bg-orange-500" />
            </li>
        </ul>
    )
}

export {
    CardTimeline
}