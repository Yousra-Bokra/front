

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Navbar from '../Components/Navbar';
import api from '../config/service';

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        email: '',
        password: ''

    });

    // INPUT HANDLE
    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };


    // LOGIN
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post('/login', formData);

            console.log(response.data);

            // USER SAVE
            localStorage.setItem(

                'user',

                JSON.stringify(response.data.user)

            );

            // ALERT
            alert(response.data.message);

            // DASHBOARD
            navigate('/dashboard');

        } catch (error) {

            console.log(error);

        }

    };


    return (

        <div>

            <Navbar />

            <div className='flex justify-center items-center h-screen'>

                <form
                    onSubmit={handleSubmit}
                    className='w-[90%] md:w-[400px] shadow-lg p-6 rounded-lg'
                >

                    <h1 className='text-3xl font-bold text-center mb-5'>
                        Login
                    </h1>

                    <input
                        type='email'
                        placeholder='Enter Email'
                        name='email'
                        onChange={handleChange}
                        className='w-full border p-3 rounded mb-4'
                    />

                    <input
                        type='password'
                        placeholder='Enter Password'
                        name='password'
                        onChange={handleChange}
                        className='w-full border p-3 rounded mb-4'
                    />

                    <button className='bg-black text-white w-full py-3 rounded'>
                        Login
                    </button>

                    <p className='text-center mt-4'>

                        Don't have account?

                        <Link
                            to='/signup'
                            className='text-green-600 font-bold ml-1'
                        >
                            Signup
                        </Link>

                    </p>

                </form>

            </div>

        </div>

    )
}

export default Login;