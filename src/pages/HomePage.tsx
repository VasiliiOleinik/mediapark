import { useState, useEffect, useRef } from 'react';
import FormDropdown from '../components/FormDropdown';
import ImagesList from '../components/ImagesList';
import savePrevQueries from '../helpers/savePrevQueries';
import useGetLocalStorage from '../hooks/useGetLocalStorage';
import { useSearchImagesQuery } from '../store/unsplash/unsplash.api';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const localStorageQuery = useGetLocalStorage('query');
  const formRef = useRef<HTMLDivElement>(null);

  const { isLoading, isError, data } = useSearchImagesQuery(query);

  function clickHandler() {
    setQuery(search);
    savePrevQueries('query', search);
  }

  useEffect(() => {
    if (formRef.current !== null) {
      const onClick = (e: any) => formRef.current?.contains(e.target) || setDropdown(false);
      document.addEventListener('click', onClick);
      return () => document.removeEventListener('click', onClick);
    }
  }, [setDropdown]);


  return (
    <div className='flex full-w p-5 flex-wrap justify-center'>
      <div className='relative w-[560px] flex-row flex-nowrap' ref={formRef}>
        <input
          type="text"
          className='border py-2 px-4 w-[435px] h-[42px] mb-2 mr-2'
          placeholder='Search for Unsplash images'
          onFocus={() => setDropdown(localStorageQuery.length !== 0)}
          onChange={e => setSearch(e.target.value)}
        />
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => clickHandler()}
        >
          Find image
        </button>
        {dropdown && <FormDropdown localStorageQuery={localStorageQuery} setQuery={setQuery} />}
      </div>
      <ImagesList data={data} isLoading={isLoading} isError={isError} />
    </div>
  );
};

export default HomePage;