import git from "./../../../assets/svg/git.svg"
import mysql from "./../../../assets/svg/mysql.svg"

const CardGit = () => {
    return (
        <div className="max-w-72 flex h-max rounded-lg gap-4 flex-col items-center justify-start text-center p-4 bg-gray-100 ">
            <div>
                <h1 className="font-bold text-xl pt-2">
                    Git Bash
                </h1>
            </div>
            <div className="p-2 bg-gray-100 rounded-2xl">
                <img src={git} alt="#Logo Git " className="w-full h-full" />
            </div>
            <div>
                <p className="text-sm pb-2">
                Experto en Git Bash para control de versiones, gestionando ramas y resolviendo conflictos para un desarrollo colaborativo eficiente.
                </p>
            </div>
        </div>
    )
}

const CardMysql = () => {
    return (
        <div className="max-w-72 flex h-max rounded-lg gap-4 flex-col items-center justify-start text-center p-4 bg-gray-100 ">
            <div>
                <h1 className="font-bold text-xl pt-2">
                    Mysql
                </h1>
            </div>
            <div className="p-2 bg-gray-100 rounded-2xl">
                <img src={mysql} alt="#Logo Git " className="w-full h-full" />
            </div>
            <div>
                <p className="text-sm pb-2">
                Competente en MySQL, diseño y optimizo bases de datos, realizando consultas complejas y asegurando la integridad de los datos.
                </p>
            </div>
        </div>
    )
}

export {
    CardGit,
    CardMysql
}