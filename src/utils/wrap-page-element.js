const React = require("react")
const { IntlProvider } = require("react-intl")
const Sentry = require("@sentry/gatsby")

const { default: Layout } = require("../components/layout")

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return (
    <Sentry.ErrorBoundary fallback={"An error has occurred"}>
      <IntlProvider
          locale={"de"}
          messages={{ "message.key": "Message Value" }}>
        <Layout {...props}>{element}</Layout>
      </IntlProvider>
    </Sentry.ErrorBoundary>
  )
}
