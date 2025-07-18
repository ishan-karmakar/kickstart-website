import { useEffect, useState } from "react";
import { Link } from "react-router";
import NavLinks from "./NavLinks";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [top, setTop] = useState(false)
    const handleClick = () => setIsOpen(!isOpen)

    useEffect(() => {
        const scrollHandler = () => { setTop(window.pageYOffset <= 10) }
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [top])

    return <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${!top && 'bg-white shadow-lg'}`}>
        <div className="flex flex-row justify-between items-center py-2">
            <div className="flex flex-row justify-center md:px-12 md:mx-12 items-center text-center font-semibold">
                <Link to="/#hero"><h1 className="font-extrabold text-4xl text-blue-900">Kickstart</h1></Link>
            </div>
            <div className="group flex flex-col items-center">
                <div className='hidden space-x-6 lg:inline-block p-5'>
                    <NavLinks />
                </div>

                <div className={`fixed transition-transform duration-300 ease-in-out transit flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white lg:hidden shadow-xl top-14 ${isOpen ? "block" : "hidden"} `}>
                    <div className='flex flex-col space-y-6'>
                        <NavLinks />
                    </div>
                </div>

            </div>
        </div>
    </nav>
}