import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const KajiSignUp = () => {

    const { userSignUp, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        userSignUp(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                handleUpdateUserProfile(name);

                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                form.reset();
                navigate('/');
            })
            .catch(error => {
                const errormsg = error.message;
                let errorSplit = errormsg.split(' ')
                //let lastElement = arry[arry.length - 1];
                let errorMessage = errorSplit[errorSplit.length - 1];
                setError(errorMessage);
                console.log(error.message);
            })
    }

    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name,
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="flex h-screen bg-slate-100">
            <div className="m-auto bg-white shadow-lg p-10 container h-5/6 ">
                <div className="border-dotted border-4 border-black h-full py-5 px-5 relative md:hidden">
                    <h2 className="text-xl text-center">দুঃখিত</h2>
                    <p className="leading-7 text-justify">
                        <br /> নিবন্ধিত তথ্য সংশোধনযোগ্য নয়। অত্যন্ত সতর্কতার সাথে তথ্য পূরণ
                        আবশ্যক। এজন্য মুঠোফোন থেকে নিবন্ধন কার্যক্রম পরিচালনা গ্রহণযোগ্য নয়।
                    </p>
                </div>

                <div className="border-dotted border-4 border-red-500 h-full py-5 px-5 relative hidden md:block">
                    <h1 className='text-3xl text-center sj my-3 text-red-600'>কাজি প্রবেশ</h1>
                    <div className='w-1/3 mx-auto py-3 bg-slate-50 px-5'>
                        <form onSubmit={handleSignUp}>
                            <div className="w-full mx-3 p-3">
                                <input
                                    type="text"
                                    placeholder='কাজির নাম'
                                    className="text-xl  w-full p-3 border-b-2 rounded  text-right focus:outline-0 appearance-none h-10"
                                    name='name'
                                ></input>
                            </div>
                            <div className="w-full mx-3 p-3">
                                <input
                                    type="email"
                                    placeholder='ইমেইল'
                                    className="text-xl  w-full p-3 border-b-2 rounded  text-right focus:outline-0 appearance-none h-10"
                                    name='email'
                                ></input>
                            </div>
                            <div className="w-full mx-3 p-3">
                                <input
                                    type="password"
                                    placeholder='পাসওয়ার্ড'
                                    className="text-xl  w-full p-3 border-b-2 rounded  text-right focus:outline-0 appearance-none h-10"
                                    name='password'
                                ></input>
                            </div>
                            <div className='text-right text-sm text-gray-500'>
                                <Link to='/login' className='underline'>একাউন্ট তৈরি করা থাকলে প্রবেশ করুন</Link>
                            </div>
                            {error && <p className='text-red-600 text-right'>Error: {error}</p>}
                            <div className='flex justify-end items-center'>

                                <button className="rounded  bg-white border-b-2  border-slate-300 m-3 py-3 w-32">
                                    একাউন্ট তৈরি
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default KajiSignUp;