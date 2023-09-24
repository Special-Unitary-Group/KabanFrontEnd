"use client"
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Card from '../components/card';
import { annotate } from 'rough-notation';

export default function PromptResponse() {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const promptValue = searchParams.get('prompt');
        const responseValue = searchParams.get('response');
        setPrompt(promptValue);
        setResponse(responseValue);
    }, []);

    return (
        <>
            <NavBar />
            <div className="bg-gray-100 flex flex-col w-full justify-center items-center mt-10">
                <Card key={1}
                    title={`Personas`}
                    abstract={response}
                    author={`Autor`}
                    date={`Fecha`}
                    url={`URL`} />
                <Card key={1}
                    title={`Uses of thasdasd`}
                    abstract={response}
                    author={`Autor`}
                    date={`Fecha`}
                    url={`URL`} id={`note`}/>
            </div>
        </>

    );
}
