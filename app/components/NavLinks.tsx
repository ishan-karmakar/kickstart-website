import { Link } from "react-router";

export default function NavLinks() {
    return <>
        <Link viewTransition className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/#about">
            Home
        </Link>
        <Link viewTransition className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/#services">
            About Us
        </Link>
        <Link viewTransition className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/#services">
            Our Mission
        </Link>
        <Link viewTransition className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/#services">
            Services
        </Link>
        <Link viewTransition className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="mailto:kickstartnp@gmail.com">
            Contact Us
        </Link>
    </>
}