import Head from 'next/head'
import Image from 'next/image'
import NavItem from '../../components/nav/NavItem'
import Nav from '../../components/nav/Nav2.jsx'
import Link from 'next/link'
import ContactSection from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
import CONF from '../../config/site.config.json'
import {useRouter} from 'next/router'


let topTool = CONF.homepage.topTools;

function Icon({ children }) {
  return <div className={` text-7xl `}>{children}</div>
}

function HeaderContent() {
  let headPart = CONF.pages['tools']
  return(
  <Head>
    <title>{headPart.title}</title>
    <meta name="description" content={headPart.description} />
  </Head>)
}


export default function JapaTool() {
  

  return (
    <>
      <HeaderContent/>
      <div className="leading-normal tracking-normal font-Oswald  bg-[url('https://vedabase.io/static/img/body-bg.jpg')] bg-opacity-40" >
        <Nav>
          {
            CONF.urls.map((url, i) => <NavItem key={i} title={url.title} href={url.url} isActive={0} />)
          }
        </Nav>


        {/* tools section */}
        <section className="container mx-auto  p-6  mb mt-2 mb-28">

          <h3 className="my-4 text-6xl text-center leading-tight">
            Japa App 🧘‍♀️📿
          </h3>
          <div className="container  px-3 mx-auto flex flex-wrap sm:flex-wrap gap-4 pt-20 pb-6 ">
            {
              topTool.map((d, i) =>
                <div key={i} className="  rounded-md border-2 px-3 py-2 lg:w-1/6 md:w-2/6  flex flex-col flex-grow flex-shrink focus:outline-none focus:shadow-outline transform transition hover:shadow-xl hover:scale-105 duration-300 ease-in-out ">

                  <div className={` rounded-xl   hover:opacity-100 `}>

                    <h1 className="text-4lg text-black mb-3 uppercase ">Japa Tool</h1>
                    <p className='text-gray-600 leading-6 line-clamp-3'>{d.content}</p>
                    <br />
                    <div className="text-xs">
                      <span className={`mt-4 border rounded-full ${d.tagColor} p-1`}>{d.type}</span>
                    </div>
                    <div className="border-b-2[]  mt-4 "></div>
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
        <Footer/>

      </div>
    </>
  )
}
