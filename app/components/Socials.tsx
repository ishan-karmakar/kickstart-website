import img from '../images/web.svg'
import img2 from '../images/app.svg'
import { Link } from 'react-router'

const SOCIALS = [
    { image: img, link: "mailto:kickstartnp@gmail.com", alt: "Email" },
    { image: img2, link: "tel:+1111111111", alt: "Phone" },
    { image: img, link: "https://linkedin.com", alt: "LinkedIn" },
    { image: img2, link: "https://instagram.com", alt: "Instagram" }
]

export default function Socials() {
    return <div className="py-12" >
        <section data-aos="zoom-in-down">
            <div className="my-4 py-4">
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Socials</h2>

                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900'></div>
                </div>
            </div>

            <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                <div className="flex flex-row justify-center gap-5">
                    {SOCIALS.map(social => <Link to={social.link} key={social.link} className='flex bg-white aspect-square transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-300 hover:text-white rounded-lg shadow-2xl p-3 group'>
                        <img alt={social.alt} className="group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={social.image} />
                    </Link>)}
                </div>
            </div>
        </section>
    </div>
}