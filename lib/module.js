const openInEditor = require('express-open-in-editor')

module.exports = async function module (moduleOptions) {
  if (this.options.debug && this.options.dev) {
    const options = Object.assign({
      path: '/_open',
      editor: 'code'
    }, this.options.openInEditor, moduleOptions)

    this.addServerMiddleware({
      path: options.path,
      handler: openInEditor(options)
    })
  }
}
