import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import HomeMain from './HomeMain';
import Layout from './Layouts/Layout';
import Products from './Routes/Products/Products';
import ProInfo from './Routes/ProInfo/ProInfo';
import MoreBlogs from './Routes/MoreBlogs/MoreBlogs'; 
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import BlogInfo from './Routes/BlogInfo/BlogInfo';

function App() {


  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<HomeMain />}/>
          <Route path="/products/:id" element={<Products />} />
          <Route path="/proInfo/:id" element={<ProInfo />} />
          <Route path='/moreBlog' element={<MoreBlogs />} />
          <Route path='/blogInfo/:id' element={<BlogInfo />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
