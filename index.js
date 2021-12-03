const listBooks = () => {
    fetch("https://striveschool-api.herokuapp.com/books")
        .then(response => response.json())
        .then(books => {
            // Dom Manipulation
            console.log(books)




            const row = document.querySelector(".row")
            for (let i = 0; i < books.length; i++) {
                const booksName = books[i]

                const col = document.createElement("div")
                col.className = "col-3"
                col.innerHTML = `<div >
                    <div class="card mb-3" id="card-for-hide" id="card">
                        <img id="api-img" src=${booksName.img} class="card-img-top" alt= image>
                        <div class="card-body">
                            <h5 class="card-title" id="api-card-title">${booksName.title}</h5>
                            <button type="button" id="api-price" class="btn btn-sm price-button btn-secondary">$${booksName.price}</button>                                    
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button type="button" id="skip-button" onclick="skipCard(event)" class="btn btn-sm btn-outline-secondary">
                                Skip
                            </button>
                            <button type="button" id="add-to-card" class="btn btn-sm btn-outline-secondary" onclick="rightCard(event)">
                               Add to card
                            </button>
                            </div>
                        </div>
                        <small class="text-muted" id="text-muted-api">id: ${booksName.asin}</small>
                        </div>
                    </div>
                    </div>`
                row.appendChild(col)
            }



        })
        .catch(err => console.log(err))
        .finally(() => console.log("fetching done"))
}


window.onload = () => {
    window.addEventListener("load", listBooks())

    console.log("LAST CONSOLE LOG, but seen as first thing (synchronous)")
}

function skipCard(event) {
    event.target.parentElement.parentElement.parentElement.parentElement.style.display = "none"
    // document.getElementById("card-for-hide").style.display = "none"
}

function rightCard(event) {
    document.getElementById("right-whole-card").style.display = "block"
    let apiCardImg = document.getElementById("api-img")
    let apiTitle = document.getElementById("api-card-title")
    let apiPrice = document.getElementById("api-price")
    let apiId = document.getElementById("text-muted-api")
    document.getElementById("right-side-img").src = apiCardImg.src
    document.getElementById("card-title-right").innerText = apiTitle.textContent
    document.getElementById("right-price").innerText = apiPrice.textContent
    document.getElementById("right-text-muted").innerText = apiId.textContent
}

function removeRight() {
    document.getElementById("right-whole-card").style.display = "none"
}