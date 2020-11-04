import React, { ReactNode } from 'react'
import Header from '../Components/Header'
import Footer from './Footer'
type LayoutProps={
    children:ReactNode
}

export default({children}:LayoutProps)=>{

    return(
        typeof window !== `undefined` ? <div className='container'>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
        : null
    )
}