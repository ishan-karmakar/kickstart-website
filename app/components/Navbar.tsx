import { useEffect, useState } from "react";
import { Link } from "react-router";
import NavLinks from "./NavLinks";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [top, setTop] = useState(false)

    useEffect(() => {
        const scrollHandler = () => { setTop(window.pageYOffset <= 10) }
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [top])

    return <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${!top && 'bg-white shadow-lg'}`}>
        <div className="flex flex-row justify-between items-center py-2">
            <div className="flex flex-row md:mx-12 items-center">
                <img src="/favicon.ico" />
                <Link to="/#hero"><h1 className="font-extrabold text-4xl text-blue-900">Kickstart</h1></Link>
            </div>
            <div className='text-lg font-extrabold space-x-6 lg:inline-block p-5'>
                <NavLinks />
            </div>
        </div>
    </nav>
}