import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layouts/Layout";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={ <Layout/> }>
        <Route index element={ <Home/> }></Route>
        <Route path="/about" element={<About/>}></Route>
      </Route>
    </Routes>
    </>
  )
}

export default App;
// https://yandex.ru/video/preview/10173353857710854966