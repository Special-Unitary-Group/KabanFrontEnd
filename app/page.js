"use client";
import Image from 'next/image'
import { IoSend } from "react-icons/io5";
import { useEffect, useState } from 'react';
import { NextUIProvider } from "@nextui-org/react";

import Card from './components/card';
import SearchBar from "./components/SearchBar";
import NavBar from './components/NavBar';
import Dropdown from './components/Dropdown';
export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [visible, setVisible] = useState(true);
  const [type, setType] = useState('');
  const handleVisible = () => {
    setVisible(false);
    console.log('a')
  };

  return (
    <NextUIProvider>
      <div className='flex flex-col items-center justify-center h-full mt-14 pb-10'>
        <Dropdown visible={visible} type={type} setType={setType} />
        <Image
          className={`${visible ? '' : 'hidden'}`}
          src="/documents.png"
          width={300}
          height={300}
          alt="Documents image" />

        
        <SearchBar handleVisible={handleVisible} type={type}/>
      </div>
    </NextUIProvider>
  )
}

