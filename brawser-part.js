// Выполнение JS в браузере

// Методы подключения JS 
// 1. тэг  <script></script> в body
// 2. в head или в конце body <script src="main.js"></script>



// Cовмещение HTML с JS
// Все скрипты которые мы подключаем на страницу разделяют одну и туже область видимости
// Мы можем при изменении какого то инпута обновлять значение какой либо глобальной переменной и при нажатии на кнопку мы можем выполнять функцию, которая будет написана уже во внешнем файле
// Например HTML
//      <input type="text" onchange="myVar = this.value">
//      <input type="button" onclick="doSomething()" value="Action">
let myVar, doSomething;
doSomething = function(){
    alert("You typed: " + myVar); //и в этой функции мы можем использовать значение нашей переменной 
}; // все это работает потому что переменные объявленные вне каких либо функций становятся свойствами глобального объекта window 


// Код JS  выполняется сверху вниз , когда весь код выполнился начинается второй этап - ассинхронный - бесконечный цикл :
// Event loop - цикл обработки событий при помощт которого браузер следит происходит какое то событие или не
// Когда происходит событие нажатие на элемент например и когда происходит какое то событие браузер говорит окей пользователь нажал интересно это кому о или нет? 
// И для того что бы сообщать в браузере что нам интересны те или иные события мы будем вешать обработчики то есть функции
// на соответствующий элемент и при наступлении определенных событий браузер будет запускать соответствующие обработчики 
// То есть существование циклов обработки событий нас как разработчиков на JS может вообще не волновать 
// Мы будем просто вешать обработчики куда нам надо и называть это ассинхронным выполнением и браузер уже будет заботиться о запуске этих обработчиках при наступлении каких либо событий
// Например
window.addEventListener('mousemove', function(e){
    console.log("X: " + e.offsetX, "Y: " + e.offsetY);
});


// WINDOW
// Объект window обозначает окно браузера, но фактически этот объект имеет куда более важное значение, чем просто управление окном браузера
// Этот объект явл глобальным и стоит на вершине иерархии всех объектов доступных в браузере
// Все глобальные переменные (объявленные вне каких либо функций) становятся свойством window 
let globalVariable = "value";
console.log(globalVariable); // value
console.log(window.globalVariable); // value
// И можем наоборот добавить какое то значение window и вызвать это свойство без window
window.myVar = 500;
console.log(myVar); // 500
// Это так же касается всех конструкторов и функций которые вист на глобальном объекте


// Примеры ассинхронных функций

// Функция setTimeout - позволяет выполнить какую то функция не сразу, а через какое то время
setTimeout(function(){
   console.log("2 secjnds passed"); //выводится через 2 секунды 
}, 2000) //первый аргумент это функция которую нужно будет выполнить и второй через сколько секунд


// Функция setInterval в отличиии от предыдущей выполняется не однократно, а многократно с указанным интервалом
setInterval(function(){
    console.log("2 secjnds passed"); //выводится через каждые 2 секунды 
}, 2000)

// Функции setTimeout и setInterval возвращают значения и мы им можем присвоить значение какой либо переменной и посмотреть что это за значение и это 1
// 1 это идентификатор счетчика его можно передать в clearInterval, которая остановит этот счетчик например при нажатии на окно браузера
// Пример
let i = 0;
let timer = setInterval(function () {
    console.log(i++);
}, 200);

window.onclick = function(){
    clearInterval(timer);
};


// Объект Location
// Он позволяет работать с адрессной строкой 
console.log(window.location);
// Есть свойство hash - которое мы можем менять
location.hash = "anything"; // и оно отобразится в свойстве hash и адрессной строке
// hash - это один из способов сохранения состояния в одностраничных JS приложениях 
// И для того что бы следить за изменением hash есть специальное событие
window.onhashchange = function(){
    console.log(location.hash.slice(1)); //выводит то на что мы меняем hash
}; 


// Через href мы можем полностью изменить адресс и направится например на стартовую страницу гугл
location.href = "htt://google.com";

// А метод toString вернет нам href
console.log(location.toString()); //htt://sorax:8000/

// Свойствот search - это та часть урла которая идет после ? - значение передаещее на сервер гет запрос
location.search = "mysearch";

// Страница будет перезагружаться бемконечно
console.log(location.reload());



// Объект screen
// При помощи width и height можем узнать разрешение экрана пользователя
console.log(screen.width, screen.height); // 1366 768
// При помощи availWidth и availHeight мы можем узнать размер доступной области, т е максимальное разрешение с которым можно открыть браузер в полноэкранном режиме 
console.log(screen.availWidth, screen.availHeight); //1362 746 
// При помощи colorDepth можем узнать глубину цвета
console.log(screen.colorDepth); // 24 - количество бит на пиксель



// Объект navigator мы можем получить информацию о браузере и о платформе, количестве доступных потоков
console.log(navigator); //версии ОС, полезен для сбора статистики.


// Объект history - мы можем управлять историей браузера

// Свойство length узнать длинну истории которая нам доступна
console.log(history.length); //3



// DOM






