"use client";

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import Particles from '@/components/magicui/particles';
import ShineBorder from '@/components/magicui/shine-border';
import { useState } from 'react';

export default function Home () {
  function accum(s) {
    return s
      .split("")
      .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
      .join("-");
  }

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setOutput(accum(e.target.value));
  };

  return (
    <div className='relative font-sans flex items-center justify-center min-h-screen p-8 text-[#fff]'>
      <Particles
        className='absolute inset-0 -z-10'
        quantity={100}
        ease={80}
        color={'#ffffff'}
        refresh
      />
      <div>
        <div className='absolute bottom-0 h-[350px] lg:h-[600px] w-[350px] lg:w-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgb(104,0,255,0.09),rgba(255,255,255,0))] -z-10'></div>
      </div>
      <div className='w-full max-w-md p-8 bg-gray-900 rounded-3xl shadow-2xl'>
        <div className='flex flex-col items-center text-center gap-4'>
          <h1 className='text-4xl font-bold'>EL ACCUM DE CAFÉ</h1>
          <Badge className='px-3 py-1'>Version 1.0 - Dev by Zarfala</Badge>
          <span className='text-lg text-gray-400'>
            Transforma el nombre de tus bebidas con la técnica del acumulador
          </span>

          <input
            type="text"
            placeholder="Escribe una cadena..."
            value={input}
            onChange={handleInputChange}
            className='w-full p-4 text-gray-200 bg-gray-800 rounded-lg border border-solid border-white/[.145] focus:outline-none mt-4'
          />
          <div className='w-full p-4 mt-4 bg-gray-800 rounded-lg shadow-md border border-solid border-white/[.145]'>
            <p className='text-purple-400 text-xl font-mono'>{output || "-"}</p>
          </div>

          <a
            href='https://github.com/zarfadev/El-Accum-De-Cafe'
            target='_blank'
            rel='noopener noreferrer'
            className='mt-6'
          >
            <ShineBorder
              className='text-center capitalize bg-background transition-[0.6s] hover:scale-105'
              color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
            >
              <span className='whitespace-pre-wrap text-center leading-none tracking-tight text-white text-sm py-0 sm:text-base flex items-center justify-center gap-2 px-6 xl:min-w-40'>
                <Image
                  aria-hidden
                  src='/github2.svg'
                  alt='GitHub icon'
                  width={20}
                  height={20}
                />
                Ver en GitHub
              </span>
            </ShineBorder>
          </a>
        </div>
      </div>
    </div>
  );
}
