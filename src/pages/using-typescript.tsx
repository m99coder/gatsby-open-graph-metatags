// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <React.Fragment>
    <Seo title="Using TypeScript" />
    <section className="section">
      <div className="container">
        <h1 className="title">Gatsby supports TypeScript by default!</h1>
        <p className="content">
          This means that you can create and write <em>.ts/.tsx</em> files for your
          pages, components etc. Please note that the <em>gatsby-*.js</em> files
          (like gatsby-node.js) currently don't support TypeScript yet.
        </p>
        <p className="content">
          For type checking you'll want to install <em>typescript</em> via npm and
          run <em>tsc --init</em> to create a <em>tsconfig</em> file.
        </p>
        <p className="content">
          You're currently on the page "{path}" which was built on{" "}
          {data.site.buildTime}.
        </p>
        <p className="content">
          To learn more, head over to our{" "}
          <a href="https://www.gatsbyjs.com/docs/typescript/">
            documentation about TypeScript
          </a>
          .
        </p>
        <p className="content">
          <Link to="/">Go back to the homepage</Link>
        </p>
      </div>
    </section>
  </React.Fragment>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
