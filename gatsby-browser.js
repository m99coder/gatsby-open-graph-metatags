/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

const { wrapPageElement } = require("./src/utils/wrap-page-element")

// Wraps every page
exports.wrapPageElement = wrapPageElement
