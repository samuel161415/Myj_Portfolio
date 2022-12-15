import React, { useContext } from 'react'
import { ThemeContext } from '../../context'
import './product.css'

function Product({item,keyy}) {
  const theme=useContext(ThemeContext);
  const {darkMode}=theme.state

  return (
    <div className='p' key={keyy}>
      <div className="p-browser" style={{backgroundColor:darkMode?"rgb(49, 48, 48)":"rgb(243,242,242)"}}>
        <div className="p-circle" style={{backgroundColor:darkMode?"grey":"white"}}> </div>
        <div className="p-circle" style={{backgroundColor:darkMode?"grey":"white"}}> </div>
          <div className="p-circle" style={{backgroundColor:darkMode?"grey":"white"}}></div>
      </div>
      <a href={item.link} target='_blank' rel='noreferrer'>
        <img src={item.img} alt="" className="p-img"  />
      </a>
    </div>
  ) 
}

export default Product