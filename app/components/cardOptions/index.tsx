import { ICardItemOptions } from "@/app/interfaces/ICardItemOptions";
import { ICardOptions } from "@/app/interfaces/ICardOptions";

const Item: React.FC<ICardItemOptions> = ({ name, instruction }) => {
    return (
        <li className="text-gray-100 flex flex-col gap-2 mb-4">
            <span className="font-medium text-gray-200">{name}</span>
            <span className=" text-gray-400">{instruction}</span>
        </li>
    )
}
const CardOptions: React.FC<ICardOptions> = ({ visible }) => {
    return (
        <>
            <div className={`bg-blue-950 ${visible ? '' : 'hidden'} absolute top-10 right-12 p-3 rounded-xl w-60`} >
                <ul>
                    <Item name="Bertopic" instruction="Create a map with the most important words in the paper" />
                    <Item name="Results" instruction="Get the most of the results of the paper" />
                    <button
                        className="rounded-full bg-gray-500 text-white w-7 border-white"
                    >
                        x
                    </button>

                </ul>
            </div>
        </>
    )
}
export default CardOptions;