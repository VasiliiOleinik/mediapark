const useGetLocalStorage = (name: string):any => {
    const store = localStorage.getItem(name);
    if (store) {
        return store
    }
}

export default useGetLocalStorage;