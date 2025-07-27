import { Link } from "react-router";

export default function NavLinks() {
    return <>
        <Link viewTransition className="px-4 text-gray-500 group" to="/#about">
            <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] duration-500 ease-out">Home</span>
        </Link>
        <Link viewTransition className="px-4 text-gray-500 group" to="/#our-team">
            <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] duration-500 ease-out">Our Team</span>
        </Link>
        <Link viewTransition className="px-4 text-gray-500 group" to="/#mission">
            <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] duration-500 ease-out">Our Mission</span>
        </Link>
        <Link viewTransition className="px-4 text-gray-500 group" to="/#socials">
            <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] duration-500 ease-out">Socials</span>
        </Link>
    </>
}