import React from 'react'
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import { useContext } from 'react';
import DataContext from '../Context/DataContext'

const Header = ({title}) => {
  const {width} = useContext(DataContext)
  return (
    <header className='Header'>
       <h3>{title}</h3> 
       {width < 768 ? <FaMobileAlt />
                : width < 992 ? <FaTabletAlt /> : <FaLaptop/>}
    </header>
  )
}

export default Header