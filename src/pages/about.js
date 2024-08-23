import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            {/* <h1>About Me</h1> */}
            <p>Hi there! I’m the creator of this site, crafted with Gatsby. As a web developer and a single father to a teenage daughter, I lead a life that might seem ordinary to me, though I’m always envisioning greater possibilities. In reality, my journey has taken me around the world, allowing me to connect with remarkable individuals. Yet, my greatest pride lies in providing a loving and secure home for my daughter.</p>
            <Link to="/">Back to Home</Link>
        </Layout>
    )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage