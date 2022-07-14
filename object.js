// ОБЪЕКТЫ

// 1 МЕТОД СОЗДАНИЯ ОБЪЕКТОВ
// Набор свойств парами имя: значение, имя: значение, имя: значение
// Пример:
{
	name: "Sorax",
	age: 20,
	gender: "male"
} //описали объект и это человек
// Можем присвоить объекту переменную и обращаться через него
const person = {
	name: "Sorax",
	age: 20,
	gender: "male"
}

// Выражение доступа
// Пример:
// /выражение.идентификатор/
console.log(person.name);
// /выражение[выражение]/

// Так же с помощью выражения доступа можно менять значение динамически:
person.age = 25;
// или добавлять свойство объекту
person.userID = 2223;

// Значением любого свойства мб функция => свойство становиться методом
const person = {
	name: "Sorax",
	age: 20,
	gender: "male",
	sayHi: function() {
	return "Hello";
	}
}


// 2 МЕТОД СОЗДАНИЯ ОБЪЕКТОВ С ПОМОЩЬЮ NEW

const object = new Object();
object.property = "value";

// 3 МЕТОД СОЗДАНИЯ ОБЪЕКТОВ

const object = Object.create(null);
console.log(object); //прототип первого объекта

const object = Object.create({x: 10, y: 20});
object.x = 20;
console.log(object);

// УДАЛЕНИЕ СВОЙСТВ ОБЪЕКТА
// /delete выражение/
// Пример:
delete object.x
console.log(object);
// Можно удалить только родные, не наследуемые свойства объекта
// Наследуемые свойства можно удалить на прямую у своего прототипа

// ДЛЯ ПРОВЕРКИ СВОЙСТВА ОБЪЕКТА ЕСТЬ БИНАРНЫЙ ОПЕРАТОР IN(вне зависимости наследуемое это свойство или родное)
console.log("x" in object); //=> true
console.log("o" in object); //=> false
// или
console.log(object.x); //=> 10
console.log(object.o); //=> undefined
// или проверка на установленный undefined в ручную 
object.z = undefined;
console.log(object.z); //=> undefined
console.log("z" in object); //=> true



// все объекты можно назвать ссылочным типом
// в простых типах когда вы присваеваете переменной значение она его храни, а когда присваевате переменной объект то переменная хранит ссылку на объект
// Пример простых типов
let a = 10, b = 20;
a = b;
b = 15;
console.log(a);//20
// Пример с объектами, иначе т.к. в переменных мы храним не хначения, а ссылки
let a = {x: 10}, b = {x: 20};
a = b;
b.x = 15;
console.log(a.x);//15
a.x = 45;
console.log(b.x);//45




// this И НЕПРЯМОЙ ВЫЗОВ МЕТОДОВ bind call apply

// Пример:
let person = {
    name: "John",
    greet: function(){
        return "Hi! My name is " + this.name;
    }
};

console.log(person.greet());
// т.к. функция является объектом мы можем объявить ее где угодно и внутри нашего объекта просто оставить на нее ссылку
// Пример
let greet: function(){
    return "Hi! My name is " + this.name;
}
let person = {
    name: "John",
    greet:
};

let anotherPerson = {
    name: "Bob",
    greet:
};

console.log(person.greet()); //Hi! My name is John
console.log(anotherPerson.greet()); //Hi! My name is Bob
// Одна и таже функция будучи вызвана как метод разных объектов может выдавать разные строки, при разных вызовах this указывает на разные объекты
// Если вызвать функцию напрямую this , будет указывать на глобальный объект
// Пример
console.log(greet());//Hi! My name is [object Window]
// т.к. мы запускаем скрипт в браузере глобальный объект это [object Window] и так же на глобальный объект будет указывать this вне всяких функций
// Пример
console.log(this);
// Когда мы вызываем функцию как метод какого то объекта this указывает на этот объект, тем не менее могут быть случаи когда нужно
// вызвать метод какого то объекта при этом самому указать на какой объект должно указывать ключевое слово this при помощи call и apply
console.log(anotherPerson.greet.call(person));//если вызовим не функцию greet напрямую, а вызовем ее метод call, в котором первым аргументом
// передадим объект на который должно указывать ключевое слово this, то мы видим что возвращается уже другая строка

let greet: function(greeting){
    return greeting + "! My name is " + this.name;
}
let person = {
    name: "John",
    greet:
};

let anotherPerson = {
    name: "Bob",
    greet:
};
// Если эта функция принимает аргументы, то мы можем их записывать здесь же через запятую и метод apply делает тоже самое, единственная
// разница в том что аргументы передаются не через запятую, а массивом [] вторым аргументом
console.log(person.greet("Hi"));//Hi! My name is John
console.log(anotherPerson.greet.call(person, "Bonjour"));//Bonjour! My name is John
console.log(anotherPerson.greet.apply(person, ["Bonjour"]));//Bonjour! My name is John

// Метод bound похож на call и  apply, но в отличии от них он не вызывает функцию, а просто связывает ее с каким то объектом,
// что бы когда мы ее вызвали ключевое слово this указывало на тот объект с которым оно было связанно
// Метод bound не изменяет исходную функцию, а возвращает новую функцию