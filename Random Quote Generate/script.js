async function fetchData(){
    const cardDiv = document.getElementById('cardEle')
    let response = await fetch("https://dummyjson.com/quotes/random")
    let data = await response.json()
    
    const authorOption = document.getElementById('author')
    const quoteOption = document.getElementById('quote')
    cardDiv.style.visibility = 'visible'

    authorOption.innerText = data.author
    quoteOption.innerText = data.quote
}