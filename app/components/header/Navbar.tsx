"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Modal } from "../modal/Modal";
import {signInUser, registerUser, signOutUser} from "../../firebase/Firebase"


export default function Navbar() {
    const [showSignInModal, setShowSignInModal] = useState(false) //Login-in modal _ 로그인 모달
    const [showSignUpModal, setShowSignUpModal] = useState(false) //Sign-up modal _ 사인업 모달
    const [showNonAdminSuccessModal, setNonAdminSuccessModal] = useState(false); //학생으로써 회원가입 성공시 띄우는 모달
    const [showAdminSuccessModal, setAdminShowSuccessModal] = useState(false); //클럽으로써 회원가입 성공시 띄우는 모달
    const [loggedInUser, setLoggedInUser] = useState(null); //if we should show "LOG_IN" button or "user_profile"

    const [registerError, setRegisterError] = useState<string | null>(null)
    const [isAdmin, setIsAdmin] = useState(false);

    const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        try {
            const res = await registerUser(
                event.target.email.value,
                event.target.password.value,
                event.target.Fname.value,
                event.target.Lname.value,
                isAdmin
            );
            console.log("Registered user:", res);
            setShowSignUpModal(false);
            if (isAdmin) {
                setAdminShowSuccessModal(true); 
            } else {
                setNonAdminSuccessModal(true); //회원가입 성공시 모달 띄우기
            }
            
        } catch (error) {
            console.error("Error registering user:", error.message);
            setRegisterError(error.message);
        }
    };
    
    
    const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        try {
            const user = await signInUser(email, password);
            console.log("Signed in user:", user);
            setLoggedInUser(true);
            setShowSignInModal(false);
        } catch (error) {
            console.error("Error signing in user:", error.message);
            setRegisterError(error.message);
        }
        
    };
    const handleSignOut = async () => {
        try {
            await signOutUser();
            setLoggedInUser(null);
        } catch (error) {
            console.error("Error signing out user:", error.message);
        }
    };

    return (
        <nav className="bg-white px-8 py-8 flex justify-between flex-col md:flex-row sticky top-0">
            <h1 className="text-2xl font-bold grid place-content-center mb-2 md:mb-0">
                <Link href='/'>B-soop</Link>
            </h1>
            {loggedInUser ? (
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => handleSignOut()}> Sign Out </button>
                ) : (
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => setShowSignInModal(true)}> Login </button>
            )}
{/* Modal for Sign IN - 로그인 */}
            <Modal isVisible={showSignInModal} onClose={() => setShowSignInModal(false)}>
                <div className="p-6 lg:px-6 text-left" onSubmit={handleSignIn}>
                    <h3 className="mb-4 text-xl font-medium">Sign In</h3>
                    <form className="space-y-6" onSubmit={handleSignIn}>
                        <div>
                            <label htmlFor='email' className="block mb-2 text-sm font-medium">Email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@berkeley.edu" required/>
                        </div>
                        <div>
                            <label htmlFor='password' className="block mb-2 text-sm font-medium">Password</label>
                            <input type="password" name="password" id="password" className="bg-gray-50 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 block rounded-lg p-2.5">Login</button>
                    </form>
                    <p className="text-sm mt-6">Don't have an account? <button onClick={() => setShowSignInModal(false)}><a className="text-blue-700" onClick={() => setShowSignUpModal(true)}>Sign Up</a></button></p>
                </div>
            </Modal>
{/* Modal for Sign UP - 회원가입 */}
            <Modal isVisible={showSignUpModal} onClose={() => setShowSignUpModal(false)}> 
                <div className="p-6 lg:px-6 text-left">
                    <h3 className="mb-4 text-xl font-medium">Register</h3>
                    {registerError && (
                        <p className="text-red-500 mb-4">{registerError}</p>
                    )}
                    <form className="space-y-6" onSubmit={handleSignUp}>
                        <div className="flex justify-between mb-4">
                            <button onClick={() => setIsAdmin(false)} className={isAdmin
                                ? "w-1/2 text-gray-500 hover:text-gray-700 border-gray-500 border-t-2 border-l-2 border-b-2 rounded-tl-lg rounded-bl-lg focus:outline-none"
                                : "w-1/2 text-blue-700 hover:text-blue-900 font-medium border-blue-700 border-t-2 border-l-2 border-b-2 rounded-tl-lg rounded-bl-lg focus:outline-none bg-gray-200"
                            }> Student </button>
                            <button onClick={() => setIsAdmin(true)} className={!isAdmin
                                ? "w-1/2 text-gray-500 hover:text-gray-700 border-gray-500 border-t-2 border-r-2 border-b-2 rounded-tr-lg rounded-br-lg focus:outline-none"
                                : "w-1/2 text-blue-700 hover:text-blue-900 font-medium border-blue-700 border-t-2 border-r-2 border-b-2 rounded-tr-lg rounded-br-lg focus:outline-none bg-gray-200"
                            }> Admin </button>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-75">
                                <label htmlFor='Fname' className="block mb-2 text-sm font-medium">First</label>
                                <input type="Fname" name="Fname" id="Fname" className="bg-gray-50 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required/>
                            </div>
                            <div className="w-25">
                                <label htmlFor='Lname' className="block mb-2 text-sm font-medium">Last</label>
                                <input type="Lname" name="Lname" id="Lname" className="bg-gray-50 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Denero" required/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor='email' className="block mb-2 text-sm font-medium">Email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@berkeley.edu" required/>
                        </div>
                        <div>
                            <label htmlFor='password' className="block mb-2 text-sm font-medium">Password</label>
                            <input type="password" name="password" id="password" className="bg-gray-50 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 block rounded-lg p-2.5">Sign Up</button>
                    </form>
                    <p className="text-sm mt-6">Already have an account? <button onClick={() => setShowSignUpModal(false)}><a className="text-blue-700" onClick={() => setShowSignInModal(true)}>Sign In</a></button></p>
                </div>
            </Modal>
{/* Modal for successful Signup student - 학생 회원가입 성공시 */}
            <Modal isVisible={showAdminSuccessModal} onClose={() => setAdminShowSuccessModal(false)}>
                <div className="p-6 lg:px-6 text-center"> 
                    <h3 className="mb-4 text-xl font-medium">Admin Sign Up Success</h3>
                    <p className="text-black font-bold text-lg mb-4">Registration Processed</p>
                    <p className="text-gray-700 mb-4">We are currently verifying your club. Once verified, you will get an email notification.</p>
                    <button className="w-full text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 block rounded-lg p-2.5" onClick={() => setAdminShowSuccessModal(false)}>Back To Home</button>
                </div>
            </Modal>
{/* Modal for successful Signup admin - 클럽 회원가입 성공시 */}
            <Modal isVisible={showNonAdminSuccessModal} onClose={() => setNonAdminSuccessModal(false)}> 
                <div className="p-6 lg:px-6 text-center">
                    <h3 className="mb-4 text-xl font-medium">Non-Admin Sign Up Success</h3>
                    <p className="text-black font-bold text-lg mb-4">Sign Up successful!</p>
                    <p className="text-gray-700 mb-4">Thank you for joining</p>
                    <button className="w-full text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 block rounded-lg p-2.5" onClick={() => setNonAdminSuccessModal(false)}>Back To Home</button>
                </div>
            </Modal>
        </nav>
    )
}






