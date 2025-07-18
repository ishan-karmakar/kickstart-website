import React, { useState } from "react";
import type { Route } from "../+types/root";
import Navbar from "../components/Navbar";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Kickstart | Contact" }
    ]
}

interface Error {
    first_name?: string
    last_name?: string
    email?: string
    phone_number?: string
    message?: string
}

export default function Contact() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState<Error>({})

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    return <>
        <div><Navbar /></div>
        <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
            <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                <form onSubmit={sendEmail}>
                    <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2x1 shadow-2x1">
                        <div className="flex">
                            <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4x1">Send us a message</h1>
                        </div>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                            <div>
                                <input type="text" name="first-name"
                                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    placeholder="First Name" value={firstName}
                                    onChange={e => setFirstName(e.target.value)} />
                                {errors && <p className="text-red-500 text-sm">{errors.first_name}</p>}
                            </div>
                            <div>
                                <input type="text" name="last-name"
                                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    placeholder="Last Name" value={lastName}
                                    onChange={e => setLastName(e.target.value)} />
                                {errors && <p className="text-red-500 text-sm">{errors.last_name}</p>}
                            </div>
                            <div>
                                <input type="email" name="email"
                                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    placeholder="Email" value={email}
                                    onChange={e => setEmail(e.target.value)} />
                                {errors && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>
                            <div>
                                <input type="number" name="phone-number"
                                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    placeholder="Phone Number" value={phone}
                                    onChange={e => setPhone(e.target.value)} />
                                {errors && <p className="text-red-500 text-sm">{errors.phone_number}</p>}
                            </div>
                        </div>
                        <div className="my-4">
                            <textarea name="message" placeholder="Message"
                                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                onChange={(e) => setMessage(e.target.value)}
                                value={message} />
                            {errors && <p className="text-red-500 text-sm">{errors.message}</p>}
                        </div>
                        <div className="my-2 w-1/2 lg:w-2/4">
                            <button type="submit"
                                className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                                Send Message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
}