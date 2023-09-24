"use client";
import Image from 'next/image'
import { IoSend } from "react-icons/io5";
import { useState } from 'react';
import {NextUIProvider} from "@nextui-org/react";
import { GlobalWorkerOptions } from 'pdfjs-dist/es5/pdf';
import SearchBar from "./components/SearchBar";
import NavBar from './components/NavBar';

GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  const handleLoad = (f) => {   
    
}
  return (
    <NextUIProvider>
      <NavBar/>
      <div className='flex flex-col items-center justify-center h-full mt-20'>
        <Image src="/documents.png" width={300} height={300} alt="ACME" />
        <button 
        onClick={handleLoad}
        className='p-4 bg-blue-600 hover:bg-blue-800'>Integrate Your Papers</button>
      </div>
    </NextUIProvider>
  )
}

