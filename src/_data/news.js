const axios = require("axios")
require("dotenv").config()

module.exports = async function () {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=se&apiKey=${process.env.API_KEY}&pageSize=5`
    )
    return response.data
  } catch (error) {
    console.error(error)
  }
}
