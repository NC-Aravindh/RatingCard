let rating = document.querySelectorAll(".rating-list li");
let answer;
let icon = document.getElementById('icon');
let ratingAnswer = document.getElementById('rating-answer');
let titleMsg = document.getElementById('title');

for (let i = 0; i < rating.length; i++) {
    rating[i].addEventListener('click', ratingClicked);
}


function ratingClicked(event) {

    event.target.style.backgroundColor = "hsl(25, 97%, 53%)";
    event.target.style.color = "hsl(216, 12%, 8%)";
    answer = event.target.innerHTML;
}

document.getElementById('submit').addEventListener('click', (event) => {

    event.target.style.backgroundColor = "hsl(0, 0%, 100%)";
    if (answer === undefined) {
        alert("Please select a rating");
        event.target.style.backgroundColor = "hsl(25, 97%, 53%)";
        
    }
    else {
        event.target.style.backgroundColor = "hsl(0, 0%, 100%)";
        icon.setAttribute('src', './images/illustration-thank-you.svg');
        // icon.style.maxWidth = "70%";
        icon.style.maxWidth = "50%";
        icon.style.margin = "auto";

        titleMsg.innerHTML = "Thankyou!";
        titleMsg.style.textAlign = "center";

        ratingAnswer.innerHTML = "You selected " + answer + " out of 5";
        ratingAnswer.style.display = "inline";

        document.getElementsByClassName('rating-list')[0].style.display = "none";
        document.getElementById('submit').style.display = "none";

        document.getElementById('rating-msg').innerHTML = "We appreciate you taking time to give rating. If you ever need more support,don't hesitate to get in touch!"



    }

})


