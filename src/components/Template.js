import React from 'react'
import './food.css'



//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSearch } from '@fortawesome/free-solid-svg-icons';



function FoodApp() {
    return (
        
        <div>
           <div  className='bg-container'>
            <div className='card-containers'>
                
                <h1 className='heading'>Quick <br/>Bite</h1>
               
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'end', padding: '20px' }}>
                   <button className='sign-button'>Sign in</button>
                    <button className='signup-button'>Sign up</button>
               </div>
                <center>
                    <h1 className='heading2'>The Quickest way to <br /> find the perfect bite</h1>
                    <div style={{ display: 'flex', justifyContent: 'center' }} >
                        <div style={{ height: '25px', display: "flex", alignItems: "center", padding: "2px", width: '200px', borderRadius: '5px', backgroundColor: "white", marginRight: '10px' }}>
                            <input style={{ border: "none" }} type="text" placeholder="Search..." />
                            <svg style={{ marginRight: '10px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </div>
                        <button className='signup-button2'> Search</button>
                    </div>


                    <hr style={{ border: '2px solid black', marginTop: '10px' }} className='horizantal-line' />
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                        <h1 style={{ marginLeft: '55px' }}> How it Works</h1>
                        <svg style={{ marginRight: '55PX' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>




                    <hr style={{ border: '2px solid black', marginTop: '10px', marginBottom: '10px', marginRight: '55px', marginLeft: '55px' }} className='horizantal-line' />

                    <div style={{ display: 'flex' }}>

                        <div style={{ width: '2px', height: '300px', backgroundColor: 'black', marginLeft: '10px', marginTop: 'none' }}>

                            <img style={{ height: '100px', marginLeft: '40px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDKoBH4H7qyRtcffdoQpIewzkiWQR8r08Mkg&usqp=CAU' />
                            <h1 style={{ marginLeft: '40px' }}>STEP1</h1>
                           
                            <textarea className='text-area' rows={4} cols={25}> Enter your location type in your location </textarea>
                        </div>

                        <div style={{ width: '2px', height: '300px', backgroundColor: 'black', marginLeft: '400px', }}>
                            <img style={{ height: '100px',width:'150px', marginLeft: '10px' }} src='https://cdn.pixabay.com/photo/2017/07/15/13/45/french-restaurant-2506490_1280.jpg' />
                            <h1 style={{ marginLeft: '40px' }}>STEP2</h1>
                            <textarea className='text-area' rows={4} cols={25}> Enter your location type in your location </textarea>
                        </div>

                        <div style={{ width: '2px', height: '300px', backgroundColor: 'black', marginLeft: '400px' }}>
                            <img style={{ height: '100px', textAlign: 'center', marginLeft: '20px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDKoBH4H7qyRtcffdoQpIewzkiWQR8r08Mkg&usqp=CAU' />
                            <h1 style={{ marginLeft: '40px' }}>STEP3</h1>
                            <textarea className='text-area' rows={4} cols={25}> Enter your location type in your location </textarea>
                        </div>



                    </div>

                    <hr style={{ border: '2px solid black', marginTop: '10px' }} className='horizantal-line' />
                    <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-between', alignItems: "center" }}>
                        <h1 style={{ marginLeft: '55px' }}> Work with quick Bite</h1>
                        <svg style={{ marginRight: '55px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>




               <hr style={{ border: '2px solid black', marginTop: '10px', marginBottom: '0px', marginRight: '55px', marginLeft: '55px' }} className='horizantal-line' />

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <img style={{ height: '200px', width: '170px', marginLeft: '40px' }} src='https://cdni.iconscout.com/illustration/premium/thumb/food-delivery-bike-4808772-3992759.png' />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '30px' }}>
                            <h1> As a rider</h1>
                            <p>Earn Money by delivering food from Restaurants</p>
                            <button>As a rider</button>
                        </div>

                    </div>

               <hr style={{ border: '2px solid black', marginTop: '10px', marginBottom: '10px', marginRight: '55px', marginLeft: '55px' }} className='horizantal-line' />

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <img style={{ marginLeft: '55px', height: '200px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYCSeO918sIaomNS2k-z1UsjlwkvHv2FYj1X4swHgEbtsArlnp3ALgaM6apQ&s' />

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '30px' }}>
                            <h1> As a Restaurant</h1>
                            <p>Earn Money by delivering food from Restaurants</p>
                            <button>As a rider</button>
                        </div>

                    </div>
               <hr style={{ border: '2px solid black', marginTop: '10px', marginBottom: '10px', marginRight: '55px', marginLeft: '55px' }} className='horizantal-line' />


                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <img style={{ marginLeft: '55px', height: '200px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYCSeO918sIaomNS2k-z1UsjlwkvHv2FYj1X4swHgEbtsArlnp3ALgaM6apQ&s' />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '30px' }}>
                            <h1> As a Collegue</h1>
                            <p>Earn Money by delivering food from Restaurants</p>
                            <button>As a rider</button>
                        </div>

                    </div>
               <hr style={{ border: '2px solid black', marginTop: '10px', marginBottom: '10px', marginRight: '55px', marginLeft: '55px' }} className='horizantal-line' />

                    <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-between', alignItems: "center" }}>
                        <h1 style={{ marginLeft: '55px' }}> Download Our App</h1>
                        <svg style={{ marginRight: '55px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
               <hr style={{ border: '2px solid black', marginTop: '10px', marginBottom: '10px', marginRight: '55px', marginLeft: '55px' }} className='horizantal-line' />

               <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between',  marginBottom: '10px' }}>

                        <div style={{ display: 'flex', flexDirection: 'column',justifyContent:'start', alignItems: 'center',marginLeft: '70px'  }}>
                            <h1 style={{marginLeft:'0px'}}>Order Easyly</h1>
                            <p style={{marginLeft:'0px'}}>Get the most delicious bites deliver  to your doar with quick bite.</p>
                            <button className='download-button'>Download</button>
                        </div>
                        <img style={{ marginRight: '55px', height: '200px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqMaOetsr70wXTyanvQT-HQ4wQkbr1T3Zl7nY9KP_bGw&s' />
                     </div>

                     <hr style={{ border: '2px solid black', marginTop: '10px', marginBottom: '50px', marginRight: '55px', marginLeft: '55px' }} className='horizantal-line' />

                     <div className='bottom-card'>
                        <h1 style={{marginLeft:'60px'}}>QUICK <br/> BITE</h1>
                     <div style={{  marginLeft: '30px',display:'flex',justifyContent:'end',marginRight:'50px' }}>
                           <div style={{marginTop:'10px',display: 'flex', flexDirection: 'column', alignItems: 'center',marginRight:'25px',fontSize:'10px'}}>
                            <p>Social</p>
                            <p>Instagram</p>
                            <p>Facebook</p>
                            <p>Linkedin</p> 
                            </div> 
                            <div style={{marginTop:'10px',display: 'flex', flexDirection: 'column', alignItems: 'center',marginRight:'25px',fontSize:'10px'}}>
                            <p>Get Help</p>
                            <p>Partner with us</p>
                            <p>Add your Restaurant</p>
                            <p>Signup Delivery</p> 
                            </div> 
                            <div style={{marginTop:'10px',display: 'flex', flexDirection: 'column', alignItems: 'center',marginRight:'25px',fontSize:'10px'}}>
                            <p>Read Our Blog</p>
                            <p>Buy Gift Card</p>
                            <p>Restaurants near by</p>
                            <p>Save on First Order</p> 
                            </div> 


                        </div> 
                     </div>

                     <h1>END OF THE FIRST PAGE</h1>


                </center>

            </div>

           </div>
        </div>          

    )
}

export default FoodApp