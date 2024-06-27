import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Form from './Pages/Form';
import NavbarTop from './Components/Navbar';
import BannerTop from './Components/SmallChunks/AI_Banner';
import DrawerComp from './Components/Drawer';
import { DrawerProvider, TabProvider } from './Components/Store/Provider';
import BannerSecond from './Components/SmallChunks/SecondBanner';
import ErrorPage from './Pages/Error';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <TabProvider>
    <DrawerProvider>
      <BrowserRouter>
        <NavbarTop />
        <DrawerComp />
        <Routes>
          <Route element={<Form />} path='/pp'></Route>
          <Route
            element={<>
              <BannerTop />
              <BannerSecond/>
            </>} path='/'></Route>
          <Route
            element={
            <>
              <BannerTop />
            </>
          } path='/gen-ai'></Route>
          <Route
            element={
            <>
              <Form/>
            </>
          } path='/estimation'></Route>
          <Route element={<ErrorPage/>} path='/*'></Route>
        </Routes>
      </BrowserRouter>
    </DrawerProvider>
  </TabProvider>
);

reportWebVitals();
