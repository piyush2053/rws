import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Form from './Pages/Form';
import BannerTop from './Components/SmallChunks/AI_Banner';
import DrawerComp from './Components/Drawer';
import { DrawerProvider, TabProvider } from './Components/Store/Provider';
import BannerSecond from './Components/SmallChunks/SecondBanner';
import GenAI from './Pages/GenerativeAI';
import ErrorPage from './Pages/Error';
import OurTeam from './Pages/OurTeam';
import NavbarTop from './Components/Navbar';
import TimeSheet from './Pages/Timesheet';
import News from './Pages/News';

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
              <GenAI />
            </>
          } path='/gen-ai'></Route>
          <Route
            element={
            <>
              <OurTeam />
            </>
          } path='/team-indore'></Route>
          <Route
            element={
            <>
              <Form/>
            </>
          } path='/estimation'></Route>
          <Route
            element={
            <>
              <TimeSheet/>
            </>
          } path='/timesheet'></Route>
          <Route
            element={
            <>
              <News/>
            </>
          } path='/news'></Route>
          <Route element={<ErrorPage/>} path='/*'></Route>
        </Routes>
      </BrowserRouter>
    </DrawerProvider>
  </TabProvider>
);

reportWebVitals();
