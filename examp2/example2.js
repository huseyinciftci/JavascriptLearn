// **** 2. Örnek ************************************
// * Basit bir anket uygulaması oluşturun.
// Açıklama: Bu anket uygulamasında 4 tane adayına X oylama yapılacak.
// X kişinde alınan cevaplardan sonra
// sonuç çok oy alandan az oy alana doğru gösterilecek.

// her aday için bir değişken

// Adayların başlangıç oy sayıları
let erdoganVotes = 0;
let kilicdarogluVotes = 0;
let muharremVotes = 0;
let sinanVotes = 0;

// Erdoğan butonuna tıklandığında oy sayısını artırma
const erdoganButton = document.querySelector(".btn-erdogan");
const erdoganVotesDisplay = document.getElementById("erdoganVotes");
erdoganButton.addEventListener("click", function () {
  erdoganVotes++;
  erdoganVotesDisplay.textContent = erdoganVotes;
});

// Kılıçdaroğlu butonuna tıklandığında oy sayısını artırma
const kilicdarogluButton = document.querySelector(".aday2 .btn-oy");
const kilicdarogluVotesDisplay = document.getElementById("kilicdarogluVotes");
kilicdarogluButton.addEventListener("click", function () {
  kilicdarogluVotes++;
  kilicdarogluVotesDisplay.textContent = kilicdarogluVotes;
});

// Muharrem butonuna tıklandığında oy sayısını artırma
const muharremButton = document.querySelector(".aday3 .btn-oy");
const muharremVotesDisplay = document.getElementById("muharremVotes");
muharremButton.addEventListener("click", function () {
  muharremVotes++;
  muharremVotesDisplay.textContent = muharremVotes;
});

// Sinan butonuna tıklandığında oy sayısını artırma
const sinanButton = document.querySelector(".aday4 .btn-oy");
const sinanVotesDisplay = document.getElementById("sinanVotes");
sinanButton.addEventListener("click", function () {
  sinanVotes++;
  sinanVotesDisplay.textContent = sinanVotes;
});
