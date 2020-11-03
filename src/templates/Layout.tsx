import React, { ReactNode } from 'react'
import Header from '../Components/Header'
type LayoutProps={
    children:ReactNode
}

export default({children}:LayoutProps)=>{

    return(
        <div className='container'>
            <Header></Header>
            {children}
        </div>
    )
}