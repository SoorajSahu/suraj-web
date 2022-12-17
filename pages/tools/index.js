import Head from 'next/head'
import Image from 'next/image'
import NavItem from '../../components/nav/NavItem'
import Nav from '../../components/nav/Nav2.jsx'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import ContactSection from '../../components/contact/contact'
import CONF from '../../config/site.config.json'
import {useRouter} from 'next/router'
import { ToolCard } from '../../components/cards'


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


export default function Tool() {
  

  return (
    <>
      <HeaderContent/>
      <div className="leading-normal tracking-normal font-Oswald  bg-white" >
        <Nav>
          {
            CONF.urls.map((url, i) => <NavItem key={i} title={url.title} href={url.url} isActive={0} />)
          }
        </Nav>

        {/* Productivity Tool  section */}
        <section className="container mx-auto  p-6  mb mt-2 mb-28">
        <h1 className="my-4 text-4xl px-1 underline  leading-tight">
           Tools 🛠
        </h1>

          <h3 className="my-4 text-2xl px-1 underline text-center leading-tight">
          Productivity Tools 😇🧘‍♂️
          </h3>
          <div className="container  px-1 mx-auto flex flex-wrap sm:flex-wrap gap-4 pt-10 pb-6 ">
            {
              topTool.map((d, i) =>
                <ToolCard key={i} url={d.url} content={d.content} head={d.head} tagColor={d.tagColor} type={d.type}/>
              )
            }
          </div>
        </section>

         {/* contact me section */}
       <ContactSection/>
       

        {/**--Footer**/}

        <footer className="border border-t-gray-200 p-4 text-center">
          <h2 className=' text-xl '>Made with ❤</h2>

        </footer>

      </div>
    </>
  )
}
