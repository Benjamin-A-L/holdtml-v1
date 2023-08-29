import * as React from "react"
import { Navbar } from "../components/nav"
import './styles.css'
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import '@fontsource/rubik'
import { graphql, useStaticQuery } from 'gatsby'

const IndexPage = () => {
  

  return (
    <main>
      <Navbar></Navbar>
      <body>
        <section className='hero'>
          <div className="hero-container">
            <StaticImage className="hero-backgroud-img" src='../images/Designer.jpeg'></StaticImage>
            <h1>Ayudamos a bares y restaurantes en su precencia web</h1>
          </div>
          <div className="hero-container">
            <StaticImage className="hero-backgroud-img" src='../images/Designer.jpeg'></StaticImage>
            <h1>Ayudamos a bares y restaurantes en su precencia web</h1>
          </div>
          <div className="hero-container">
            <StaticImage className="hero-backgroud-img" src='../images/Designer.jpeg'></StaticImage>
            <h1>Ayudamos a bares y restaurantes en su precencia web</h1>
          </div>
        </section>
        <section className='que_hacemos_slice'></section>
        <section className="testimonials"></section>
        <section className='empezar_call_to_action'></section>
      </body>
    </main>
    
  )
}


export default IndexPage

export const Head = () => <title>HoldTML</title>
