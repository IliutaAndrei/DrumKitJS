window.addEventListener("keydown", (event) => {
    const audio = document.querySelector(`audio[data-key = ${event.code}]`)
    const key = document.querySelector(`.key[data-key = ${event.code}]`)
    if(!audio) return 

    audio.currentTime = 0 //rewind to the start
    audio.play()
    
    key.classList.add("playing")
})

window.addEventListener("keyup", (e) => {
    const key = document.querySelector(`.key[data-key = ${e.code}]`)
    key.classList.toggle("playing")
})