/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

const { wrapPageElement } = require("./src/utils/wrap-page-element")

// Wraps every page
exports.wrapPageElement = wrapPageElement
