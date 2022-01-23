import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/seo"

const TestPage = () => (
  <React.Fragment>
    <Seo title="Dynamic Test Page" />
    <section className="section">
      <div className="container">
        <h1 className="title">Hello from a Dynamic Test Page</h1>
        <p className="content">This page is created by using `createPages` hook.</p>
        <p className="content">
          <Link to="/">Go back to the homepage</Link>
        </p>
      </div>
    </section>
  </React.Fragment>
)

export default TestPage
