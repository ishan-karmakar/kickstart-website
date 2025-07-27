import { Link } from "react-router";

export default function NavLinks() {
    return <>
        <Link viewTransition className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/#about">
            Home
        </Link>
        <Link viewTransition className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/#our-team">
            Our Team
        </Link>
        <Link viewTransition className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/#mission">
            Our Mission
        </Link>
        <Link viewTransition className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/#socials">
            Socials
        </Link>
    </>
}