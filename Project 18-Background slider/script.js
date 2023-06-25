const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn =  document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0 //if changed the second slide = 3, as it is a node list and is zero based

rightBtn.addEventListener('click', () => {
    activeSlide++ //increment by 1

    if(activeSlide > slides.length - 1) {
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()
})


leftBtn.addEventListener('click', () => {
    activeSlide-- //decrement the slides by 1

    if(activeSlide < 0) {
        activeSlide = slides.length - 1
    }

    setBgToBody()
    setActiveSlide()
})

setBgToBody() //call function

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
    /*OR slides.ForEach(slide => slide.classList.remove('active))*/
    slides[activeSlide].classList.add('active')
}