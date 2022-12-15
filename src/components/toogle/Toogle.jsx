import './toogle.css'
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import React, { useContext } from 'react'
import { ThemeContext } from '../../context';

function Toogle() {
    const theme=useContext(ThemeContext);
    const handleClick=(e)=>{
        theme.dispatch({type:"TOGGLE"})
    }
  return (
    <div className="t">
      <LightModeIcon style={{color:"yellow"}}/>
      <ModeNightIcon style={{color:"yellow"}}/>
      <div className="t-button" style={{left:theme.state.darkMode?0:25}} onClick={handleClick}></div>
    </div>
  )
}

export default Toogle