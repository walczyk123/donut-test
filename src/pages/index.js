import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const HomePage = () => {
  return (
    <Layout pageTitle="Moja karczma">
    <p>Co sie stało?</p>

    <StaticImage
        alt="No prosze, wciaz to potrafie"
        src="https://images9.gry-online.pl/galeria/galeria_320/1070339564.jpg"
      />
    </Layout>
  )
}

export default HomePage
