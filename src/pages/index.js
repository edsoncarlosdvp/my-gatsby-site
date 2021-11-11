// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'
import { StaticImage } from 'gatsby-plugin-image'
import MyComponent from '../myComponent/myComponent'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <Link to="/about">Sobre</Link>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <MyComponent />
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
      </Layout>
    </main>
  )
}
// Step 3: Export your component
export default IndexPage