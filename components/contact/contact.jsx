
import Link from "next/link";
import { socialMedia } from '../../config/social.config'
export default function contact() {
    return (<section className="bg-white border-b py-8">
        <h2 className="w-full my-2 text-4xl  leading-tight text-center  ">
            Contact Me 🤙
        </h2>
        <div className="flex justify-between md:justify-center lg:justify-center pt-16 pb-6 px-2">
            {
                socialMedia.map((e, i) =>
                    <div key={i} className=" px-1 md:px-10 lg:px-10 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ">
                        <Link href={e.link ?? '#'}>

                            <div className={` text-5xl rounded-xl  transition  delay-200 ease-in-out   text-gray-600 ${e.color} `}>
                                {e.icon}
                            </div>
                        </Link>
                    </div>)
            }
        </div>
    </section>)
}