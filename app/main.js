document.addEventListener('DOMContentLoaded', function (e) {

  'use strict'

  /** @type HTMLElement */
  const $animationElement = document.querySelector('div#animationElement')
  /** @type HTMLElement */
  const $tallElement = document.querySelector('div#tallElement')

  const computeProgress = function (e) {
    const scroll = document.scrollingElement.scrollTop
    const total = $tallElement.offsetHeight - window.innerHeight
    const progress = Math.min(Math.max(scroll / total, 0), 1)
    $animationElement.style.setProperty('--animation-progress', progress.toString())
  }

  document.addEventListener('scroll', computeProgress, { passive: true })
  document.addEventListener('resize', computeProgress, { passive: true })

  computeProgress({})

  var loaded = 0

  const load = function (src) {
    const img = new Image()
    img.src = src
    img.onload = img.onerror = function (e) {
      loaded += 1
      if (loaded == 3) {
        document.body.classList.add('loaded')
      }
    }
  }

  load('images/newspaper/newspaper.png')
  load('images/leaders/capitole.jpg')
  load('images/leaders/louphaine.png')

})
