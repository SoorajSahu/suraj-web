import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";

export default function Nav({ children , color}) {
    return (
      <nav id="header" className=" w-full z-30 top-0 text-white">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div className="pl-4 flex items-center">
              <Link className="toggleColour text-black no-underline hover:no-underline font-sans  text-2xl lg:text-4xl" href="/" >
                {/**--Icon from: http://www.potlabicons.com/ **/}

                <Image alt="Suraj sahu" src="/logo.svg" height={1000} width={700}/>

              </Link>
            </div>
            <div className="block lg:hidden pr-4">
              <button id="nav-toggle" className="flex items-center p-1 text-2xl text-gray-700 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                <FaBars/>
              </button>
            </div>
            <div className="w-full flex-grow  lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-[#013437] lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
              <ul className="list-reset lg:flex justify-end flex-1 items-center">
                {children}
              </ul>
             
            </div>
          </div>
          <Link href="#">
          <button title="Contact me"
        className="fixed z-90 bottom-10 right-8 bg-yellow-300 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-yellow-500 hover:drop-shadow-2xl  duration-300">&#9993;</button>
        </Link>
        </nav>
    )
  }