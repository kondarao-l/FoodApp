
import React, { useState } from 'react';
import './Modal.css'; // Import your modal styling (see styling below)

import {Link} from 'react-router-dom'

const Modal = () => {
  const [showpopup, setShowpopup] = useState(true);

  const closeModal = () => {
    setShowpopup(false);
  }

  const [data,setData] = useState({names:'',password:'',confirmPassword:'',email:''})
  const {names,password,confirmPassword,email} = data

 const onChangeHandler = (e)=> {
setData({...data,[e.target.name]:e.target.value})
 }

 const submitHandler = (event) => {
  event.preventDefault()
  if ((password===confirmPassword) && (password.length>=5) ) {
    <Link to='/dashboard'>  </Link>
    
    
  } else {
    alert('please enter Valid details')
  }
 
 
 }

  return (
    showpopup &&( 
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h1 style={{color:'Highlight'}}> Please Login</h1>
     
      <form onSubmit={submitHandler}>

      <input className='input-card' type='text' name='names' value={names} placeholder='Enter The Name' onChange={onChangeHandler}/> <br/>
      <input  className='input-card' type='password' name='password' value={password}  placeholder='  Password must be minimum 5 letters'  onChange={onChangeHandler} /> <br/>
      <input  className='input-card' type='password' name='confirmPassword' value={confirmPassword}  placeholder='Confirm The Password' onChange={onChangeHandler} /> <br/>
      <input  className='input-card' type='text' name='email' value={email} placeholder='Enter The Email'  onChange={onChangeHandler}  /> <br/>
      
      <Link to='./dashboard'><button className='login-button'>Login</button>
     </Link> 
       </form>
     
       
      </div>
    </div>)
    
    
  );
};

export default Modal;


/*
 
*/

















































/*
import React, { useState } from 'react'
import './file.css'

function Practice2() {
    const commentUrl = 'https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png'
    const deleteUrl = 'https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png'
    const likeUrl = 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    const likedUrl = 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

    const [heading, setHeading] = useState('')
    const [val, setVal] = useState('')
    const [comments, setComments] = useState([])
    const [count, setCount] = useState(0)

    const deleteButton = (indexValue) => {
        const newComments = comments.filter((item, index) => indexValue !== index)
        setComments(newComments)
        setCount(count - 1)

    }
    const buttonHandler = (e) => {
        e.preventDefault()
        if (heading && val) {
            const newComment = [...comments, { heading, val, isLiked: false }]
            setComments(newComment)
            setCount(count + 1)
            setHeading(' ')
            setVal('')

        } else {
            alert('pls enter the data')
        }

    }

    const toggleLike = (index) => {
        let localCom = comments
        localCom[index].isLiked = !localCom[index].isLiked
        setComments([...localCom])
    }
    console.log("COMMNTS >>>> ", comments)
    return (
        <div>
            <div className='comments-card'>
                <div className='comments-top-card'>

                    <div style={{ marginLeft: '20px', alignItems: 'center' }}>
                        <h1 style={{ color: ' #1e293b' }}>Comments</h1>
                        <p style={{ color: '#475569' }}> say something about<br /> 4.o Technologies</p>


                        <input className='input-box1' type='text' value={heading} name='heading' onChange={(e) => setHeading(e.target.value)} /> <br />
                        <textarea rows={4} cols={23} value={val} onChange={(e) => setVal(e.target.value)}>

                        </textarea>
                        <button onClick={buttonHandler} style={{ backgroundColor: ' #0284c7', marginLeft: '15px' }}>Add Comment</button>

                    </div>

                    <img style={{ marginRight: '15px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzeyPyS2qB7eaxKKIfmIQT2pSHmWYWhnu4kA&usqp=CAU' />
                </div>
                <hr style={{ marginLeft: '20px', marginRight: '15px' }} />
                <p className='count-button' ><span style={{ color: 'blue', marginRight: '5px' }}>{count}</span> Comments</p>

                {comments.map((item, index) => (
                    <div key={item.index} className='comments-output-card' >
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginTop: '5px' }}>

                            <h1 style={{ marginBottom: '5px' }}>
                                <span style={{ color: 'red', textTransform: 'uppercase' }}>
                                    {item.heading.trim()[0]}
                                </span>{' '}
                                {item.heading}
                            </h1>

                            <p style={{ marginTop: '2px' }}>value : {item.val}</p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>


                            {item.isLiked ?
                                <img key={item.index} onClick={() => toggleLike(index)} className='like-button' src={likedUrl} />
                                :
                                <img key={item.index} onClick={() => toggleLike(index)} className='like-button' src={likeUrl} />
                            }


                            <img onClick={() => deleteButton(index)} style={{ height: '20px', width: '20px', marginRight: '' }} src={deleteUrl} />
                        </div>



                        <hr style={{ marginLeft: '20px', marginRight: '15px' }} />


                    </div>
                ))}


            </div>

        </div>
    )
}


export default Practice2

*/


/* code 15
import React, { useEffect, useState } from 'react'
import './file.css'

const products = [
    {
        id: 1,
        name: 'Vivo',
        imgUrl: 'https://m.media-amazon.com/images/I/51PnpSbBcZL._SX300_SY300_QL70_FMwebp_.jpg',
        price: 12350
    },
    {
        id: 2,
        name: 'Oppo',
        imgUrl: 'https://m.media-amazon.com/images/I/41kWlWVqMkL._SX300_SY300_QL70_FMwebp_.jpg',
        price: 3560

    }, {
        id: 3,
        name: 'Nokia',
        imgUrl: 'https://m.media-amazon.com/images/I/61YqeXImFnL._SY741_.jpg',
        price: 10000
    },
    {
        id: 4,
        name: 'BlacKBerry',
        imgUrl: 'https://elcytec.com/wp-content/uploads/2023/10/elcytec_blackberry_classic-1-600x600.webp',
        price: 5400

    },
    {
        id: 5,
        name: 'jio',
        imgUrl: 'https://vlebazaar.in/image/cache/catalog/B072BXZWFX/JioPhone-Black-Security-Deposit-B072BXZWFX-1100x1100h.jpg',
        price: 2500
    }

]

function Practice() {

    const leftArrow = 'https://assets.ccbp.in/frontend/react-js/left-arrow-img.png'
    const rightArrow = 'https://assets.ccbp.in/frontend/react-js/right-arrow-img.png'

    const [index,setIndex] = useState(0)
    
    const rightButton = () => {
        if(index < products.length - 1 ){
            setIndex(index+1)
        } 
 }

    const leftButton = () => {
        if(index>0) {
            setIndex(index-1)
    
        }
} 


  return (
        <div>
            <div className='review-card'>

            <h1 style={{ marginTop: '10px', color: 'white' }}>Reviews</h1>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',marginTop:'' }}>
                    <img onClick={leftButton} style={{ marginLeft: '15%', marginTop: '20%' }} src={leftArrow} />
                    <div style={{marginTop:'18%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                       <img style={{height:'100px',width:'95px'}} src={products[index].imgUrl}/>
                       <h1> {products[index].name}</h1>  
                       <p>{products[index].price}</p>
                    </div>
                    <img onClick={rightButton} style={{ marginRight: '15%', marginTop: '20%' }} src={rightArrow}  alt='button'/>
                    
                </div>
                
                  




            </div>
        </div>
    )
}

export default Practice




*/


































/* Coding - 14
import React, { useState } from 'react'
import './file.css'

function Practice() {

    const headUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    const tailUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    const [data,setData] = useState(headUrl)
    const [heads,setHeads] = useState(0)
    const [tails,setTails] = useState(0)

    let number = Math.ceil(Math.random()*100)

    const tossButton = () => {
       if (((number%2)==0)) {
        setData(headUrl)
        setHeads(heads+1)


       } else {
        setData(tailUrl)

        setTails(tails+1)
       }
    }


  return (
    <div>
        <div className='spin-container' style={{}}>
            <div className='spin-card'>
                <h1 style={{color:'#e2a139'}}>Coin Toss Game</h1>
                <p>Heads or Tails</p>
                <img style={{height:'100px',width:'90px'}} src={data}/> <br/>
                <button onClick={tossButton} style={{backgroundColor:'#e2a139'}}>Toss Coin</button>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <p  style={{marginRight:'5px'}}>Totals :{heads+tails}</p>
                    <p style={{marginRight:'5px'}}>Heads :{heads} </p>
                    <p style={{marginRight:'5px'}}>Tails :{tails} </p>
                </div>

            </div>


        </div>
    </div>
  )
}

export default Practice
*/


//practice : 13
/*
import React, { useState } from 'react'

function Practice() {
    const [selectedOption, setSelectedoption] = useState()
    const [display, setDisplay] = useState()


   // const [selectedCountry, setSelectedCountry] = useState('');

    const handleSelectChange = (event) => {
       setDisplay(event.target.value)


    };


    return (
        <div>
            <div style={{ backgroundColor: 'azure', height: '300px', width: '300px', border: '2px solid black' }}>
                <h1>Countries and Capitals</h1>
                <label htmlFor="yourSelect">Select a country: </label>
                <select id="yourSelect" value={display} onChange={handleSelectChange}>
                    <option value="">Select...</option>
                    <option value="Delhi">India</option>
                    <option value="Newyork">USA</option>
                    <option value="Beejing">China</option>
                    <option value="Ottawa">Canada</option>
                </select>

                <p>Selected Country: {display}</p>

            </div>
        </div>
    )
}

export default Practice

*/

//practice : 12

/*

import React, { useState } from 'react'
const items = [
    {
        id: 1,
        name: 'html',
        value:'HTML',
        imgUrl :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqMaOetsr70wXTyanvQT-HQ4wQkbr1T3Zl7nY9KP_bGw&s'
    },
    {
        id: 2,
        name: 'css',
        value:'CSS',
        imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDKoBH4H7qyRtcffdoQpIewzkiWQR8r08Mkg&usqp=CAU'
    },
    {
        id: 3,
        name: 'js',
        value:'JS',
        imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqMaOetsr70wXTyanvQT-HQ4wQkbr1T3Zl7nY9KP_bGw&s'
    },
    {
        id: 4,
        name: 'React',
        value:'REACT.JS',
        imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqMaOetsr70wXTyanvQT-HQ4wQkbr1T3Zl7nY9KP_bGw&s'

    }
]
function Practice() {
    const [data,setData] = useState()
    const [caps,setCaps] = useState()
    const [auth,setAuth] = useState(true)

    

    const buttonHandler = ()=> {

    }

    return (
        <div>
            <center>
                <h1> Courses List </h1>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}> 
               {items.map(eachItem=>(
                
                    <div key={eachItem.id} onClick={()=>{setData(<img src={eachItem.imgUrl}/>);setCaps(eachItem.value)}} style={{marginRight:'10px'}}>
                         
                {auth? <p key={eachItem.id} onClick={()=>setAuth(false)}>{eachItem.name}</p>  : <p key={eachItem.id} onClick={()=>setAuth(true)}>{eachItem.value}</p>}
                        </div>
                    
                      ))}
                                      
              </div>

              
              <h1>{data}</h1>

              


    <h1> </h1>     
    <button >Change it</button>     
            </center>
        </div>
    )
}

export default Practice
*/