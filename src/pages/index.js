import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "./mystyles.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="section">
      <div className="container">
        <h1 className="title">Hi people</h1>
        <p className="content">Welcome to your new Gatsby site.</p>
        <p className="content">Now go build something great.</p>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <StaticImage
          src="../images/gatsby-astronaut.png"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
        <p>
          <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
          <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
          <Link to="/using-dsg">Go to "Using DSG"</Link>
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
