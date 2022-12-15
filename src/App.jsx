import React, { useContext } from 'react'
import About from './components/about/About'
import Intro from './components/intro/Intro'
import ProductList from './components/productList/ProductList'
import Contact from './components/contact/Contact'
import Toogle from './components/toogle/Toogle'
import { ThemeContext } from './context'

export default function App() {

  const theme=useContext(ThemeContext)
  const darkMode=theme.state.darkMode;
  return (
    <div style={{backgroundColor:darkMode?"#222":"white", color:darkMode?"white":"black"}}>
      <Toogle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
      </div>

  )
}
