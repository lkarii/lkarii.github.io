document.addEventListener('DOMContentLoaded', function () {
   const intro = document.getElementById("intro-text");
   const nameText = "<span style='color: #F0C46E;'>Karina</span>";
   const baseText = "Hi, ";
   const endText = " is here!";
   const fullText = baseText + nameText + endText;

   function typeIntro(index = 0) {
      if (index <= fullText.length) {
         intro.innerHTML = fullText.substring(0, index) + (index < fullText.length ? "|" : "");
         setTimeout(() => typeIntro(index + 1), 50);
      } else {
         blinkCursor();
      }
   }

   function blinkCursor() {
      intro.innerHTML = intro.innerHTML.endsWith("|") ? fullText : fullText + "|";
      setTimeout(blinkCursor, 500);
   }

   typeIntro();
});


let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
   slides[currentSlideIndex].classList.remove("active-slide");
   currentSlideIndex = index;
   slides[currentSlideIndex].classList.add("active-slide");
}

// Для автоматической смены слайдов каждые 5 секунд:
setInterval(() => {
   let nextSlide = currentSlideIndex + 1;
   if (nextSlide >= slides.length) {
      nextSlide = 0;
   }
   showSlide(nextSlide);
}, 5000);






const text1_options = [
   "Platformer",
   "Bank assistant"
];
const text2_options = [
   "https://github.com/lkarii/Fox-platformer",
   "https://github.com/lkarii/bank-assistant"
];
const color_options = ["#EBB9D2", "#FE9968"];
const image_options = [
   "https://user-images.githubusercontent.com/95132134/213948111-d6812cec-78e8-4c66-bb59-e9a4e6f8f0cb.png",
   "https://user-images.githubusercontent.com/95132134/275903106-d71832ed-248f-45a1-8e76-72d777d86d5b.jpg"
];
var i = 0;
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionText2 = document.getElementById("current-option-text2");
const currentOptionImage = document.getElementById("image");
const carousel = document.getElementById("carousel-wrapper");
const mainMenu = document.getElementById("menu");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");

currentOptionText1.innerText = text1_options[i];
currentOptionText2.innerHTML = `<a href="${text2_options[i]}" target="_blank">
<svg width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
</a>`;

currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.background = color_options[i];

optionNext.onclick = function () {
   i = i + 1;
   i = i % text1_options.length;
   currentOptionText1.dataset.nextText = text1_options[i];

   currentOptionText2.dataset.nextText = text2_options[i];

   mainMenu.style.background = color_options[i];
   carousel.classList.add("anim-next");

   setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
   }, 455);

   setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-next");
   }, 650);
};

optionPrevious.onclick = function () {
   if (i === 0) {
      i = text1_options.length;
   }
   i = i - 1;
   currentOptionText1.dataset.previousText = text1_options[i];

   currentOptionText2.dataset.previousText = text2_options[i];

   mainMenu.style.background = color_options[i];
   carousel.classList.add("anim-previous");

   setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
   }, 455);

   setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-previous");
   }, 650);
};
