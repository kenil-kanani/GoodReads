import Logo from 'Assets/Images/logo-color.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-20 h-screen">
            <div className='h-40 w-40'>
                <img
                    className='w-full h-full'
                    src={Logo}
                    alt="logo" />
            </div>
            <div className='flex flex-row justify-around items-center gap-16'>
                <div className='w-2/4 text-center basis-1/2'>
                    <h1 className='text-white text-5xl tracking-widest'>
                        BookShelf <br />
                        <span className='text-warning'>
                            Your personal library and social network for bookworms
                        </span>
                    </h1>
                </div>
                <div>
                    <Link to={'/signup'}>
                        <button className='btn btn-primary rounded-md text-xl px-5 py-2'>
                            Register
                        </button>
                    </Link>
                    <Link to={'/login'}>
                        <button className='btn btn-warning rounded-md text-xl px-5 py-2 ml-3'>
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
