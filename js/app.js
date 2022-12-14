const submit_btn = document.querySelector(".submit-btn");
const card_content_1 = document.querySelector(".card-content-1")
const card_content_2 = document.querySelector(".card-content-2")
const ratingsButtons = document.querySelectorAll(".rating-btn")
const score = document.querySelector('.score')
let stars_score = 3

submit_btn.addEventListener('click', onSubmit);
ratingsButtons.forEach( btn => {
    btn.addEventListener("click", handleRatingsBtnClick)
})

function onSubmit(){
    card_content_1.classList.add('hide')
    score.textContent = stars_score
    card_content_2.classList.remove('hide')
}

function handleRatingsBtnClick(e){
    ratingsButtons.forEach(btn => {
        btn.classList.remove("active");
    });

    if (e.target.classList.contains('rating-btn')){
        e.target.classList.add('active');
    }else {
        e.target.parentElement.classList.add('active')
    }

    stars_score = e.target.textContent
}
