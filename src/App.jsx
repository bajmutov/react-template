import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { lazy } from 'react';

import NotFoundPage from 'pages/NotFoundPage';
import Layout from 'pages/Layout';

const HomePage = lazy(() => import('pages/HomePage'));
// const CatalogPage = lazy(() => import("pages/CatalogPage"));

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="catalog" element={<CatalogPage />} /> */}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
