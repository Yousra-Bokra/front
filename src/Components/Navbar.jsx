import { Link } from 'react-router-dom';

const Navbar = () => {

    return (

        <div className='bg-black text-white px-6 py-4 flex justify-between items-center'>

            <h1 className='text-2xl font-bold'>JWT APP</h1>

            <div className='flex gap-4'>

                <Link to='/'>Home</Link>

                <Link to='/login'>Login</Link>

                <Link to='/signup'>Signup</Link>

            </div>

        </div>

    )
}

export default Navbar