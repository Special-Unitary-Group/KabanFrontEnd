"use client";
import { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";

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
      <h1>This is a new page</h1>
      </div>
    </NextUIProvider>
  )
}

