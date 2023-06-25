/*
** This line(4) selects all classes with .panels and stores them into the variable panels
*/
const panels =document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveclasses()
        panel.classList.add('active')
    })
})

function removeActiveclasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })

}

        
    