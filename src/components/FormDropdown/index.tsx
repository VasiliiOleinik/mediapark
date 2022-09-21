const FormDropdown = ({ localStorageQuery, setQuery }: any) => {
  const preQueries = JSON.parse(localStorageQuery);

  return (
    <ul className='absolute top-[42px] left-0 max-h-[200px] shadow-md bg-white w-[435px]'>
      {preQueries.map((item: string) => {
        return (
          <li
            className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
            key={item}
            onClick={() => setQuery(item)}
          >
            {item}
          </li>
        )
      })}
    </ul>
  )
};

export default FormDropdown;