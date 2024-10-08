// Botones como componentes para la utilizacion en el portafolio
const ButtonPrimary = ({ text }) => {
    return (
        <button className="p-3 bg-blue-100 rounded-lg hover:bg-blue-300 transition-all duration-100">
            Primario {text}
        </button>
    )
}

const ButtonSecondary = ({ text }) => {
    return (
        <button className="p-3 bg-orange-100 rounded-lg hover:bg-orange-300 transition-all duration-100">
            Secundario {text}
        </button>
    )
}

const ButtonTerciary = ({ text }) => {
    return (
        <button className="p-3 bg-green-100 rounded-lg hover:bg-green-300 transition-all duration-100">
            Secundario {text}
        </button>
    )
}

export {
    ButtonPrimary,
    ButtonSecondary,
    ButtonTerciary
}