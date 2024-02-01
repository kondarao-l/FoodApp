import React, { useEffect, useState } from 'react'
import './file.css'

function Task1() {



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



    const [list, setList] = useState(products)
    const [search, setSearch] = useState('')
    const [auth, setAuth] = useState(true)
    const [data, setData] = useState(true)


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos').then(

            response => response.json()

        ).then(json => setData(json))


    }, [])



    return (

        <div>
            <center>
                {auth ? <h1> List View</h1> : <h1> Grid View</h1>}


                <input type='search' placeholder='search' onChange={(e) => setSearch(e.target.value)} /> <br />


                {auth ? <button className='button' onClick={() => setAuth(false)} > List View / Grid View</button> : <button className='button' onClick={() => setAuth(true)} > List View / Grid View</button>}




                {auth ?
                    <div className='list-card'>
                        {list.filter(items => items.name.toLowerCase().includes(search)).map(items => (
                            <div className='card-container' >

                                <img style={{ height: "120px", width: '100px',marginLeft:'10%' }} src={items.imgUrl} />
                                <div style={{marginRight:'30%',marginLeft:'10px'}}>
                                    <p>  {items.name} </p>
                                    <p>  {items.price} </p>
                                </div>

                            </div>
                        ))}
                    </div>
                    :
                    <div style={{ display: 'flex', flexWrap: 'wrap', width: '50%' }}>
                       
                       {list.filter(items => items.name.toLowerCase().includes(search)).map(items => (
                            <div className='card-container' style={{margin:'10px'}} >

                                <img style={{ height: "120px", width: '100px',marginLeft:'10%' }} src={items.imgUrl} />
                                <div style={{marginRight:'30%',marginLeft:'10px',display:'flex',flexDirection:'column',justifyContent:'start',alignItems:'flex-start'}}>
                                    <p>  {items.name} </p>
                                    <p>  {items.price} </p>
                                </div>

                            </div>
                        ))}
                    </div>

                }



            </center>





        </div>
    )
}

export default Task1




/*
            {data.map(item=> (
                <li>
                    
                      {item.product_image} {item.product_title} {item.product_badge} {item.product_variants}
                    

                </li>
            ))}



        <center>
            <h1> Grid View</h1>
            <input type='search' placeholder='search' onChange={(e)=>setSearch(e.target.value)}/>
            {list.filter(items=>items.name.includes(search)).map(items=>(
                <div className='card-container' > 
                   <p>  {items.name} </p>
                     <img style={{height:"120px",width:'100px'}} src={items.imgUrl}/>
                     <p>  {items.price} </p>
                </div>
            ))}

        </center>



*/