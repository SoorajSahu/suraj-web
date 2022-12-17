import Link from "next/link";

export default function NavItem({ href, hasOutline, isActive, children , title }) {
    return (
            <li>
                <Link className={`block py-2 pl-3 pr-4  hover:bg-green-400 ${isActive} ${ isActive ?  ' bg-green-300 md:px-3 md:py-2 text-gray-700 ': ''}  rounded transition   delay-200 ease-in-out `} aria-current="page"href={href}>{title}</Link>
              </li>

    )
  }
  