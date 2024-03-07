
function QuoteFunction() {
var quoteList = document.querySelector("#quote-list");

fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then((response) => response.json())
    .then((jsonData) => {

        for (var i = 0; i = jsonData.results; i++) {
            var quoteListItem = document.createElement('quoteListItem')
            quoteListItem.textContent = jsonData.results[i].quote;
            quoteList.appendChild(quoteListItem);
        }

        catchQuote = jsonData[0].quote;
        catchQuote += " - " + jsonData[0].character;
        console.log(catchQuote);

        document.getElementById('result').innerHTML = catchQuote;

    })
}

function SlideFunction() {
    let slideIndex = 0;
    showSlides();
    
    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
    }

    setInterval(function() {
        showSlides();
    }, 3000);
}


window.addEventListener("DOMContentLoaded", function() {
    SlideFunction();
    QuoteFunction();
});

