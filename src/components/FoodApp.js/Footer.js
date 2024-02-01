import React from 'react'
import './food.css'

function Footer() {
  return (
    <div>
      <div className='bottom-card'>
        <h1 style={{ marginLeft: '60px' }}>QUICK <br /> BITE</h1>
        <div style={{ marginLeft: '30px', display: 'flex', justifyContent: 'end', marginRight: '50px' }}>
          <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '25px', fontSize: '10px' }}>
            <p>Social</p>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Linkedin</p>
          </div>
          <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '25px', fontSize: '10px' }}>
            <p>Get Help</p>
            <p>Partner with us</p>
            <p>Add your Restaurant</p>
            <p>Signup Delivery</p>
          </div>
          <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '25px', fontSize: '10px' }}>
            <p>Read Our Blog</p>
            <p>Buy Gift Card</p>
            <p>Restaurants near by</p>
            <p>Save on First Order</p>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Footer