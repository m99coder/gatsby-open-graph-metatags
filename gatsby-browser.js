/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

const React = require("react")
const { default: Layout } = require("./src/components/layout")

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
