import React, { useState } from 'react'

function Ccbp() {
    const [auth, setAuth] = useState(true)

    return (
        <div >

            <center>

            {auth ?
                <div onClick={() => setAuth(false)} style={{ backgroundColor: 'orange', height: '500px', width: '600px', backgroundSize: 'cover' }}>
                    <h1> Hello </h1>

                    <div>

                        <div style={{ margin: '15px', backgroundColor: 'white', height: '250px', width: '300px', padding: '15px' }}>
                            <p>How Satisfied with our <br /> customer support performance</p>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img style={{ margin: '10px', height: '50px', width: '50px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbPTfD6lVPJoeYHieIHh3yH_iTQ2eTYTUvA&usqp=CAU' />
                                <img style={{ margin: '10px', height: '50px', width: '50px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbPTfD6lVPJoeYHieIHh3yH_iTQ2eTYTUvA&usqp=CAU' />
                                <img style={{ margin: '10px', height: '50px', width: '50px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbPTfD6lVPJoeYHieIHh3yH_iTQ2eTYTUvA&usqp=CAU' />
                            </div>

                        </div>
                    </div>
                </div>

                :

                <div onClick={() => setAuth(true)} style={{ backgroundColor: 'orange', height: '500px', width: '600px', backgroundSize: 'cover',marginBottom:'20px' }}>
                   <h1>Hello</h1>
                    <div>

                        <div style={{ margin: '25px', backgroundColor: 'white', height: '250px', width: '300px', padding: '15px' }}>

                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img style={{ margin: '10px', height: '90px', width: '90px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU3Z1dPoWy2q0MDpwmRfOBz9tg9Z-iRR8ilQ&usqp=CAU' />

                            </div>
                            <h1>Thank you</h1>
                            <p>We Will Improve our performance <br /> by using your feed back</p>

                        </div>
                    </div>
                </div>

            }


            </center>


        </div>
    )
}

export default Ccbp

// {auth ? <button onClick={() => setAuth(false)}>Login</button> : <button onClick={() => setAuth(true)}>Logout</button>}