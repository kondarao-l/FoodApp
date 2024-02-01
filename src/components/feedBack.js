import React, { useState } from 'react'
import './file.css'

const imgUrl = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
</svg>

const reviewUrl = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
</svg>

const array = [
    {
        id: 1,
        icon: imgUrl,
        img: reviewUrl
    },
    {
        id: 2,
        icon: imgUrl,
        img: reviewUrl
    },
    {
        id: 3,
        icon: imgUrl,
        img: reviewUrl
    },
    {
        id: 4,
        icon: imgUrl,
        img: reviewUrl
    },
    {
        id: 5,
        icon: imgUrl,
        img: reviewUrl
    },
]

function Todolist() {


const emoji = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbPTfD6lVPJoeYHieIHh3yH_iTQ2eTYTUvA&usqp=CAU'

    const [data, setData] = useState(true)
    const [val, setVal] = useState(true)
    const [auth, setAuth] = useState(true)
    const [review, setReview] = useState(true)
    const [feedback, setFeedback] = useState(true)
    const [display,setDisplay] = useState()

   



    return (
        <div>
            <center>
                <h1>Feed BACK</h1>

                {data ?
                    <button onClick={()=>{setData(false); setDisplay(emoji)}} className='review-button'> {imgUrl}
                    </button>
                    :
                    <button className='review-button' onClick={() => {setData(true); setDisplay(null)}}> {reviewUrl}
                    </button>
                }

                {val ?
                    <button onClick={() => setVal(false)} className='review-button'> {imgUrl} </button>

                    :
                    <button className='review-button' onClick={() => setVal(true)}>  {reviewUrl}  </button>

                }

                {auth ?
                    <button onClick={() => setAuth(false)} className='review-button'> {imgUrl} </button>

                    :
                    <button className='review-button' onClick={() => setAuth(true)}>  {reviewUrl}  </button>

                }

                {review ?
                    <button onClick={() => setReview(false)} className='review-button'> {imgUrl} </button>

                    :
                    <button className='review-button' onClick={() => setReview(true)}>  {reviewUrl}  </button>

                }

                {feedback ?
                    <button onClick={() => setFeedback(false)} className='review-button'> {imgUrl} </button>

                    :
                    <button className='review-button' onClick={() => setFeedback(true)}>  {reviewUrl}  </button>

                }

        <br/>
                <h1> <img  src= {display}  /> </h1>


            </center>
        </div>
    )
}

export default Todolist




/*
<button onClick={() => reviewUrl} className='review-button'>{imgUrl}</button>
<button className='review-button'>{imgUrl}</button>
<button className='review-button'>{data}</button>
<button className='review-button'>{data}</button>
<button className='review-button'>{data}</button>
*/




















/*
import React from 'react'
import './file.css'

const Todolist = ({ todolist, deleteHandler }) => {
    return (
        <div>
            <div className='todo-card'>
                {todolist.map((item, index) =>
                    <div key={index}  style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <h2 style={{marginLeft:'30px'}}>{item}</h2>
                        <button  style={{marginRight:'10%'}}    onClick={() => deleteHandler(index)}>Delete </button>
                    </div>)}
            </div>
 

        </div>
    )
}

export default Todolist
*/
