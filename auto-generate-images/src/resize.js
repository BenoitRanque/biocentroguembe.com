import sharp from 'sharp'
import imgSizes from './sizes'
import cfg from './cfg'

export default function imgResize (name, sizes) {
  if (typeof sizes === 'string') sizes = imgSizes[sizes]

  if (!sizes) return console.error(`No standard size found for ${name}`)

  let img = sharp(`${cfg.inputPrefix}/${name}.jpg`)
  
  sizes.forEach(size => {
    img
      .resize(size.width, size.height, {
        kernel: sharp.kernel.nearest
      })
      .toFile(`${cfg.outputPrefix}/${size.name}/${name}.jpg`)
      .then(() => {
        console.log(`Generated image ${name} in folder ${size.name}`)
      })
  })

}