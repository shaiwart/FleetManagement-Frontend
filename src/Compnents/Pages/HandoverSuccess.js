import React from 'react';
import Navbar from '../PageNavigation';
import '../../Style/SuccessPage.css';

function HandoverSuccess() {
  return (
    <>
      <Navbar />
      <div className='confirmation-page-container'>
        <div className='confirmation-card'>
          <h1 className='confirmation-header'>Car handed successfully !</h1>
          <p> </p>
        </div>
      </div>
    </>


  );
}

export default HandoverSuccess; 
