import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundArea from '../components/Globals/BackgroundArea';
import Info from '../components/Home/Info';

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundArea img={data.img.childImageSharp.fluid} 
    title="JavaScript not Java" 
     />
    <Info />
  </Layout>
);

export const query = graphql`
  {
  img: file(relativePath: {eq: "default-background.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}

`

export default IndexPage
