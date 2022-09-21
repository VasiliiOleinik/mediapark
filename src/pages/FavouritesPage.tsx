import { useAppSelector } from "../hooks/redux";

const FavouritesPage = () => {
  const { favourites } = useAppSelector(state => state.unsplash);

  if (favourites.length === 0) return <p className="text-center">No items...</p>;
  return (
    <div className='flex flex-wrap justify-center'>
      {favourites.map((image: any) => (
        <div className='w-[350px] h-[340px] m-2 flex flex-col items-start' key={image}>
          <img
            src={image}
            className="object-cover h-[250px] w-full mb-1"
            alt="Favourite"
          />
        </div>
      ))}
    </div>
  );
};

export default FavouritesPage;