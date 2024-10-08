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
const countPrize = element.querySelector(`[class="DrawCard_prizeCount__L+xaL"]`)  // Added on 2024-07-16 20:26:45.574981
  // Added on 2024-07-17 22:01:36.905391
// Перевірка, чи містить елемент Lucky Draw  // Added on 2024-07-18 20:14:24.586804
if (cashPrize && countPrize) {  // Added on 2024-07-19 21:53:03.711758
// Вилучаємо текст з елементів  // Added on 2024-07-20 22:21:40.190227
const cashPrizeText = cashPrize.textContent || cashPrize.innerText  // Added on 2024-07-21 13:56:41.823245
const countPrizeText = countPrize.textContent || countPrize.innerText  // Added on 2024-07-22 21:12:55.903552
  // Added on 2024-07-23 20:38:36.194261
// Перевірка, чи містить текст елемента знак "$"  // Added on 2024-07-23 20:40:37.776947
if (cashPrizeText.includes('$')) {  // Added on 2024-07-24 21:54:31.252078
// Вилучити знак "$"  // Added on 2024-07-25 21:51:43.633115
let numberWithoutDollar = parseInt(cashPrizeText.replace('$', ''), 10);  // Added on 2024-07-26 20:29:30.791611
// Вилучити текст "× 1"  // Added on 2024-07-27 20:46:01.055695
let numberWithoutX = parseInt(countPrizeText.match(/\d+/)[0]);  // Added on 2024-07-28 10:22:44.633789
  // Added on 2024-07-29 22:17:19.067113
// Виконуємо перевірку щоб прийняти участь у Lucky Draw які або більші neededSizeLuckyDraw або кількість преможців >= neededNumberLuckyDraw  // Added on 2024-07-30 20:20:48.528502
if (!isNaN(numberWithoutDollar) && (numberWithoutDollar >= neededSizeLuckyDraw || numberWithoutX >= neededNumberLuckyDraw)) {  // Added on 2024-07-31 21:17:32.525298
let LuckyDrawButtonJoin = element.querySelector('.DrawCard_drawCard__GWy1t').querySelector('button')  // Added on 2024-08-01 20:52:52.871296
if(LuckyDrawButtonJoin) {  // Added on 2024-08-02 21:30:18.983597
// Додаємо потрібну публікацію з Lucky Draw у масив  // Added on 2024-08-02 21:30:24.464779
arrayLuckyDraw.push(element)  // Added on 2024-08-03 21:23:47.578531
console.log(currentDateShow() + 'Lucky Draw ' + numberWithoutDollar + '$ x ' + numberWithoutX);  // Added on 2024-08-04 20:47:11.466258
}  // Added on 2024-08-05 22:08:38.765641
else {  // Added on 2024-08-06 21:59:37.351441
// console.log(currentDateShow() + 'Кнопка Join the Draw відсутня');  // Added on 2024-08-08 20:45:36.669916
// Анімована прокрутка до самого верху  // Added on 2024-08-09 07:45:55.582756
// scrollToY(100)  // Added on 2024-08-10 20:38:01.556318
}  // Added on 2024-08-11 10:25:29.016096
}  // Added on 2024-08-12 21:25:20.036138
// else console.log(currentDateShow() + 'Lucky Draw менше ' + neededSizeLuckyDraw + '$, або кількість нагород менше' + neededNumberLuckyDraw);  // Added on 2024-08-13 22:38:57.526687
}  // Added on 2024-08-17 22:06:48.890200
// else console.log(currentDateShow() + 'Lucky Draw не на $');  // Added on 2024-08-18 16:22:02.476602
}  // Added on 2024-08-20 21:21:21.676475
// else console.log(currentDateShow() + `У публікації відсутній Lucky Draw`);  // Added on 2024-08-25 21:20:30.743014
// Присвоюємо значення атрибуту обробленого елемента  // Added on 2024-08-28 21:07:03.986491
publicationIndexOld = publicationIndex;  // Added on 2024-08-29 20:46:15.725030
// console.log(currentDateShow() + 'Публікація під номером: ' + publicationIndex)  // Added on 2024-08-31 14:09:52.645777
}  // Added on 2024-09-01 20:42:52.297753
});  // Added on 2024-09-03 20:48:33.985483
return arrayLuckyDraw  // Added on 2024-09-04 21:55:29.053571
}  // Added on 2024-09-05 22:52:22.568411
  // Added on 2024-09-05 22:52:29.654172
// Проходимо по кожній кнопці з потрібним Lucky Draw і з інтервалом у 10с приймаємо у них участь  // Added on 2024-09-23 22:05:48.864543
function iterateArrayLuckyDrawButtonJoin(array) {  // Added on 2024-09-24 22:24:12.799276
if (array.length > 0) {  // Added on 2024-09-25 07:07:17.131635
// Функція для рекурсивного виклику  // Added on 2024-09-25 20:36:42.222312
function processElement(index) {  // Added on 2024-09-26 21:45:37.917291
if (index < array.length) {  // Added on 2024-09-27 21:09:41.411145
// Клік на елементі через 0.5 секунду  // Added on 2024-09-28 21:33:39.096321
buttonClick(array[index].querySelector('.DrawCard_drawCard__GWy1t').querySelector('button'), 1000);  // Added on 2024-09-29 10:38:36.810125
  // Added on 2024-09-30 20:07:30.432380