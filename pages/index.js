import Head from 'next/head'
import Image from 'next/image'
import NavItem from '../components/nav/NavItem'
import Nav from '../components/nav/Nav2.jsx'
import ContactSection from '../components/contact/contact'
import Footer from '../components/footer/footer'
import { ToolCard } from '../components/cards/index'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import CONF from '../config/site.config.json'


let topTool = CONF.homepage.topTools;
let myWork = CONF.homepage.myWork;

function Icon({ children }) {
  return <div className={` text-7xl `}>{children}</div>
}

function HeaderContent() {
  let headPart = CONF.pages['home']
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
            <div className={`w-full md:w-6/12 py-6 text-center`}>
              <Image className={`w-full md:w-4/5 z-70 transition hover:blur-sm delay-500 ease-in-out `} style={{ rotate: `${degr}deg` }} src="/roll.svg" alt='Hero' width={100} height={100} />
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
        <section className="container mx-auto  p-6  mb mt-10 mb-15">

          <h3 className=" text-4xl text-center leading-tight">
            Top Tools 🛠
          </h3>
          <div className="container  px-3 mx-auto flex flex-wrap sm:flex-wrap gap-4 pt-20 pb-6 ">
            {
              topTool.map((d, i) =>
                <ToolCard key={i} url={d.url} content={d.content} head={d.head} tagColor={d.tagColor} type={d.type}/>
              )
            }
          </div>
          <center>
            <Link href={'/tools'}>
              <button className="mx-auto  text-center lg:mx-0 hover:underline  text-black rounded mb-6 mt-4  focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Show All 👽...
              </button>
            </Link>
          </center>

        </section>

        {/* tools section */}
        <section className="container mx-auto  p-6  mb mt-5 mb-15">

          <h3 className=" text-4xl text-center leading-tight">
            My Figma Works 🖋
          </h3>
          <div className="container  mx-auto flex flex-wrap sm:flex-wrap gap-4 pt-20 pb-6 ">
            {
              myWork.map((d, i) =>
                <div key={i} className="   rounded-2xl  shadow-lg    lg:w-1/6 md:w-2/6  flex flex-col flex-grow flex-shrink  transform transition hover:shadow-xl hover:scale-105 duration-300 ease-in-out ">
                 <Image alt={d.alt} style={{height:'100%'}} className='' width={1200} height={800} src={d.imgSrc}/>
                 <div className="py-3 text-center">
                  <p>{d.alt}</p>
                 </div>
                </div>
              )
            }
          </div>
          <center>
            <Link href={'#'}>
              <button className="mx-auto  text-center lg:mx-0 hover:underline  text-black rounded mb-6 mt-4  focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Show All 😎...
              </button>
            </Link>
          </center>

        </section>

        {/* contact me section */}
        <ContactSection/>



        {/**--Footer**/}
        <Footer/>
      </div>
    </>
  )
}
