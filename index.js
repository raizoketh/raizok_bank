// Hello World

let neededSizeLuckyDraw = 2  // Added on 2024-06-02 15:21:37.209249
let neededNumberLuckyDraw = 5  // Added on 2024-06-02 15:30:25.740146
  // Added on 2024-06-02 15:42:08.386579
let timerLong  // Added on 2024-06-02 15:42:31.874122
let timerShort  // Added on 2024-06-02 15:44:42.877566
  // Added on 2024-06-02 15:57:46.781148
// Номер попередньо обробленої публікації  // Added on 2024-06-02 16:00:08.696225
let publicationIndexOld = -1;  // Added on 2024-06-02 16:01:08.332727
  // Added on 2024-06-02 16:33:35.112540
// Масив для додавання кнопок Join Lucky Draw публікацій з потрібними Lucky Draw, щоб прийняти у них участь  // Added on 2024-06-02 21:26:15.210777
// let arrayLuckyDrawButtonJoin = []  // Added on 2024-06-02 21:32:39.761175
  // Added on 2024-06-02 21:34:20.197539
// Отримати значення з localStorage за ключем "countLuckyDraw"  // Added on 2024-06-02 21:54:55.386107
let countLuckyDrawString = localStorage.getItem("countLuckyDraw");  // Added on 2024-06-02 21:58:51.792545
// Перетворити рядкове значення в ціле число  // Added on 2024-06-03 21:32:21.938461
let countLuckyDraw = parseInt(countLuckyDrawString, 10);  // Added on 2024-06-03 23:01:51.783231
  // Added on 2024-06-03 23:04:39.056687
// Перевірити, чи вдалося успішно перетворити в ціле число  // Added on 2024-06-04 21:19:15.632628
if (!isNaN(countLuckyDraw)) {  // Added on 2024-06-05 22:39:58.041976
// Значення успішно перетворено в ціле число  // Added on 2024-06-06 20:22:46.187821
// console.log("Значення countLuckyDraw в форматі int:", countLuckyDraw);  // Added on 2024-06-06 21:39:02.392495
} else {  // Added on 2024-06-07 22:56:48.527697
// Не вдалося перетворити значення в ціле число  // Added on 2024-06-08 22:35:53.538887
countLuckyDraw = 0  // Added on 2024-06-09 09:51:37.485287
}  // Added on 2024-06-10 20:54:17.996903
  // Added on 2024-06-12 21:17:26.821660
function go() {  // Added on 2024-06-12 21:18:10.161149
let arrayLuckyDraw = publicationSelection()  // Added on 2024-06-13 21:25:02.178311
let count = arrayLuckyDraw.length  // Added on 2024-06-13 21:25:34.683266
if(count) {  // Added on 2024-06-14 21:59:33.469948
let arrayLuckyDrawButtonJoin = arrayLuckyDraw  // Added on 2024-06-14 22:00:05.788658
iterateArrayLuckyDrawButtonJoin(arrayLuckyDrawButtonJoin)  // Added on 2024-06-15 20:43:04.545929
timerLong = setTimeout(go, count * 10000)  // Added on 2024-06-16 14:33:17.696341
// Якщо прийнято участь у 40 або більше Lucky Draw зупинити повтори функції  // Added on 2024-06-17 20:28:48.314395
if(countLuckyDraw >= 100) {  // Added on 2024-06-18 21:26:47.477309
clearTimeout(timerLong)  // Added on 2024-06-20 22:43:50.095986
}  // Added on 2024-06-23 14:46:01.973417
}  // Added on 2024-06-24 21:20:13.321008
else {  // Added on 2024-06-24 22:22:44.596694
timerShort = setTimeout(go, 500)  // Added on 2024-06-25 20:23:05.024193
// Якщо прийнято участь у 40 або більше Lucky Draw зупинити повтори функції  // Added on 2024-06-27 07:35:36.687431
if(countLuckyDraw >= 100) {  // Added on 2024-06-28 23:09:53.298513
clearTimeout(timerShort)  // Added on 2024-06-28 23:11:03.004369
}  // Added on 2024-06-29 19:35:07.965797
}  // Added on 2024-06-30 08:03:54.145576
}  // Added on 2024-07-03 21:14:51.310185
  // Added on 2024-07-04 21:57:37.921783
// Відібрати публікації з потрібними Lucky Draw і повернути у вигляді масиву  // Added on 2024-07-05 21:32:42.492309
function publicationSelection() {  // Added on 2024-07-06 20:33:43.786342
let arrayLuckyDraw = []  // Added on 2024-07-07 14:22:59.064275
// Анімований скрол вниз на 500px, щоб на початку кожного виконання опрацьовувати нові публікації  // Added on 2024-07-07 14:23:08.737436
scrollToY(500)  // Added on 2024-07-08 21:44:42.263061
// Відібрати масив публікацій  // Added on 2024-07-09 22:20:54.547911
let arrayPublications = Array.from(document.querySelector(`[data-test-id="virtuoso-item-list"]`).children);  // Added on 2024-07-10 20:13:19.614528
arrayPublications.forEach((element) => {  // Added on 2024-07-11 20:39:16.261358
// Номер поточної публікації  // Added on 2024-07-11 20:39:35.250665
let publicationIndex = parseInt(element.getAttribute('data-index'), 10);  // Added on 2024-07-12 21:47:45.168645
  // Added on 2024-07-13 20:09:03.352916
// Перевірка, чи номер публікації не меньший за попередню публікацію, щоб не робити повторних обробок  // Added on 2024-07-14 09:21:09.998321
if (publicationIndexOld < publicationIndex) {  // Added on 2024-07-14 21:25:50.555100
const cashPrize = element.querySelector('span.DrawCard_prizeName__wQDZ-')  // Added on 2024-07-15 22:16:41.292494