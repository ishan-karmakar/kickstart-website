import { Link } from "react-router";

export default function NavLinks() {
    return <>
        <Link viewTransition className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/#about">
            About
        </Link>
        <Link viewTransition className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/#services">
            Services
        </Link>
    </>
}