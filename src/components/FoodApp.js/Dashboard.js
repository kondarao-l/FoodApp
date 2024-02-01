import React from 'react'
import Heading from './heading'
import Footer from './Footer'
import Broncheri from './FoodImages/Broncheri.jpeg'
import SoupImg from './FoodImages/soup.jpeg'
import avobistro from './FoodImages/avobistro.jpeg'
import panCake from './FoodImages/panCake.jpeg'
import bombayExpress from './FoodImages/BombayExpress.jpeg'
import littleItale from './FoodImages/littleItale.jpeg'
import './Dash.css'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='bg-container'>
      <Heading />
      <center>
        <h1>List of Restaurants</h1>


        <div style={{ display: 'flex', justifyContent: 'start',marginBottom:'15px',marginLeft:'70px' }} >
                            <div style={{ height: '30px', display: "flex", alignItems: "center", padding: "2px", width: '250px', borderRadius: '5px', backgroundColor: "white", marginRight: '10px' }}>
                                <input style={{ border: "none" }} type="text" placeholder="Delivery address..." />
                                <svg style={{ marginRight: '10px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </div>
                            <button className='search-button'> Search</button>
                        </div>

        <div style={{display:'flex',justifyContent:'start',marginLeft:'70px'}}>
          <button className='button' style={{ backgroundColor: 'blue', color: 'white' }}>open now</button>
          <button className='button'>freedelivery</button>
          <button className='button'>5 stars</button>
        </div>
        <hr className='horizantal-line' />
        <div className='card-heading'>
          <h1 style={{ marginLeft: '70px' }}> New on Quick bite</h1>
          <svg style={{ marginRight: '70PX' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>


        <hr className='horizantal-line' />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


          <Link to='/brouncheri' >
          <div className='item-card'>

            <img style={{ height: '110px', width: '220px', marginTop: '10px', }} src={Broncheri} alt="Example" />
            <div className='restaurent-name-card'>
              <h1 className='restaurent-heading '>Broncheri</h1>
              <p className='restaurent-heading '>Breakfast lunch deserts</p>

            </div>
            <div className='card-heading'>
              <p style={{ marginLeft: '10px' }}>32$</p>
              <p style={{ marginRight: '10px' }}>$$$$$</p>
            </div>
          </div>
          </Link>

          <div className='item-card'>
            <img style={{ height: '110px', width: '220px', marginTop: '20px' }} src={SoupImg} alt="Example" />

            <div className='restaurent-name-card'>
              <h1 className='restaurent-heading '>Mom's soup</h1>
              <p className='restaurent-heading '>Lunch</p>

            </div>
            <div className='card-heading'>
              <p style={{ marginLeft: '10px' }}>32$</p>
              <p style={{ marginRight: '10px' }}>$$$$$</p>
            </div>
          </div>

          <div className='item-card'>
            <img style={{ height: '110px', width: '220px', marginTop: '20px' }} src={avobistro} alt="Example" />
            <div className='restaurent-name-card'>
              <h1 className='restaurent-heading '>avoBistro</h1>
              <p className='restaurent-heading '>Breakfast lunch snacs</p>

            </div>
            <div className='card-heading'>
              <p style={{ marginLeft: '10px' }}>Free Delivery</p>
              <p style={{ marginRight: '10px' }}>$$$$$</p>
            </div>
          </div>

        </div>
        <hr className='horizantal-line' />
        <div className='card-heading'>
          <h1 style={{ marginLeft: '70px' }}>Popular Right Now</h1>
          <svg style={{ marginRight: '70PX' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <hr className='horizantal-line' />

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


          <div className='item-card'>
            <img style={{ height: '110px', width: '220px', marginTop: '10px', }} src={Broncheri} alt="Example" />
            <div className='restaurent-name-card'>
              <h1 className='restaurent-heading '>avoBistro</h1>
              <p className='restaurent-heading '>Breakfast,lunch,snacs</p>

            </div>
            <div className='card-heading'>
              <p style={{ marginLeft: '10px' }}>32$</p>
              <p style={{ marginRight: '10px' }}>$$$$$</p>
            </div>
          </div>

          <div className='item-card'>
            <img style={{ height: '110px', width: '220px', marginTop: '20px' }} src={panCake} alt="Example" />

            <div className='restaurent-name-card'>
              <h1 className='restaurent-heading '>Pan cake world</h1>
              <p className='restaurent-heading '>Brunch,desserts</p>

            </div>
            <div className='card-heading'>
              <p style={{ marginLeft: '10px' }}>32$</p>
              <p style={{ marginRight: '10px' }}>$$$$$</p>
            </div>
          </div>

          <div className='item-card'>
            <img style={{ height: '110px', width: '220px', marginTop: '20px' }} src={bombayExpress} alt="Example" />
            <div className='restaurent-name-card'>
              <h1 className='restaurent-heading '>Bombay Express</h1>
              <p className='restaurent-heading '>Indian</p>

            </div>
            <div className='card-heading'>
              <p style={{ marginLeft: '10px' }}>Free Delivery</p>
              <p style={{ marginRight: '10px' }}>$$$$$</p>
            </div>
          </div>

        </div>
        <hr className='horizantal-line' />

        <div className='card-heading'>
          <h1 style={{ marginLeft: '70px' }}>Free Delivery</h1>
          <svg style={{ marginRight: '70PX' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>

        <hr className='horizantal-line' />


        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>




          <div className='item-card'>
            <img style={{ height: '110px', width: '220px', marginTop: '20px' }} src={panCake} alt="Example" />

            <div className='restaurent-name-card'>
              <h1 className='restaurent-heading '>Pan cake world</h1>
              <p className='restaurent-heading '>Brunch,desserts</p>

            </div>
            <div className='card-heading'>
              <p style={{ marginLeft: '10px' }}>32$</p>
              <p style={{ marginRight: '10px' }}>$$$$$</p>
            </div>
          </div>

          <div className='item-card'>
            <img style={{ height: '110px', width: '220px', marginTop: '20px' }} src={littleItale} alt="Example" />
            <div className='restaurent-name-card'>
              <h1 className='restaurent-heading '>little Itale</h1>
              <p className='restaurent-heading '>Sandwitches,brunch</p>

            </div>
            <div className='card-heading'>
              <p style={{ marginLeft: '10px' }}>Free Delivery</p>
              <p style={{ marginRight: '10px' }}>$$$$$</p>
            </div>
          </div>

          <div className='item-card'>
            <img style={{ height: '110px', width: '220px', marginTop: '10px', }} src={Broncheri} alt="Example" />
            <div className='restaurent-name-card'>
              <h1 className='restaurent-heading '>avoBistro</h1>
              <p className='restaurent-heading '>Breakfast,lunch,snacs</p>

            </div>
            <div className='card-heading'>
              <p style={{ marginLeft: '10px' }}>32$</p>
              <p style={{ marginRight: '10px' }}>$$$$$</p>
            </div>
          </div>
        </div>
        <hr className='horizantal-line' />
        <div style={{ marginTop: '10%' }}>
          <Footer />
        </div>

      </center>

    </div>
  )
}

export default Dashboard

//="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FUgotBruncherie%2Fphotos%2Fa.628235287374638%2F1640721849459305%2F%3Ftype%3D3&psig=AOvVaw2fRAyLsX2gOV0xS2J8Et2-&ust=1705553608184000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNDFvrzQ44MDFQAAAAAdAAAAABAD"
/*




        <div style={{display:'flex',justifyContent:'center'}}>
         <div className='search-bar'>
          <input style={{ border: 'none', width: '270px', height: '25px' }} type='text' placeholder='Delivery address' />
          <svg style={{ marginRight: '10px', marginLeft: '5px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div>
        <button className='search-button'>Search</button>
        </div>



*/

