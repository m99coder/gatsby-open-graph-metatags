import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/seo"

const UsingDSG = () => (
  <React.Fragment>
    <Seo title="Using DSG" />
    <section className="section">
      <div className="container">
        <h1 className="title">Hello from a DSG Page</h1>
        <p className="content">This page is not created until requested by a user.</p>
        <p className="content">
          To learn more, head over to our{" "}
          <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/">
            documentation about Deferred Static Generation
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

export default UsingDSG
