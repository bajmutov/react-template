import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/UI/Loader';
import Footer from 'components/Footer';
import Header from 'components/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
