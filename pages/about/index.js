import Head from 'next/head'
import Image from 'next/image'
import NavItem from '../../components/nav/NavItem'
import Nav from '../../components/nav/Nav2.jsx'
import ContactSection from '../../components/contact/contact'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import CONF from '../../config/site.config.json'


let topTool = CONF.homepage.topTools;

function Icon({ children }) {
  return <div className={` text-7xl `}>{children}</div>
}

function HeaderContent() {
  let headPart = CONF.pages['about']
  return (
    <Head>
      <title>{headPart.title}</title>
      <meta name="description" content={headPart.description} />
    </Head>)
}


export default function Home() {
  let [degr, setdegr] = useState(0);
  useEffect(() => {

    window.onscroll = (e) => ons(Math.floor((window.scrollY / 6)))
  }, [])

  let ons = (de) => {
    setdegr(de)
  }



  return (
    <>
      <HeaderContent />
      <div className="leading-normal tracking-normal font-Oswald  bg-white" >
        <Nav>
          {
            CONF.urls.map((url, i) => <NavItem key={i} title={url.title} href={url.url} isActive={0} />)
          }
        </Nav>

        {/**--Hero**/}
        <div >
          <div className="container px-10 py-9 mx-auto flex flex-wrap flex-col md:flex-row ">
            {/**--Left Col**/}
            <div className={`w-full md:w-6/12 py-6 `}>
              <div className="  rounded-md border px-3 py-2 m-10 flex flex-col flex-grow flex-shrink focus:outline-none focus:shadow-outline transform transition hover:shadow-xl  duration-300 ease-in-out ">

                <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                      Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                      Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                      Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                      Forgot Password?
                    </a>
                  </div>
                </form>
              </div>
            </div>

            {/**--Right Col**/}
            <div className="flex  flex-col w-full md:w-2/5 justify-center  lg:text-left md:text-left  sm:text-center ">
              <p className="uppercase tracking-loose w-full">About Me</p>
              <h1 className="my-4 text-5xl   font-bold">
                hi, I&apos;m Suraj sahu👋
              </h1>
              <p className=" leading-normal text-2xl mb-8 text-gray-500">
                I&apos;m A Krishna Bhakt🧘‍♂️<br />
                A blogger ✍<br />
                A Youtuber 📸 <br />
                A painter 🎨<br />
                A software engineer 👨‍💻 <br />
              </p>
            </div>
          </div>
        </div>

        {/* tools section */}
        <section className="container mx-auto  p-6  mb mt-28 mb-28">

          <h3 className="my-4 text-4xl text-center leading-tight">
            Top Tools 🛠
          </h3>
          <div className="container  px-3 mx-auto flex flex-wrap sm:flex-wrap gap-4 pt-20 pb-6 ">
            {
              topTool.map((d, i) =>
                <div key={i} className="  rounded-md border px-3 py-2 lg:w-1/6 md:w-2/6  flex flex-col flex-grow flex-shrink focus:outline-none focus:shadow-outline transform transition hover:shadow-xl hover:scale-105 duration-300 ease-in-out ">

                  <div className={` rounded-xl   hover:opacity-100 `}>

                    <h1 className="text-4lg text-black mb-3 uppercase ">Japa Tool</h1>
                    <p className='text-gray-600 leading-6 line-clamp-3'>{d.content}</p>
                    <br />
                    <div className="text-xs">
                      <span className={`mt-4 border rounded-full ${d.tagColor} p-1`}>{d.type}</span>
                    </div>
                    <div className="border-b  mt-4 "></div>
                    <Link href={'#'}>
                      <button className="py-1 px-4  border border-yellow-400 font-semibold mt-5 rounded-md transition hover:bg-yellow-400 text-black duration-300 ease-in-out " >
                        Go &rarr;
                      </button>
                    </Link>


                  </div>
                </div>
              )
            }
          </div>
          <center>
            <Link href={'#'}>
              <button className="mx-auto  text-center lg:mx-0 hover:underline  text-black rounded mb-6 mt-4  focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Show All 👽...
              </button>
            </Link>
          </center>

        </section>

        {/* contact me section */}
        <ContactSection/>

        {/**--Footer**/}

        <footer className="border border-t-gray-200 p-6 text-center">
          <h2 className=' text-xl '>Made with ❤</h2>

        </footer>

      </div>
    </>
  )
}
