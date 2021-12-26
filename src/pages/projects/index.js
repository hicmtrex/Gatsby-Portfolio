import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import Img from "gatsby-image"
import "../../styles/projects.css"

const Projects = ({ data }) => {
  const projects = data.projects.nodes
  const sites = data.contact.siteMetadata.contact
  return (
    <Layout>
      <div className="portfolio__projects ">
        <h2>Portfolio</h2>
        <h3>Projects & Websites I"ve Created</h3>
        <div className="all__projects ">
          {projects.map(project => (
            <Link key={project.id} to={`/projects/${project.frontmatter.slug}`}>
              <div>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>{sites}</p>
      </div>
    </Layout>
  )
}

//export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`

export default Projects
