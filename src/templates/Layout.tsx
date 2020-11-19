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
            <div className='mt-5'>
            <Footer></Footer>
            </div>
        </div>
        : null
    )
}