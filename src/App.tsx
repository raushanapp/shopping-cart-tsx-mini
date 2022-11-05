import { Container } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Navbar } from "./Components/Navbar"
import { ShoppingCartProvider } from "./Context/ShoppingCartContext"
import { About } from "./Pages/About"
import { Home } from "./Pages/Home"
import { Store } from "./Pages/Store"

function App() {

 

  return (
    <ShoppingCartProvider>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/store' element={<Store/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
    </ShoppingCartProvider>
  )
}

export default App
