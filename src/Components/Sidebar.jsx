
import { FaHome, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    // USER
    const user = JSON.parse(localStorage.getItem('user'));

    const navigate = useNavigate();

    // LOGOUT FUNCTION
    const handleLogout = () => {

        // LOCAL STORAGE CLEAR
        localStorage.removeItem('user');

        // ALERT
        alert("Logout Successfully");

        // LOGIN PAGE
        navigate('/login');

    };

    return (

        <div className='bg-black text-white w-full md:w-[250px] min-h-screen flex flex-col justify-between p-5'>

            <div>

                <h1 className='text-3xl font-bold mb-10'>
                    Dashboard
                </h1>

                <div className='space-y-5'>

                    <div className='flex items-center gap-3 cursor-pointer'>
                        <FaHome />
                        <p>Home</p>
                    </div>

                    <div className='flex items-center gap-3 cursor-pointer'>
                        <FaUser />
                        <p>Profile</p>
                    </div>

                    {/* LOGOUT BUTTON */}

                    <button
                        onClick={handleLogout}
                        className='flex items-center gap-3 bg-red-600 px-4 py-2 rounded mt-10 w-full cursor-pointer'
                    >

                        <FaSignOutAlt />

                        Logout

                    </button>

                </div>

            </div>


            {/* USER NAME BOTTOM */}

            <div className='border-t pt-5'>

                <h1 className='text-xl font-bold'>
                    {user?.name}
                </h1>

            </div>

        </div>

    )
}

export default Sidebar;