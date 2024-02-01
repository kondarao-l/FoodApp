import React, { useState } from 'react';
import Modal from './Modal';

const Modal2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen===true ? (<Modal/>) :null}
      
    </div>
  );
};

export default Modal2;

