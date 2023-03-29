const ratings = document.querySelectorAll('.rating')
const ratingsCont = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

ratingsCont.addEventListener('click', (e) => {
  const ratingEl = e.target.closest(".rating");
  if (ratingEl) {
    ratings.forEach((rating) => rating.classList.remove("active"));
    ratingEl.classList.add("active");
    selectedRating = ratingEl.querySelector("img").nextElementSibling.innerHTML
  }
})

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support!</p>
  `
})