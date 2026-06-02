
import Navbar from '../Components/Navbar';

const Home = () => {

    return (

        <div>

            <Navbar />

            <div className='flex justify-center items-center h-[80vh]'>

                <div className='text-center'>

                    <h1 className='text-5xl font-bold'>Home Page</h1>

                    <p className='mt-4 text-gray-600'>JWT Authentication Project</p>

                </div>

            </div>

        </div>

    )
}

export default Home