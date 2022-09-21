import { Link } from 'react-router-dom';
import { useActions } from '../../hooks/actions';
import { useAppSelector } from '../../hooks/redux';

const Navigation = () => {
  const { logIn, logOut } = useActions();
  const { user } = useAppSelector(state => state.users);

  return (
    <nav className='flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white'>
      <h3 className='font-bold'>UNSPLASH search</h3>

      <div>
        {!user ?
          <button
            type='button'
            className='ml-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => logIn(true)}
          >
            Log in
          </button>
          :
          <>
            <Link to="/" className='mr-2'>Home</Link>
            <Link to="/favourites">Favourites</Link>
            <button
              type='button'
              className='ml-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={() => logOut(false)}
            >Log out
            </button>
          </>
        }
      </div>
    </nav>
  );
};

export default Navigation;