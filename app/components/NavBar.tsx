import { useEffect, useState } from "react";
import { Link } from "react-router";

type NavLinkProps = {
    name: string
    to: string
}

function NavLink({ name, to }: NavLinkProps) {
    return <Link viewTransition className="px-4 text-gray-500 group" to={to}>
        <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] duration-500 ease-out">{name}</span>
    </Link>
}

export default function Navbar() {
    const [top, setTop] = useState(false)

    useEffect(() => {
        const scrollHandler = () => { setTop(window.pageYOffset <= 10) }
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [top])

    return <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${!top && 'bg-white shadow-lg'}`}>
        <div className="flex flex-row justify-between items-center py-2">
            <div className="flex flex-row ml-5 items-center">
                <img src="/android-chrome-512x512.png" className="h-20 pr-2" />
                <Link to="/#hero"><h1 className="font-extrabold text-4xl text-blue-900">Kickstart</h1></Link>
            </div>
            <div className='text-lg font-extrabold space-x-6 lg:inline-block p-5'>
                <NavLink to="/#about" name="Home" />
                <NavLink to="/#mission" name="Our Mission" />
                <NavLink to="/#our-team" name="Our Team" />
                <NavLink to="/#socials" name="Socials" />
            </div>
        </div>
    </nav>
}