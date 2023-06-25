const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect() {
    const times = 30 //Highlight each one a number of times before it stops

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        if (randomTag !== undefined) {
            highlightTag(randomTag)
        

        setTimeout(() => {
            unHighlightTag(randomTag) //unhighlighting each one
        }, 100)
        }
    }, 100); //time in milliseconds

    setTimeout(() => {
        clearInterval(interval) //stop

        setTimeout(() => {
            const randomTag = pickRandomTag() //Picking a random tag to land on and highlight

            highlightTag(randomTag)
        }, 100)

    }, times * 100)//30 *100 milliseconds
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag') //querySelectorAll is a Node list and all the tags will be put into the Node list
    return tags[Math.floor(Math.random() * tags.length)] //which is simialr to an array with an index
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}

