import { Link } from "react-router";

type SocialProps = {
    link: string
    name: string
    image: string
}

export default function Social(props: SocialProps) {
    return <Link to={props.link} key={props.link} className='flex bg-white aspect-square transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-300 hover:text-white rounded-lg shadow-2xl p-3 group' >
        <img alt={props.name} className="group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={props.image} />
    </Link>
}