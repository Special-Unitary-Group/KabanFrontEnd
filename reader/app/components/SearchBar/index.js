import Image from "next/image";
import axios from 'axios'
function InputWithButtonAndAvatar(props) {
    const { handleVisible, type } = props;

    let content = ""
    const urls = {
        'Find': 'https://hackmty2023-9f808c49a889.herokuapp.com/enviar/',
        'Ranked': 'https://hackmty2023-9f808c49a889.herokuapp.com/ranked/'
    }
    // Función que maneja el click del botón
    const onSubmit = async (event) => {
        
        event.preventDefault();
        const form = document.querySelector('form')
        const data = new FormData(form);
        const prompt = document.querySelector('#prompt').value
        data.append('input_data', prompt)

        axios.post(urls[type], data)
            .then((response) => {
                console.log(response.data);
                //promptResponse = response.data
                content = response.data.response
                console.log(response.data.response)

                // Save prompt value in URL
                const searchParams = new URLSearchParams(window.location.search);
                searchParams.set('prompt', prompt);
                searchParams.set('response', response.data.response);
                const newUrl = window.location.pathname + '?' + searchParams.toString();
                window.history.pushState(null, '', newUrl);

                // Redirect to new page with same query string
                window.location.href = '/response' + window.location.search;
            })
            .catch((error) => {
                console.error("Error al hacer la solicitud:", error);
            });
    }

    return (
        <>


            <form
                className=" w-96"
                onSubmit={onSubmit}
                method="POST">
                <div className="relative bg-white border rounded-lg shadow-sm focus-within:ring focus-within:ring-opacity-50 w-full mt-10">

                    {/* Avatar a la izquierda */}
                    <div className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <Image
                            src="https://media.licdn.com/dms/image/C4E03AQGPLmnaGUCOkg/profile-displayphoto-shrink_800_800/0/1640898710436?e=1701302400&v=beta&t=H2VzyuGOkl5-r0SVaga5aG_WJ-QXX8Xk7ZpxZlXACMo"
                            width={30}
                            height={30}
                            alt="PP"
                            className="rounded-full"
                        />
                    </div>

                    {/* Input en el medio */}
                    <input
                        type="text"
                        className=" text-gray-700 pl-14 pr-20 w-full py-2 rounded-lg bg-transparent border-none focus:ring-0 focus:outline-none"
                        placeholder="Escribe aquí..."
                        id="prompt"
                        name="prompt"
                    />

                    {/* Botón dentro del input, a la derecha */}
                    <button
                        className="absolute right-0 inset-y-0 px-4 py-2 rounded-r-lg bg-blue-500 hover:bg-blue-600 text-white font-medium focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        onClick={handleVisible}
                        type="submit"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </>

    );
}

export default InputWithButtonAndAvatar;
