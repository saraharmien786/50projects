const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()
//using ASYNC/AWAIT
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json,'
        },
    }
    /*
    ** click on the link in the fetch function to check out the api
    */
    const res = await fetch('https://icanhazdadjoke.com', config) //this api returns json result having id, joke and status

    const data = await res.json() //json is a return type or format of data

    jokeEl.innerHTML = data.joke // this data.joke will replace the inside of the div or any element
}

// function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json,'
//         }
//     }

//     fetch('https://icanhazdadjoke.com', config)
//     .then((response) => response.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke
//     })
// }