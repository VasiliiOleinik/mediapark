import { useState } from 'react';
import { useActions } from '../../hooks/actions';
import { useAppSelector } from '../../hooks/redux';

const FavouriteBtn = ({ image }: any) => {

  const { addFavourite, removeFavourite } = useActions();
  const { favourites } = useAppSelector(state => state.unsplash);

  const [isFavourite, setIsFavourite] = useState(favourites.includes(image));

  const addToFavourite = () => {
    addFavourite(image);
    setIsFavourite(true);
  }

  const removeFromFavourite = () => {
    removeFavourite(image);
    setIsFavourite(false);
  }

  if (isFavourite) {
    return <button
      onClick={() => removeFromFavourite()}
      className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded mt-1'
    >
      Remove
    </button>
  } else {
    return <button
      onClick={() => addToFavourite()}
      className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded mt-1'
    >
      Add to favourite
    </button>
  }
};

export default FavouriteBtn;