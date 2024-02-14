import React,{useState} from 'react'
import sandwitch from '../components/FoodApp.js/FoodImages/sandwitch1.jpg'
import Item from './FoodApp.js/ItemCard'
import './FoodApp.js/Restaurents/Brouncheri.css'
function ChildComponent(props) {
  let items = [ 
    {
        no:1,
        img:sandwitch,
        name:' Artichoke Sandwich',
        description: 'Artichoke,spinach,cheddar and mushrooms.',
        price:'$7.50',
        popular:'popular',
        button:'add'
 },
 {
     no:2,
    img:sandwitch,
    name:' Egg Sandwich',
    description: 'Artichoke,spinach,cheddar and mushrooms.',
    price:'$7.50',
    popular:'popular',
    button:'add'
},
  ]

  const [card,setCard] = useState(false)

  return (
    <div>
       <h1> ChildComponent </h1>
       
        {items.map((index,item)=>(
          <div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '50px' }}>
    <h1> {item.name}</h1>
    <p>{item.description}</p>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className='price-heading'>{item.price}</h1>
        <p className='popular'>{item.popular}</p>
        <button onClick={()=>setCard(true)} className='add-icon'>{item.button}</button>
        {card ? <Item/> : null}
    </div>
</div>
<img style={{ height: '200px', width: '220px', marginRight: '70px' }} src={sandwitch} />

</div>
<hr className='horizantal-line' />  
         </div>
        ))}
        </div>
  )
}

export default ChildComponent