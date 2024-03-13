const glide = new Glide('.glide', {
    type: 'carousel',
    hoverpause: false,
    autoplay: 7000
}).mount()

console.log(glide)

const pauseButton = document.querySelector('.pause-button')

pauseButton.addEventListener('click', () => {
    const isPaused = pauseButton.getAttribute("data-paused")
    pauseButton.setAttribute("data-paused", isPaused === "true" ? false : true)
    if(isPaused==="false") {
        glide._c.Autoplay.stop()
    }else {
        glide._c.Autoplay.start()
    }
})