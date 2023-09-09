import * as React from "react"
import { Navbar } from "../components/nav"
import './styles.css'
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import '@fontsource/rubik'
import  {Link}  from 'gatsby-link'
// import { graphql, useStaticQuery } from 'gatsby'

const IndexPage = () => {
  

  return (
    <main>
      <Navbar></Navbar>
      <body id='homepage-body'>
        <div class="slice-wrapp">
          <section className='hero'>
            <div className="hero-container">
              <StaticImage className="hero-backgroud-img" src='../images/Designer.jpeg'></StaticImage>
              <h1>Ayudamos a bares y restaurantes en su precencia web</h1>
            </div>
          </section>
        </div>
        <div class="slice-wrapp">
          <section className='que_hacemos_slice'>
            <h2>Precencia online, sin esfuersos requeridos de parte de ti</h2>
            <p className="p1">Nos encargamos de reducir al maximo la fricción requerida de tu parte al momento de entregar servicio</p>
            <ul className='que_hacemos_slice_list'>
              <li>Sitios Web Diseñados con codigo</li>
              <li>Seo Local</li>
              <li>Local service adds</li>
            </ul>
            <p className="p2">Todo lo necesario para mejorar los resultados que trae tu precencia en la web</p>
            <Link id="que_hacemos_slice_CTA" to="/servicio">Que más ofrecemos</Link>
          </section>
        </div>
        <section className="testimonials"></section>
        <div class="slice-wrapp">
          <section className="quienes_somos_slice">
            <h2>Quienes somos</h2>
            <p className="p1">Somos una empresa que se especializada en la creación de sitios web para bares y restaurantes, con el objetivo de resolver problemas especificos del rubros</p>
          </section>
        </div>
        <section className='empezar_call_to_action'>

        </section>
      </body>
    </main>
    
  )
}


export default IndexPage

export const Head = () => <title>HoldTML</title>
