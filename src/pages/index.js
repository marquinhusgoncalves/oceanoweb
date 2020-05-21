import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"

export const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Home = ( {data} ) => (
  <>
    <SEO title="Home" />
    <div class="container">
      <h1>
        Logo Oceano Web
        <a href="http://www.oceanoweb.com.br">
          <Img
            fixed={data.file.childImageSharp.fixed}
            className="animated zoomIn"
            alt="Logo Oceano Web"
          />
        </a>
      </h1>
    </div>
  </>
)

export default Home
