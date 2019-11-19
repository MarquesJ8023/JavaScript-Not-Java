import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundArea from '../components/Globals/BackgroundArea';
import Info from '../components/Home/Info';

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundArea img={data.img.childImageSharp.fluid} 
    title="About Us" styleClass="about-background"
     />
    <Info />
  </Layout>
);

export const query = graphql`
  {
  img: file(relativePath: {eq: "about-background.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}

`

export default AboutPage;
