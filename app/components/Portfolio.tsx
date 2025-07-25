import { Link } from "react-router";

export default function Portfolio() {
    return (
        <>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                    <div className="m-2 text-justify text-sm flex flex-col items-center">
                        <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Email</h4>
                        <p className="text-xl md:text-2xl font-bold leading-5 h-auto md:h-24 text-center">
                            <a href="mailto:info@kickstart.com" className="text-blue-900 underline">kickstartnp@gmail.com</a>
                        </p>
                    </div>
                </div>
                <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                    <div className="m-2 text-justify text-sm flex flex-col items-center">
                        <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Phone</h4>
                        <p className="text-xl md:text-2xl font-bold leading-5 h-auto md:h-24 text-center">
                            <a href="tel:+1234567890" className="text-blue-900 underline">+1 (512) 415-8572</a>
                        </p>
                    </div>
                </div>
                <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                    <div className="m-2 text-justify text-sm flex flex-col items-center">
                        <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">LinkedIn</h4>
                        <p className="text-xl md:text-2xl font-bold leading-5 h-auto md:h-24 text-center">
                            <a href="https://www.linkedin.com/company/kickstart" target="_blank" rel="noopener noreferrer" className="text-blue-900 underline">linkedin.com/company/kickstart</a>
                        </p>
                    </div>
                </div>
                <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                    <div className="m-2 text-justify text-sm flex flex-col items-center">
                        <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Instagram</h4>
                        <p className="text-xl md:text-2xl font-bold leading-5 h-auto md:h-24 text-center">
                            <a href="https://instagram.com/kickstart" target="_blank" rel="noopener noreferrer" className="text-blue-900 underline">@kickstartnp</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}