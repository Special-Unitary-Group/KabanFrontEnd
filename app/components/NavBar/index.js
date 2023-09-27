import React from "react";
import Image from 'next/image'
export default function App() {
  return (

    <nav className="flex flex-row justify-between items-center pt-5 pl-10 pr-10">
        <section>
            <Image src="/logo.png" alt="Picture of the author" width={100} height={100} />
        </section>
        <section>
          <ul className="flex flex-row gap-10">
            <li><a href="#" className="hover:text-blue-500">Rediscover</a></li>
            <li><a href="#" className="hover:text-blue-500">Explore</a></li>
            <li><a href="/loadpapers" className="hover:text-blue-500">Load Papers</a></li>
          </ul>
        </section>
        <section className="flex justify-start">
          <a className="">Sign In</a>
        </section>
    </nav>
   
  );
}
