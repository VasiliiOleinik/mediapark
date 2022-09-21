import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Error404 from './pages/Error404';
import FavouritesPage from './pages/FavouritesPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App;
