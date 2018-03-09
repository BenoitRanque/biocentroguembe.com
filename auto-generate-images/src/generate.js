import imgList from './list'
import imgResize from './resize'

console.log(imgList)

Object.keys(imgList).forEach(imgName => {
  imgResize(imgName, imgList[imgName])
})
