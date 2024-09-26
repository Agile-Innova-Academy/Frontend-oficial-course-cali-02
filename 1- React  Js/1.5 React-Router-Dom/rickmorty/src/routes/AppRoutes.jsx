import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../containers/Navbar'
import MainLayout from '../containers/MainLayout'
import Characters from '../components/Characters'
import Episodes from '../components/Episodes'
import Locations from '../components/Locations'
import Favorites from '../components/Favorites'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/favorites:id" element={<Favorites />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes