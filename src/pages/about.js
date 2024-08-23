import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            {/* <h1>About Me</h1> */}
            <p>Hi there! I'm the creator of this site, which I built with Gatsby.</p>
            <Link to="/">Back to Home</Link>
        </Layout>
    )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage