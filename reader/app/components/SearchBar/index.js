import Image from "next/image";
function InputWithButtonAndAvatar(props) {
    const { handleVisible } = props;


    // Función que maneja el click del botón
    const onSubmit = async (e) => {
        e.preventDefault();
        
        const dataToSend = {
            input_data: e.target.value
        }
        const response = await fetch('https://hackmty2023-9f808c49a889.herokuapp.com/enviar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend),
        });
        // Handle response if necessary
        const data = await response.json()
        console.log(data)
        // ...
    }

    return (
        <form 
        className=" w-96"
        onSubmit={onSubmit}>
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
    );
}

export default InputWithButtonAndAvatar;
