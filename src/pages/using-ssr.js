import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/seo"

const UsingSSR = ({ serverData }) => {
  return (
    <React.Fragment>
      <Seo title="Using SSR" />
      <section className="section">
        <div className="container">
          <h1 className="title">SSR page</h1>
          <p className="content">
            <img
              style={{ width: "300px" }}
              alt="A random dog"
              src={serverData.message}
            />
          </p>
          <p className="content">Welcome to a server side rendered page with a random dog photo</p>
          <p className="content">
            To learn more, head over to our{" "}
            <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/">
              documentation about Server Side Rendering
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
}

export default UsingSSR

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
