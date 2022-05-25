import React from 'react'
import Navbar from './navbar'


function MainLayout(props) {

    console.log(props);
    return (
        <>  
            <Navbar/>
            <props.component />
        </>
    )
}

export default MainLayout
