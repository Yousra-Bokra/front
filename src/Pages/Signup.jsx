
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Navbar from '../Components/Navbar';
import api from '../config/service';

const Signup = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        name: '',
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



    // FORM SUBMIT
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            // BACKEND API CALL
            const response = await api.post('/user', formData);

            console.log(response.data);

            // ALERT
            alert(response.data.message);

            // LOGIN PAGE
            navigate('/login');

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
                        Signup
                    </h1>

                    <input
                        type='text'
                        placeholder='Enter Name'
                        name='name'
                        onChange={handleChange}
                        className='w-full border p-3 rounded mb-4'
                    />

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
                        Signup
                    </button>

                    <p className='text-center mt-4'>

                        Already have an account?

                        <Link
                            to='/login'
                            className='text-blue-600 font-bold ml-1'
                        >
                            Login
                        </Link>

                    </p>

                </form>

            </div>

        </div>

    )
}

export default Signup;