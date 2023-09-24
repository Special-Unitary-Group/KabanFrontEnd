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
                    title={prompt}
                    abstract={response}
                    author={`Harsh Gupta`}
                    date={`Thu, 21 Sep 2023`}
                    url={`https://arxiv.org/abs/2309.12281`} />
               
            </div>
        </>

    );
}
