import img from '~/images/web.svg'
import img2 from '~/images/app.svg'
import Social from './Social'

export default function Socials() {
    return <div className="py-12" id="socials">
        <section data-aos="zoom-in-down">
            <div className="my-4 py-4">
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Socials</h2>

                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900'></div>
                </div>
            </div>

            <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                <div className="flex flex-row justify-center gap-5">
                    <Social name="Email" link="mailto:kickstartnp@gmail.com" image={img} />
                    <Social name="Phone" link="tel:+1111111111" image={img2} />
                    <Social name="LinkedIn" link="https://linkedin.com" image={img} />
                    <Social name="Instagram" link="https://instagram.com" image={img2} />
                </div>
            </div>
        </section>
    </div>
}