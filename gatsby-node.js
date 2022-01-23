exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  createPage({
    path: "/test",
    component: require.resolve("./src/templates/test.js"),
    context: {},
  })
}
