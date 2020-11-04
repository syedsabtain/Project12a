import React from 'react'
import {useEffect} from 'react';
import {useState} from 'react'
import { useSelector } from 'react-redux';
import { Signupinterface } from '../Interfaces/allinterface';
import Layout from './Layout';
import {Link} from 'gatsby'

export default({pageContext}) => {
let [data,
setData] = useState < any> ('')
  async function Data() {

  const result = await pageContext;
  setData(result)
  console.log(result, 'blog')
  }
  const Maindata = useSelector<Signupinterface,Signupinterface>(state=>state)

    useEffect(() => {
    Data();
    }, [])
    const length =data?.data?.blogimages.length;
    return (
    <Layout>
      <div className='mt-5'>


        <main role="main" className="container">
          <div className="row">
            <div className="col-md-8 blog-main">

              <div className="blog-post">
                <h2 className="blog-post-title font-italic display-4">{data?.data?.title}</h2>
                <p className="blog-post-meta">{data?.data?.publishDate} by <a href="#">{data?.data?.author}</a></p>


                <hr />
                <div className='row'>
                  <div className=' mb-3'><img src={data?.data?.image?.file.url} className='col-12' alt="" /></div>
                  {Maindata.Signup.islogin ? (
                  <> {data?.data?.body?.post?.map((value,key)=>{

                    return(
                    <div className='container mb-5' key={key}>
                      <p className='mb-3 mt-3'>{value}</p>
                      <hr />
                      {key>=length?(null):(<div className="row mb-5 mt-5">
                        <div className=''><img src={data?.data.blogimages[key]?.file.url} className='col-12 rounded'
                            alt={data?.data?.title} /></div>
                      </div>)}
                    </div>
                    )


                    })}</>
                  ) : (<>
                    {data?.data?.body?.post?.map((value,key)=>{

                    return(
                    <>{key<1?(<div className='container' key={key}>
                        <p className='mb-3 mt-3'>{value}</p>
                        <hr />
                        {key>=length?(null):(<div className="row">
                          <div className=''><img src={data?.data.blogimages[key]?.file.url} className='col-12 rounded'
                              alt={data?.data?.title} /></div>
                        </div>)}
                </div>):(null)}
</>
)


})}

<div className="card card-cascade wider reverse mt-5">


  <div className="view view-cascade ">
    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="Card image cap" />
    <a href="#!">
      <div className="mask rgba-white-slight"></div>
    </a>
  </div>

  <div className='  row d-flex justify-content-center card-img-overlay'>
    <div className='col-md-12 my-auto'>

      <div className="card-body card-body-cascade text-center  cardbg shadow-lg rounded">


        <h4 className="card-title"><strong>To View Full Blog</strong></h4>

        <h6 className="font-weight-bold indigo-text py-2">Login Or SignUp</h6>

        <div className="card-text mb-3">
          <Link to="/Option">Click Here</Link>
        </div>


        <a className="px-2 fa-lg li-ic"><i className="fab fa-linkedin-in"></i></a>

        <a className="px-2 fa-lg tw-ic"><i className="fab fa-twitter"></i></a>

        <a className="px-2 fa-lg fb-ic"><i className="fab fa-facebook-f"></i></a>

      </div>
    </div>
  </div>

</div>
</>)}

</div>
</div>





</div>

<aside className="col-md-4 blog-sidebar">
  <div className="p-4 mb-3 bg-light rounded">
    <h4 className="font-italic">About</h4>
    <p className="mb-0">{data?.data?.post?.post}</p>
  </div>

  <div className="p-4">
    <h4 className="font-italic">Archives</h4>
    <ol className="list-unstyled mb-0">
      <li><a href="#">March 2014</a></li>
      <li><a href="#">February 2014</a></li>
      <li><a href="#">January 2014</a></li>
      <li><a href="#">December 2013</a></li>
      <li><a href="#">November 2013</a></li>
      <li><a href="#">October 2013</a></li>
      <li><a href="#">September 2013</a></li>
      <li><a href="#">August 2013</a></li>
      <li><a href="#">July 2013</a></li>
      <li><a href="#">June 2013</a></li>
      <li><a href="#">May 2013</a></li>
      <li><a href="#">April 2013</a></li>
    </ol>
  </div>

  <div className="p-4">
    <h4 className="font-italic">Elsewhere</h4>
    <ol className="list-unstyled">
      <li><a href="#">GitHub</a></li>
      <li><a href="#">Twitter</a></li>
      <li><a href="#">Facebook</a></li>
    </ol>
  </div>
</aside>

</div>

</main>


</div>
</Layout>
)}