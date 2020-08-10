const fs = require("fs")
const glob = require("glob")
const path = require("path")
const grayMatter = require("gray-matter")
const marked = require("marked")
var qs = require("qs")
const getPost = (fileName) => {
  const filePath = path.resolve(__dirname, `${fileName}.md`)
  if (!fs.existsSync(filePath)) return { errorCode: 404 }
  const post = fs.readFileSync(filePath, "utf-8")
  const { data, content } = grayMatter(post)
  const html = marked(content)
  return { ...data, html }
}
const getAllPost = () => {
  const posts = glob.sync(__dirname + "/**/*.md")
  return posts
    .map((file) => [fs.readFileSync(file), file])
    .map(([post, file]) => ({
      ...grayMatter(post).data,
      slug: file.split("/").pop().replace(".md", ""),
    }))
}
exports.handler = async (event, context) => {
  try {
    const { slug } = event.queryStringParameters
    const body = slug ? getPost(slug) : getAllPost()
    return {
      statusCode: 200,
      body: JSON.stringify(body),
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
