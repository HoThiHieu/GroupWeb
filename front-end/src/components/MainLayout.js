import React from 'react'
import Navbar from './navbar'


function MainLayout(props) {

    return (
        <>  
            <Navbar/>
            <props.component />
        </>
    )
}

export default MainLayout
