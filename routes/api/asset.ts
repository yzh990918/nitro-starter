export default eventHandler(async (event) => { 
  const AssetsBaseURL ='http://' + event.req.headers.host + '/_dist'
  return {
    img: `${AssetsBaseURL}/image.png`,
  }
})
