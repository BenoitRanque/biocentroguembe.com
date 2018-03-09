import imgList from './list'
import imgResize from './resize'

Object.keys(imgList).forEach(imgName => {
  imgResize(imgName, imgList[imgName])
})
