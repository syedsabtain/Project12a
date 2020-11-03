
var path = require('path')
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // Only update the `/app` page.
  // if (page.path.match(/^\/App/)) {
  //   // page.matchPath is a special key that's used for matching pages
  //   // with corresponding routes only on the client.
  //   page.matchPath = "/App/*"
  //   // Update the page.
  //   createPage(page)
  // }
}

exports.createPages = async({actions,graphql})=>{

    const {createPage} = actions

    const result = await graphql(`
    
      {
        allContentfulBlogPost {
            nodes {
              author
              slug
              title
              publishDate
              post {
                post
              }
              image {
                file {
                  url
                }
              }
              blogimages {
                title
                file {
                  url
                }
              }
              body {
                post
              }
            }
          }
      }
    `)
    value  = result;
   
    createPage({
        path: `/BLogs`,
        component: path.resolve('./src/templates/Mainblog.tsx'),
        context: {
            itemDetails: result
        }
    })
    console.log(result.data.allContentfulBlogPost.nodes,'server')

    result.data.allContentfulBlogPost.nodes.map((value)=>{
      
      createPage({
        path:`/BLogs/${value.slug}`,
        component: path.resolve('./src/templates/Blogs.tsx'),
        context:{
          data:value
        }
  
      })
      
    })
}

