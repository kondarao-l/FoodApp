import React from 'react'
import MainFile from './components/FoodApp.js/MainFile'



function App() {
  return (
    <div >
      <center>
      <MainFile/>
      
      </center>
    
    </div>
  )
}
export default App




/*
 <BrowserRouter>
        <center>

        </center>

        <Routes>
          <Route path='/' element={<HomePage />} ></Route>
          <Route path='/dashboard' element={<Dashboard />} ></Route>
          <Route path='/brouncheri' element = {<Brouncheri/>}></Route>
        </Routes>
      </BrowserRouter>
*/























/*
 <store.Provider value={[data,setData]}>
          <h1>Context API</h1>
          <Component1 />
          <Component2 />
          

        </store.Provider>


    <input style={{margin:'10px'}} type='text' placeholder='Title' value={title} name='title ' onChange={notesButton}/> <br/>
          <input style={{margin:'10px'}} type='text' placeholder='Take a note' value={note} name='note' onChange={notesButton}/> <br/>

         <div style={{display:'flex',flexDirection:'row',justifyContent:'end', width:'70px'}}>

        <input type='submit'/>
         </div>    
         
         



             <div style={{ backgroundColor: ' #aab8c8', backgroundSize: 'cover', height: '90vh', width: '50vw', margin: '15px' }}>

      <h1 style={{ color: '#4c63b6', textAlign: 'center' }}>Notes</h1>

     


        <div style={{ height: '40vh', width: '40vw', backgroundColor: 'white', margin: '30px' }}>



          <input type='text' value={title} name='title' onChange={notesButton} placeholder='Title' />  <br />
          <input type='text' value={note} name='note' onChange={notesButton} placeholder='Notes' /> <br />
         <button onClick={submitHandler}>add</button>


        </div>
      
      <div>
        <p> Title : {data.title}</p>
        <p> Note : {data.note}</p>
      </div>

      <div>

      </div>




    </div>


*/