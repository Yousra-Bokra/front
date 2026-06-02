
import Sidebar from '../Components/Sidebar';

const Dashboard = () => {

    // USER GET
    const user = JSON.parse(localStorage.getItem('user'));

    return (

        <div className='flex flex-col md:flex-row'>

            <Sidebar />

            <div className='flex-1 p-10'>

                <h1 className='text-4xl font-bold'>
                    Dashboard
                </h1>

                <div className='mt-10 shadow-lg p-10 rounded-lg'>

                    <h2 className='text-2xl font-bold'>
                        Welcome
                    </h2>

                    <p className='mt-3 text-gray-600'>
                        Login Successfully
                    </p>

                </div>

            </div>

        </div>

    )
}

export default Dashboard;