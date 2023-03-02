export default eventHandler(async event => {
  // https://www.jsdocs.io/package/h3#package-index-functions
  const body = await readBody(event)
  const headers = await getRequestHeaders(event)
  console.log(body, headers)
  return { updated: true }
})
