export default eventHandler((event) => {
  console.log(event)
  return `Hello ${event.context.params.name}!`
})
