import React from 'react'
import Layout from '../templates/Layout'
import {Link as GatsbyLink} from 'gatsby'




export default()=>{

return(
<Layout>


  <main role="container">

    <div className="jumbotron  text-white rounded bg-dark mainimage text-center">
      <div className="col-md-6 px-0  mx-auto">
        <h1 className="display-4 font-italic txttitle">Welcome to Blogs Site</h1>
        <p className="lead my-3 txttitle1">Get updated with our latest and geniune News and informtion</p>
        <GatsbyLink to="/BLogs" className="lead mb-0 font-weight-bold btnd ">Click Here to See Blogs</GatsbyLink>
      </div>
    </div>
  </main>
</Layout>
)
}