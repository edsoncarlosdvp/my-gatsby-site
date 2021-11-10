// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'
import MyComponent from '../myComponent/myComponent'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <Link to="/about">Sobre</Link>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <MyComponent />
      </Layout>
    </main>
  )
}
// Step 3: Export your component
export default IndexPage