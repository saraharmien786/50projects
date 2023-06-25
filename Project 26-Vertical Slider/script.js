const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
 //Index is zero based even though there is four in total, it starts at 0!, we want to get get the last index.

 upButton.addEventListener('click', () => changeSlide('up'))
 downButton.addEventListener('click', () => changeSlide('down'))

 const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    
    if(direction === 'up') {
        activeSlideIndex++ //Increment by 1
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        } 
        
    } else if(direction === 'down') {
        activeSlideIndex-- //Decrement
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        } 
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
   
  }