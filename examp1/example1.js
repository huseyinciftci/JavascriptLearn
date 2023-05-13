// *** 1. Örnek ************************************
// var numbers = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53]

// * Listenin elemanlarını tek çift olarak 2 listeye çevirme
// * Listenin elemanlarını sıralama algoritmalarını kullanarak sıralama yapma
// - https://serdarkuzucu.com/siralama-algoritmalari/
// * küçükten büyüke sıralama yapsın
// * büyükten küçüğe sıralama yapsın
// * 20'den küçük olan sayıları ayırsın
// * Tek sayıları ayırsın
// * Çift sayıları 0 yapsın
// * Listenin sonuna eleman ekleme
// * Listenin başına eleman ekleme
// * Liste uzunluğunu bulma
// * Listenin ilk elemanını çıkarma
// * Listenin son elemanını çıkarma
// * Listenin 5. indeksindeki elemanı alma
// * Listenin 5. indeksindeki elemanı 10 ile değiştirme
// * Listenin 2 ile 5. indexindeki elemanları alma
// * Listenin belirli bir elemanını silme
// * Listenin tamamını silme
// * Listenin elemanlarını birleştirme
// * Listenin elemanlarını tersine çevirme
// * Listenin elemanlarının toplamını bulma
// * Listenin elemanlarının ortalama değerini bulma
// * Listenin elemanlarını filtreleme
// * Listenin elemanlarının her birine belirli bir işlem yapma
// * Listenin elemanlarını belirli bir kurala göre map etme
// - listenin içinde tek olay sayıları 4 ile değiştirsin
// * Listenin elemanlarını bir araya getirme string ifadeye dönüştürme
// * Listenin belirli bir elemanını arama
// * Listenin belirli bir elemanını, belirli bir indeksten arama
// * Listenin elemanlarını belirli bir koşula göre bulma
// * Listenin elemanlarını belirli bir koşula göre bulup indeksini döndürme
// * Listenin elemanlarının hepsinin belirli bir koşulu sağlayıp sağlamadığını kontrol etme

///////////////////////////////////////
// Answers

///////////////////////////////////////
// 1.
// * Listenin elemanlarını tek çift olarak 2 listeye çevirme

const numbers = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
let isEven = [];
let isOdd = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    isEven.push(numbers[i]);
  } else {
    isOdd.push(numbers[i]);
  }
}

console.log("Çift:", isEven);
console.log("Tek:", isOdd);

///////////////////////////////////////
// 2.
// * Listenin elemanlarını sıralama algoritmalarını kullanarak sıralama yapma
// const sort = (arr) => {
//   let arrLength = arr.length;
//   arr.forEach(function (mov, i, arr) {});
// };

// function bubbleSort(myArray) {
//   let myArrayLength = myArray.length;

//   for (let i = 0; i < myArrayLength - 1; i++) {
//     for (let j = 0; j < myArrayLength - i - 1; j++) {
//       if (myArray[j] > myArray[j + 1]) {
//         let temp = myArray[j];
//         myArray[j] = myArray[j + 1];
//         myArray[j + 1] = temp;
//       }
//     }
//   }

//   return myArray;
// }

// let myArray = [56, 43, 21, 90, 789, 3, 0, 76, 777, 232, 8, 17, 29];

// console.log(bubbleSort(myArray));

///////////////////////////////////////
// 3.
// * küçükten büyüke sıralama yapsın

const numbers1 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
const arrangement = numbers1.sort((a, b) => a - b);
console.log(arrangement);

///////////////////////////////////////
// 4.
// * büyükten küçüğe sıralama yapsın

const numbers2 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
const arrangement1 = numbers1.sort((a, b) => b - a);
console.log(arrangement);

///////////////////////////////////////
// 5.
// * 20'den küçük olan sayıları ayırsın

const numbers3 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
console.log(numbers3.filter((less20) => less20 < 20));

///////////////////////////////////////
// 6.
// * Tek sayıları ayırsın

const arr1 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
console.log(arr1.filter((num) => num % 2 !== 0));

///////////////////////////////////////
// 7.
// * Çift sayıları 0 yapsın

const arr2 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 == 0) {
    arr2[i] = 0;
  }
}
console.log(arr2);

///////////////////////////////////////
// 8.
// * Listenin sonuna eleman ekleme

const arr3 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
arr3.push(33);
console.log(arr3);

///////////////////////////////////////
// 9.
// * Listenin başına eleman ekleme

const arr4 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
arr4.unshift(7);
console.log(arr4);

///////////////////////////////////////
// 10.
// * Liste uzunluğunu bulma

const arr5 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
console.log(arr5.length);

///////////////////////////////////////
// 11.
// * Listenin ilk elemanını çıkarma

const arr6 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
arr6.shift();
console.log(arr6);

///////////////////////////////////////
// 12.
// * Listenin son elemanını çıkarma

const arr7 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
arr7.pop();
console.log(arr7);

///////////////////////////////////////
// 13.
// * Listenin 5. indeksindeki elemanı alma

const arr8 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
console.log(arr8.splice(5, 1));

///////////////////////////////////////
// 14.
// * Listenin 5. indeksindeki elemanı 10 ile değiştirme

const arr9 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
arr9[5] = 10;
console.log(arr9);

///////////////////////////////////////
// 15.
// * Listenin 2 ile 5. indexindeki elemanları alma

const array1 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];

console.log(array1.slice(2, 6));

///////////////////////////////////////
// 16.
// * Listenin belirli bir elemanını silme

const array2 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
array2.splice(1, 1);
console.log(array2);

///////////////////////////////////////
// 17.
// * Listenin tamamını silme

const array3 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
array3.splice(0);
console.log(array3);

///////////////////////////////////////
// 18.
// * Listenin elemanlarını birleştirme

const array4 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
console.log(array4.join(" "));

///////////////////////////////////////
// 19.
// * Listenin elemanlarını tersine çevirme

const array5 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
console.log(array5.reverse());

///////////////////////////////////////
// 20.
// * Listenin elemanlarının toplamını bulma

const array6 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
console.log(array6.reduce((acc, num) => acc + num));

///////////////////////////////////////
// 21.
// * Listenin elemanlarının ortalama değerini bulma

const array7 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
console.log(array7.reduce((acc, num, i, arr) => acc + num / arr.length, 0));

///////////////////////////////////////
// 22.
// * Listenin elemanlarını filtreleme

const array8 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
console.log(array8.filter((num) => num > 90));

///////////////////////////////////////
// 23.
// * Listenin elemanlarının her birine belirli bir işlem yapma

const array9 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
console.log(array9.map((num) => num * 2));

///////////////////////////////////////
// 24.
// * Listenin elemanlarını belirli bir kurala göre map etme

const num1 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
console.log(
  num1.map((num) => {
    if (num * 2 > 100) {
      return (num = 4);
    } else {
      return num;
    }
  })
);

///////////////////////////////////////
// 25.
// * Listenin elemanlarını bir araya getirme string ifadeye dönüştürme

const num2 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
console.log(num2.join(" "));

///////////////////////////////////////
// 26.
// * Listenin belirli bir elemanını arama

const num3 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
console.log(num3.find((num) => num > 100));

///////////////////////////////////////
// 27.
// * Listenin belirli bir elemanını, belirli bir indeksten arama

const num4 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
console.log(num4.findIndex((num) => num > 100));

///////////////////////////////////////
// 28.
// * Listenin elemanlarını belirli bir koşula göre bulma

const num5 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
console.log(num5.filter((num) => num > 100));

///////////////////////////////////////
// 29.
// * Listenin elemanlarını belirli bir koşula göre bulup indeksini döndürme

const num6 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];

for (let i = 0; i < num6.length; i++) {
  if (num6[i] > 300) {
    num6[i];
  }
}

///////////////////////////////////////
// 30.
// * Listenin elemanlarının hepsinin belirli bir koşulu sağlayıp sağlamadığını kontrol etme

const num7 = [3, 5, 1, 65, 6, 34, 4, 353, 554, 54, 5453, 53];
console.log(num7.every((num) => num > 100));
