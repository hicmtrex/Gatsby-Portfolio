import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import "../styles/home.css"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <section className="header__home">
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web devloper based in Tunisie</p>
          <Link to="/projects" className="btn__home">
            Projects
          </Link>
        </div>

        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
