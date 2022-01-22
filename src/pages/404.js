import * as React from "react"

import Seo from "../components/seo"

const NotFoundPage = () => (
  <React.Fragment>
    <Seo title="404: Not found" />
    <section className="section">
      <div className="container">
        <h1 className="title">404: Not Found</h1>
        <p className="content">You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </section>
  </React.Fragment>
)

export default NotFoundPage
