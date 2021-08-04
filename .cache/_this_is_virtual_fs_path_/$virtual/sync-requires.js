
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/dev/Documents/project/codeblog/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/home/dev/Documents/project/codeblog/src/pages/index.js"))
}

