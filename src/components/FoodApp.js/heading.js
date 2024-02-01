import React, { useState } from 'react'
import './food.css'
import Modal from '../Modal';



function Heading() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
      <h1 className='heading'>Quick <br /> Bite</h1>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'end', marginRight: '20px' }}>
        <div>

          {isModalOpen  ? (<Modal />) : null}
          <button className='sign-button' onClick={openModal}>Sign in</button>
        </div>
        <button className='signup-button'>Sign up</button>
      </div>
   </div>
  )
}

export default Heading