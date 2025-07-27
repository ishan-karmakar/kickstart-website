import { Link } from "react-router"

type NavLinkProps = {
    name: string
    to: string
}

export default function NavLink({ name, to }: NavLinkProps) {
    return <Link viewTransition className="px-4 text-gray-500 group" to={to}>
        <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] duration-500 ease-out">{name}</span>
    </Link>
}