
// Google api promise
let promise // local reference to promise

export default function loadGoogleAPI () {
  if (!promise) { // if promise not created
    promise = new Promise((resolve, reject) => {
      if (!document.getElementById('google-maps-api')) {
        const script = document.createElement('script')
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCwFePT0IFv1e0mHzCCwY9gwPJhtwa4JIw'
        script.async = true
        script.id = 'google-maps-api'
        script.onload = () => {
          resolve()
        }
        script.onerror = (err) => {
          reject(err)
        }
        document.body.appendChild(script)
      }
      else {
        console.log(new Error('element id "#google-maps-api" is reserved for google script'))
      }
    })
  }
  return promise
}
