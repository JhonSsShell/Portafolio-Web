import { CardMysql, CardSkils } from "./../ui/cards/Cards";

const Home = () => {
    return(
        <section id="home" className="w-full h-screen">
            <article className="max-w-screen-lg w-full h-full my-0 mx-auto flex justify-around items-center">
                <div className="max-w-lg">
                    <h1 className="font-bold text-2xl">
                        Bienvenidos a mi portafolio
                    </h1>
                    <p>
                    ¡Hola! Soy Jhon Carreño, un apasionado desarrollador de software con experiencia en la creación de aplicaciones web. Desde que descubrí el mundo de la programación, he estado inmerso en aprender y dominar diversas tecnologías que me permiten construir soluciones innovadoras y eficientes. Mi objetivo es seguir creciendo profesionalmente mientras disfruto del proceso de transformar ideas en realidades digitales.
                    </p>
                </div>
                <div className="max-w-lg w-[15rem] h-[15rem]">
                    <img src="https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg" alt="FotoPerfil" className="w-full h-full object-cover bg-center shadow-lg rounded-full"/>
                </div>
            </article>
        </section>
    )
}

const Skils = () => {
    return (
        <section id="skils" className="w-full h-screen bg-blue-200">
            <article className="w-full h-full flex p-10">
                <CardSkils />
                <CardMysql />
            </article>
        </section>
    )
}

export {
    Home,
    Skils
};