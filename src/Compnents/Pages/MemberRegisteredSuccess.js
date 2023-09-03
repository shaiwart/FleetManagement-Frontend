import React from 'react';
import Navbar from '../PageNavigation';
import '../../Style/SuccessPage.css';

function MemberRegisteredSuccess() {
  return (
    <>
      <Navbar />
      <div className='confirmation-page-container'>
        <div className='confirmation-card'>
          <h1 className='confirmation-header'>You are registerd with us !</h1>
        </div>
      </div>
    </>


  );
}

export default MemberRegisteredSuccess; 
