const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
       .split('') /* Splittimg into an array = put each letter into an item in the array */
       .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`) /* Mapping each letter to create an array with a span around it */
       .join('') /*Turning back into a string */
} )