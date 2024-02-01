import React from 'react'
import Heading from '../heading'
import '../Restaurents/Brouncheri.css'

import backgroundImg from '../FoodImages/background1.jpg'
import sandwitch from '../FoodImages/sandwitch1.jpg'
import eggSandwitch from '../FoodImages/sandwich2.jpg'
import chickenSandwitch from '../FoodImages/sandwich3.jpg'
import turkeySandwitch from '../FoodImages/sandwich4.jpg'
import strawberryCake from '../FoodImages/cake1.jpg'
import lemonCake from '../FoodImages/cake2.jpg'
import granolaCake from '../FoodImages/cake3.jpg'
import Footer from '../Footer'
import Item from '../ItemCard'
import { useState } from 'react'




function Brouncheri() {

    const [card,setCard] = useState(false)


    return (
        <div >
            <center>
                <Heading />
                <img className='title-img' src={backgroundImg} />
                <h1>Brouncheri</h1>
                <div style={{ display: 'flex', justifyContent: 'start', marginBottom: '15px', marginLeft: '70px' }} >
                    <div style={{ height: '30px', display: "flex", alignItems: "center", padding: "2px", width: '250px', borderRadius: '5px', backgroundColor: "white", marginRight: '10px' }}>
                        <input style={{ border: "none" }} type="text" placeholder="Delivery address..." />
                        <svg style={{ marginRight: '10px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </div>
                    <button className='search-button2'> Search</button>
                </div>

                <div style={{ display: 'flex', justifyContent: 'start', marginLeft: '70px' }}>
                    <button className='buttons' style={{ backgroundColor: 'blue', color: 'white' }}>popular</button>
                    <button className='buttons'>Breakfast</button>
                    <button className='buttons'>sandwitches</button>
                    <button className='buttons'>deserts</button>
                </div>

                <hr className='horizantal-line' />
                <div className='restaurent-card-heading'>
                    <h1 style={{ marginLeft: '70px' }}> Sandwitches</h1>
                    <svg style={{ marginRight: '70PX' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>


                <hr className='horizantal-line' />

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '50px' }}>
                        <h1> Artichoke Sandwich</h1>
                        <p>Artichoke,spinach,cheddar and mushrooms.</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h1 className='price-heading'>$7.50</h1>
                            <p className='popular'>popular</p>
                            <button onClick={()=>setCard(true)} className='add-icon'>add</button>
                            {card ? <Item/> : null}
                        </div>
                    </div>
                    <img style={{ height: '200px', width: '220px', marginRight: '70px' }} src={sandwitch} />

                </div>
                <hr className='horizantal-line' />



                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '50px' }}>
                        <h1> Egg Sandwich</h1>
                        <p>Tomota,mazzarella topped with <br/> fried egg and fresh chives</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h1 className='price-heading'>$5.70</h1>
                            <p className='popular'>popular</p>
                        </div>
                    </div>
                    <img style={{ height: '200px', width: '220px', marginRight: '70px' }} src={eggSandwitch} />

                </div>
                <hr className='horizantal-line' />



                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '50px' }}>
                        <h1>Chilli Chicken Sandwich</h1>
                        <p>Chicken,rocket and chill papers with mayonnaise</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                            <h1 className='price-heading'>$7.30</h1>
                            <p className='popular'>popular</p>
                        </div>
                    </div>
                    <img style={{ height: '200px', width: '220px', marginRight: '70px' }} src={chickenSandwitch} />

                </div>
                <hr className='horizantal-line' />



                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '50px' }}>
                        <h1> Turkey Sandwich</h1>
                        <p>Turkey,mozzarella,tomato and pesto.</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h1 className='price-heading'>$7.90</h1>
                            <p className='popular'>popular</p>
                        </div>
                    </div>
                    <img style={{ height: '200px', width: '220px', marginRight: '70px' }} src={turkeySandwitch} />

                </div>
                <hr className='horizantal-line' style={{marginBottom:'150px'}} />

                 <hr className='horizantal-line' />
                <div className='restaurent-card-heading'>
                    <h1 style={{ marginLeft: '70px' }}> Deserts</h1>
                    <svg style={{ marginRight: '70PX' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
                <hr className='horizantal-line' />

  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '50px' }}>
                        <h1>Strawberry Cheesecake</h1>
                        <p>Topped with fresh strawberries and mint</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h1 className='price-heading'>$4.50</h1>
                            <p className='popular'>popular</p>
                        </div>
                    </div>
                    <img style={{ height: '200px', width: '220px', marginRight: '70px' }} src={strawberryCake} />

                </div>
                <hr className='horizantal-line' />

                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '50px' }}>
                        <h1>Lemon Mousse</h1>
                        <p>Topped with fresh oranges and berries</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h1 className='price-heading'>$4.00</h1>
                            <p className='popular'>popular</p>
                        </div>
                    </div>
                    <img style={{ height: '200px', width: '220px', marginRight: '70px' }} src={lemonCake} />

                </div>
                <hr className='horizantal-line' />

                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '50px' }}>
                        <h1>Homemade Granola</h1>
                        <p>Granola,greek yougurt topped with fresh peaches</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h1 className='price-heading'>$4.30</h1>
                            <p className='popular'>popular</p>
                        </div>
                    </div>
                    <img style={{ height: '200px', width: '220px', marginRight: '70px' }} src={granolaCake} />

                </div>
                <hr className='horizantal-line' style={{marginBottom:'100px'}} />

           <Footer/>






            </center>

        </div>
    )
}

export default Brouncheri