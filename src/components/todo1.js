import React, { useState } from 'react'

function Todo1() {
    const [data, setData] = useState('')
    const [todo, setTodo] = useState([])

    const submitHandler = (e) => {
        e.preventDefault();
        setTodo([...todo, data])
        setData('')
    }

    const deleteHandler = (indexValue) => {
        const newtodo = todo.filter((item,index)=>indexValue!== index)
        setTodo(newtodo)

    }


    return (
        <div>
            <center>
                <h1> Todo List Container</h1>
                <form onSubmit={submitHandler}>
                    <input type='text' value={data} name='data' onChange={(e) => setData(e.target.value)} />
                    <input type='submit' value='add' name='clicks' />
                </form>
                <div style={{height:'50vh',width:'50vw',backgroundColor:'yellow'}}>
                    {todo.map((item,index) => (<div key={index}  style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <h1 >{item}</h1>
                        <button onClick={()=>deleteHandler(index)}>Delete</button>
                    </div>))}
                </div>


            </center>
        </div>
    )
}

export default Todo1