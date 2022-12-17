import Link from "next/link"


export  function ToolCard({key,tagColor, url, head, content, type}) {
    return ( 
    <div key={key} className="  rounded-md border-2 px-3 py-2 lg:w-1/6 md:w-2/6  flex flex-col flex-grow flex-shrink focus:outline-none focus:shadow-outline transform transition hover:shadow-xl hover:scale-105 duration-300 ease-in-out ">

        <div className={` rounded-xl   hover:opacity-100 `}>

            <h1 className="text-4lg text-black mb-3 uppercase ">{head}</h1>
            <p className='text-gray-600 leading-6 line-clamp-3'>{content}</p>
            <br />
            <div className="text-xs">
                <span className={`mt-4 border rounded-full ${tagColor} p-1`}>{type}</span>
            </div>
            <div className="border-b-2  mt-4 "></div>
            <Link href={url}>
                <button className="py-1 px-4  border border-yellow-400 font-semibold mt-5 rounded-md transition hover:bg-yellow-400 text-black duration-300 ease-in-out " >
                    Go &rarr;
                </button>
            </Link>


        </div>
    </div>)
}