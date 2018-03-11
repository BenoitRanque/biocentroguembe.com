export default require.context('../pages', true, /^\.\/.*\.vue$/)
  .keys()
  .filter(page => page.split('/').length >= 2)
  .map(page => page.slice(2).slice(0, -4))
  .sort((a, b) => a.length - b.length)
  .filter(page => {
    switch (page) {
      case '404':
      case 'index':
        return false
      default:
        return true
    }
  })
