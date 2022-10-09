import { useEffect } from 'react';
import { Location, Route, Routes, useLocation } from 'react-router-dom';

import { useBackgroundLocation } from '../hooks/background-location';
import Highlights from './highlights';
import Root from './root';
import Search from './search';
import User from './user';

interface Props {
  location: Location;
}

const BaseRoutes = ({ location }: Props) => (
  <Routes location={location}>
    <Route element={<Root />}>
      <Route index element={<Highlights />} />
      <Route path="search/:query" element={<Search />} />
    </Route>
  </Routes>
);

const ModalRoutes = ({ location }: Props) => (
  <Routes location={location}>
    <Route path="user/:username" element={<User />} />
  </Routes>
);

const AppRoutes = () => {
  const location = useLocation();
  const backgroundLocation = useBackgroundLocation();

  useEffect(() => {
    console.log(location, backgroundLocation);
  }, [location, backgroundLocation]);

  return (
    <>
      <BaseRoutes location={backgroundLocation || location} />
      {backgroundLocation && <ModalRoutes location={location} />}
    </>
  );
};

export default AppRoutes;
