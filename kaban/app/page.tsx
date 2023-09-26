"use client";
import { useState } from 'react';
import { NextUIProvider } from "@nextui-org/react";

import InputWithButtonAndAvatar from './components/SearchBar';
import DropDown from './components/Dropdown';
import Image from 'next/image';
export default function Home() {
  const [inputValue, setInputValue] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(true);
  const [type, setType] = useState<string>('');

  const handleVisible = () => {
    setVisible(false);
    console.log('a')
  };

  return (
    <NextUIProvider>
      <div className='flex flex-col items-center justify-center h-full mt-14 pb-10'>
        <DropDown visible={visible} type={type} setType={setType} />
        <Image src="/toño.png" width={200} height={200} alt="a" />

        
        <InputWithButtonAndAvatar handleVisible={handleVisible} type={type}/>
      </div>
    </NextUIProvider>
  )
}

