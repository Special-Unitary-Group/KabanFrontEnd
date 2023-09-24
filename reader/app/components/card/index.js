"use client"
import React, { useState } from 'react';
import CardOptions from '../cardOptions';
function Card(props) {
    const [isHovered, setIsHovered] = useState(false);
    const handleCardOptions = () => {
        setIsHovered(true);
    }
    const { title, abstract, author, date, url } = props;
    return (
        <div className=' relative'>
            <div
                className="flex flex-col gap-2 w-1/2 h-auto shadow-xl bg-white m-auto mt-10 rounded-xl p-4">
                <h1 className="text-xl font-bold mb-1 text-gray-800">{title}</h1>
                <p className="text-gray-700 mb-1">{abstract}</p>
                <p className="text-gray-600 mb-1">Por: {author}</p>
                <p className="text-gray-500 mb-1">{date}</p>
                <div className="flex flex-row justify-between">
                    <a href={url} className="text-blue-500 underline">Leer más</a>
                    <button onClick={handleCardOptions} 
                    className='bg-blue-400 shadow-md p-2 rounded-xl text-xl w-20 hover:bg-blue-700'>+</button>
                </div>
            </div>
            <CardOptions visible={isHovered} />
        </div>

    );
}

export default Card;
