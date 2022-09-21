import { Suspense } from 'react';
import FavouriteBtn from '../Favourite';
import { useAppSelector } from '../../hooks/redux';

const ImagesList = ({ data, isError, isLoading }: any) => {
  const { user } = useAppSelector(state => state.users);

  return (
    <div className='flex flex-wrap justify-center'>
      {isError && <p className='text-center text-red-600'>Something went wrong...</p>}
      {isLoading && <p className='text-center'>Loading...</p>}
      <Suspense fallback={<p>Loading...</p>}>
        {data?.results?.map((image: any) => (
          <div className='w-[350px] h-[340px] m-2 flex flex-col items-start' key={image.id}>
            <img
              src={image.links.download}
              className="object-cover h-[250px] w-full mb-1"
              alt={image.description}
            />
            <p className='text-sm'>
              Author: <span className='font-bold mr-2'>{image.user.name}</span>
            </p>
            {user && <FavouriteBtn image={image.links.download} />}
          </div>
        ))}
      </Suspense>
    </div>
  );
};

export default ImagesList;