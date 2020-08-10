const contentfulManagement = require("contentful-management")
require('dotenv').config()
module.exports = function() {
    const contentfulClient = contentfulManagement.createClient({
      accessToken: process.env.ACCESSTOKEN_MANAGEMENT,
    })
   
    return contentfulClient
      .getSpace(process.env.SPACE)
      .then(space => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT))
  }