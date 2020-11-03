import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getvalue} from '../Redux/Slicer/ReduxSlicer'
import '../styles/bootstrap.min.css'
import '../styles/style.css'
import {Link} from 'gatsby'
import Mainbody from '../Components/Mainbody'
import Layout from './Layout'
// import {Link} from 'gatsby'
export default({pageContext})=>{
    let[data,setData] = useState<any>()

   async function Handledata(){
        const result = await pageContext
        setData(result?.itemDetails?.data?.allContentfulBlogPost?.nodes);
        dispatch(getvalue({item:result?.itemDetails?.data?.allContentfulBlogPost?.nodes}))
    }
    
    console.log(data,'products')
    // const value = useSelector(state=>state)
    // console.log(value,'red')
    const value = useSelector(state=>state)
    const dispatch = useDispatch();
    useEffect(()=>{
        Handledata()
        
    },[])
  
    
    
    
    console.log(value,'redux')
    return(
       <Layout>
            <div className='container mt-5'>
             
             <div className="jumbotron  text-white rounded bg-dark bgimage text-center">
           <div className="col-md-6 px-0  mx-auto">
             <h1 className="display-4 font-italic">Welcome to World's Best Blogs Site</h1>
             {/* <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p> */}
             {/* <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p> */}
           </div>
         </div>
       
         <div className="row mb-2">
          {data?.map((value,key)=>{
              return(
                 <div className="col-md-6" key={key}>
                 <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                   <div className="col p-4 d-flex flex-column position-static">
                     <strong className="d-inline-block mb-2 text-primary">BLOG</strong>
              <h3 className="mb-0  font-italic">{value.title}</h3>
              <div className="mb-1 text-muted">{value.publishDate}</div>
              <p className="card-text mb-aut ">{value?.post?.post}</p>
                     <Link to={value.slug} className="stretched-link">Continue reading</Link>
                   </div>
                   <div className="col-auto d-none d-lg-block">
                     <img className="bd-placeholder-img img-thumbnail" width="200" height="250" src={value.image.file.url}  ></img>
                   </div>
                 </div>
               </div>
              )
          })}
          
         </div>
         </div>
       </Layout>
    )
}