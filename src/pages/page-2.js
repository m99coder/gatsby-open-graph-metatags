import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/seo"

const SecondPage = () => (
  <React.Fragment>
    <Seo title="Page two" />
    <section className="section">
      <div className="container">
        <h1 className="title">Hi from the second page</h1>
        <p className="content">Welcome to page 2</p>
        <p className="content">
          <Link to="/">Go back to the homepage</Link>
        </p>
      </div>
    </section>
  </React.Fragment>
)

export default SecondPage
