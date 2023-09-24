"use client";
import Image from 'next/image'
import { IoSend } from "react-icons/io5";
import { useState } from 'react';
import { NextUIProvider } from "@nextui-org/react";

import Card from './components/card';
import SearchBar from "./components/SearchBar";
import NavBar from './components/NavBar';
import Dropdown from './components/Dropdown';
export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [visible, setVisible] = useState(true);
  const handleVisible = () => {
    setVisible(false);
    console.log('a')
  };

  const paperContent = [

    {
      title: "El Futuro de la Inteligencia Artificial",
      abstract: "La inteligencia artificial (IA) está transformando rápidamente el mundo a nuestro alrededor. Este artículo explora las tendencias emergentes y las predicciones para el futuro de la IA.",
      author: "Jane Smith",
      date: "20 de Septiembre, 2023",
      url: "https://ejemplo.com/articulo1"
    },
    {
      title: "Sostenibilidad y Tecnología: Una combinación poderosa",
      abstract: "Exploramos cómo las innovaciones tecnológicas están impulsando prácticas más sostenibles en diversas industrias y cómo podemos aprovecharlas para un futuro más verde.",
      author: "Carlos Pérez",
      date: "18 de Septiembre, 2023",
      url: "https://ejemplo.com/articulo2"
    },
    {
      title: "La Revolución de las Criptomonedas",
      abstract: "Las criptomonedas han revolucionado el mundo financiero. En este artículo, echamos un vistazo a cómo comenzaron, dónde están ahora y a dónde podrían ir en el futuro.",
      author: "Linda García",
      date: "15 de Septiembre, 2023",
      url: "https://ejemplo.com/articulo3"
    }
  ];

  return (
    <NextUIProvider>
      <NavBar />
      <div className='flex flex-col items-center justify-center h-full mt-14 pb-10'>
        <Dropdown visible={visible} />
        <Image
          className={`${visible ? '' : 'hidden'}`}
          src="/documents.png"
          width={300}
          height={300}
          alt="Documents image" />

        {!visible ? paperContent.map((articulo, index) =>
          <Card key={index}
            title={articulo.title}
            abstract={articulo.abstract}
            author={articulo.author}
            date={articulo.date}
            url={articulo.url} />)
          :
          null
        }
        <SearchBar handleVisible={handleVisible} />
      </div>
    </NextUIProvider>
  )
}

