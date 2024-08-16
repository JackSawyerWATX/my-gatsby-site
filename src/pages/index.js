// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage