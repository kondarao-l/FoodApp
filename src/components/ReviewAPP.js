import React, { useState } from 'react';

function Review() {
  const [auth, setAuth] = useState(false)
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [displayedData, setDisplayedData] = useState([])

  

  const resultButton = () => {
    if (title && note) {
      const newResult = [...displayedData, { title, note }]
      setDisplayedData(newResult)
      setTitle('')
      setNote('')
    } else {
      alert('please enter the data')
    }


  }

 

  return (
    <div>
      <center>
        <h1>Hello</h1>
        <div>
          <input style={{ margin: '10px', border:'none' }} type='textArea' placeholder='Title:' value={title} name='title ' onChange={(e) => setTitle(e.target.value)} /> <br />
          <input style={{ margin: '10px', border:'none'}} type='text' placeholder='Take a note:' value={note} name='note' onChange={(e) => setNote(e.target.value)} /> <br />
             
             <div onClick={()=>setAuth(true)}>
              <button onClick={resultButton} >Click on</button> 
             </div>
        </div>

       
       {auth ?       
         
         < div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center',flexWrap:'wrap',width:'70%' }} >
          {displayedData.map((data, index) => (
            <div key={index} style={{ backgroundColor: 'yellow', height: 'auto', width: '150px', margin: '20px', padding: '15px', borderRadius: '10px', borderBlockColor: 'black' }}>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start' }}>
                <strong>Title:</strong> {data.title} 
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start' }}>
                {data.note}
              </div>
            </div>
          ))}
        </div>

        : 
        <div style={{margin:'50x'}}>
           <img style={{ height: '70px', width: '60px', marginTop:'50px' }} src='https://assets.ccbp.in/frontend/hooks/empty-notes-img.png' />
          <p>No Notes yet</p>
        </div> 
        

          }



      </center>
    </div>
  )
}
export default Review
