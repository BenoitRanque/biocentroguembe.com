// import backdrops from './backdrops'

/*
 * Export files list for /dev/components folder
 */
export default require.context('./components/page', true, /^\.\/.*\.vue$/)
  .keys()
  .filter(page => page.split('/').length >= 2)
  .map(page => page.slice(2).slice(0, -4))
  .sort((a, b) => a.length - b.length)

// function backdrop (page) {
//   for (let i = 0, l = backdrops.length; i < l; i += 1) {
//     if (page.includes(backdrops[i].path)) { return backdrops[i].image }
//   }
//   return backdrops[backdrops.length - 1].image
// }
//
// function title (page) {
//   let t = page.split('_', 2)[1]
//   if (!t) {
//     t = page.split('_', 2)[0]
//     .substr(page.lastIndexOf('/') + 1)
//     .replace(/([&A-Z]+)/g, ' $1')
//     .replace(/([A-Z][a-z])/g, ' $1')
//     .replace(/(.)/, (str) => str.toUpperCase())
//   }
//   return t
// }
//
// function name (page) {
//   return page.split('_', 2)[0].substr(page.lastIndexOf('/') + 1)
// }
//
// function path (page) {
//   return page.split('_', 2)[0].toLowerCase()
// }
//
// export default list
//
// export {
//   list,
//   title,
//   name,
//   path,
//   backdrops,
//   backdrop
// }
