
import { FaEnvelope, FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const socials = [
  { name: 'Email', link: 'mailto:kickstartnp@gmail.com', icon: <FaEnvelope size={24} /> },
  { name: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61578434653046', icon: <FaFacebook size={24} /> },
  { name: 'X', link: 'https://x.com/kickstartnp', icon: <FaXTwitter size={24} /> },
  { name: 'Instagram', link: 'https://www.instagram.com/kickstartnp', icon: <FaInstagram size={24} /> },
];

export default function Socials() {
    return (
        <div className="py-12" id="socials">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Socials</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                </div>
                <div className="flex flex-row justify-center gap-6 mt-6">
                    {socials.map(social => (
                        <a
                            key={social.name}
                            href={social.link}
                            target={social.link.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            className="bg-white rounded-full p-3 shadow-lg hover:bg-blue-100 transition-colors duration-200 flex items-center justify-center"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
}