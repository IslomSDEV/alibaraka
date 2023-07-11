import React from 'react'
import AboutCompany from './pages/AboutCompany/AboutCompany';
import AccardionPage from './pages/AccardionPage/AccardionPage';
import ComunicationPage from './pages/ComunicationPage/ComunicationPage';
import Home from './pages/Home/Home';
import ProductMain from './pages/ProductMain/ProductMain';
import StoreCom from './pages/StoreCom/StoreCom';
import SwiperHero from './pages/SwiperHero/SwiperHero';

function HomeMain() {
  return (
    <>
        <Home />
        <ProductMain />
        <AboutCompany />
        <SwiperHero />
        <AccardionPage />
        <StoreCom />
        <ComunicationPage />
    </>
  )
}


export default HomeMain;
