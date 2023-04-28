import React from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

const login = () => {
    return (
      <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
  
        <MDBRow className='justify-content-evenly col-12'>
  
          <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
  
          <div className="col-lg-12 col-md-12">
      <img src="http://d-crm.in/public/images/DovetailLogo.svg" alt="logo" className="img-fluid position-relative" />
    </div>
{/* 
  
            <p className='px-3 text-start tex-capitalize fs-6 lh-base' style={{color: 'hsl(218, 81%, 85%)'}}>
            Dovetail-crm is a technology-driven manufacturing company that provides Billing and Payment Delivery Solutions for Small-Medium Businesses. It offers a web version of Accounting Software with extended features of Tally, allowing users to use either web application or both tally and web application with synced data.
            </p> */}
  
          </MDBCol>
  
          <MDBCol md='4' className='position-relative '>
  
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
  
            <MDBCard className='my-5 bg-glass'>
              <MDBCardBody className='p-5'>
              <center><b>Account Login </b></center><br/>
              {/* <div class="text-center text-muted mb-4">
                <small></small>
              </div> */}

              
                <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' placeholder='xyz@email.com'/>
                <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' placeholder='password'/>
  
                <div className='d-flex justify-content-center mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                </div>
  
                <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>
  
                <div className="text-center">
  
                  <p>or sign up with:</p>
  
                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='facebook-f' size="sm"/>
                  </MDBBtn>
  
                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='twitter' size="sm"/>
                  </MDBBtn>
  
                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='google' size="sm"/>
                  </MDBBtn>
  
                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='github' size="sm"/>
                  </MDBBtn>
  
  
                </div>
  
              </MDBCardBody>
            </MDBCard>
  
          </MDBCol>
  
        </MDBRow>
  
      </MDBContainer>
    );
  }

export default login