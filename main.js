const ratingSection = document.querySelector(".rating");
const thanksSection = document.querySelector(".thanks");
const submitButton = document.getElementById("submit__btn");
const goBack = document.querySelector(".attribution");
const ratingButton = document.querySelectorAll(".rating__btn");
const choosenRating = document.getElementById("rating__container");

// submitButton.addEventListener("click", () => {
//   thanksSection.classList.remove("hidden");
//   ratingSection.classList.add("hidden");
// });
// goBack.addEventListener("click", () => {
//   thanksSection.classList.add("hidden");
//   ratingSection.classList.remove("hidden");
// });
// ratingButton.forEach((rate) => {
//   rate.addEventListener("click", () => {
//     choosenRating.innerHTML = rate.innerHTML;
//   });
// });

ratingButton.forEach((rate) => {
  rate.addEventListener("click", () => {
    choosenRating.innerHTML = rate.innerHTML;
    submitButton.addEventListener("click", () => {
      thanksSection.classList.remove("hidden");
      ratingSection.classList.add("hidden");
    });
    goBack.addEventListener("click", () => {
      thanksSection.classList.add("hidden");
      ratingSection.classList.remove("hidden");
    });
  });
});
