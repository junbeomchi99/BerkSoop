"use client";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "../modal/Modal";

export default function Navbar() {
    const [showModal, setShowModal] = useState(false)

    return (
        <nav className="bg-white px-8 py-8 flex justify-between flex-col md:flex-row sticky top-0">
            <h1 className="text-2xl font-bold grid place-content-center mb-2 md:mb-0">
                <Link href='/'>B-soop</Link>
            </h1>
            <button className = "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"><Link href ="/clubs"></Link><Link href='/' onClick={() => setShowModal(true)}>Login</Link></button>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                <div className="p-6 lg:px-6 text-left">
                    <h3 className="mb-4 text-2xl font-medium">Sign In</h3>
                    <form className="space-y-6" action="#">
                        <div>
                            <label htmlFor='email' className="block mb-2 text-sm font-medium">Email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@berkeley.edu" required/>
                        </div>
                        <div>
                            <label htmlFor='password' className="block mb-2 text-sm font-medium">Password</label>
                            <input type="password" name="password" id="password" className="bg-gray-50 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                        </div>
                        <button type="submit" className="w-full text-gray-800 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 block rounded-lg p-2.5">Login</button>
                    </form>
                </div>
            </Modal>
        </nav>
    )
}