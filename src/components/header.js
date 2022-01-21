import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <nav class="navbar" role="navigation" aria-label="main navigation" style={{
    background: `rebeccapurple`,
  }}>
    <div className="container py-6">
      <Link to="/" className="has-text-white">
        {siteTitle}
      </Link>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
