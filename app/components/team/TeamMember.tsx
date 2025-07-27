type TeamMemberProps = {
    name: string
    image: string
    description: string
}

export default function TeamMember(props: TeamMemberProps) {
    return <div className="max-w-128 bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-300 rounded-lg shadow-2xl p-3 group">
        <div className="m-2">
            <img alt={props.name} className="mx-auto group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={props.image} />
            <h2 className="font-semibold my-4 text-2xl text-center">{props.name}</h2>
            <p className="text-lg text-center font-medium">{props.description}</p>
        </div>
    </div>
}