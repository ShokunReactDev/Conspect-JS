// ПРОТОТИПЫ И НАСЛЕДОВАНИЕ

// Любой объект(практически) в языке JS имеет второй связанный с ним объект - прототип
// Объект наследует свойства прототипа (все свойства, которые есть у прототипа будут доступны через наш дочерний объект) это наследование основанное на прототипах
// Мы создаем объект, который должен быть прототипом
let ObjectProto = {
    name: "Sorax"
};
// и на основе него создаете новый объект
let object = Object.create(ObjectProto);
// мы получаем доступ ко всем свойствам прототипа

// Используется Если в вашей программе нужно создавать много однотипных объектов 
// вместо создания отдельно каждого объекта с одинкаковыми свойствами и методами, но разными значениями
// вместо этого создадим один прототип
let Person = {
    greet: function() {
        //т.к. эти поля будут разные у всех объектов заменяем их методом
        constructor: function (name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = name;
            return this;
        },
        console.log("Hi? my name is " + this.name); //одна функция для всех
    }
};

// Теперь мы можем создавать эти объекты
let person, anotherPerson, thirdPerson;
// мы можем создавать сколько угодно объектов из нашего прототипа
person = Object.create(Person).constructor("John", 35, "male")
anotherPerson = Object.create(Person).constructor("Jessica", 28, "female")
thirdPerson = Object.create(Person).constructor("Bob", 30, "male")

console.log(person.name); //John
console.log(anotherPerson.age); //28
console.log(thirdPerson.name); //Bob

person.greet(); //Hi? my name is John


//Класс в JS чисто условное понятие, под калассом подразумевают множество всех объектов, которые наследуют свои свойства от одного прототипа
//Т.е. в нашем случае эти три объекта имеют один класс поскольку они наследуют свойства от одного прототипа

// Для того что бы определить является ли объект прототипом другого объекта
// Прототип.isPrototypeOf(объект)
console.log(Person.isPrototypeOf(person)); //true



// Наследование отношение между классами - возможность создания дочерних классов, которые будут наследовать свойства и методы родительских классов
// Создать объект на основе Person
let WebDeveloper = Object.create(Person);
// Добавить к нему массив из знаний языков
WebDeveloper.constructor = function (name, age, gender, skills) {  //Это мы изменяем конструктор
    Person.constructor.apply(this, arguments);
    this.skills = skills || [];
    return this;
};
// так же добовляем на прототип еще один метод
WebDeveloper.develop = function(){
    console.log("Working...");
};

// теперь создаем и выводим новый объект
let developer = Object.create(WebDeveloper).constructor("Jack", 21, "male", ["html", "css", "php", "mysql"]);

console.log(developer.skills); //["html", "css", "php", "mysql"]
developer.develop(); //Working...
console.log(developer.name); //Jack




// КОНСТРУКТОРЫ И КЛАССЫ

// конструктор - это функция, которая будучи вызванна ключивым словом new возвращает новый объект
// Имя функции-конструктора должно начинаться с большой буквы.
// Функция-конструктор должна вызываться при помощи оператора "new"

let Person, person, anotherPerson, Developer, developer;

Person = function(name) {
    this.name = name; // внутри конструктора this указывает на новый создаваемый объект
};

// затем мы можем вызывать эту функцию с ключевым словом new
percon = new Person("Jack");
console.log(person.name);

anotherPerson = new Person("Bruce");
console.log(anotherPerson.name);
// Любая функция в JS потенциально является конструктором и любую функцию можно вызывать ключевым словом new, а так же каждая функция имеет свое свойство prototype
// в котором храниться прототип, свойства которого будут наследовать все объекты создаваемые при помощи конструктора
// Класс - это множество всех объектов, которые наследуют все свои свойства от одного прототипа 

Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
};

person.greet();
anotherPerson.greet();

// Всем объектам, которые создаются при помощи конструктора присваивается свойство constructor
console.log(person.constructor);

// Проверить объект на принадлежность к классу
console.log(anotherPerson instanceof Person);
// или
console.log(Person.prototype.isPrototypeOf(anotherPerson));


// Создание дочерних классов
Developer = function(name, skills) {
    Person.apply(this, arguments);
    this.skills = skills || [];
};

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

developer = new Developer("John", ["ruby", "ror", "python"]);
console.log(developer.name);// John
console.log(developer.skills);// "ruby", "ror", "python"
console.log(developer instanceof Developer); //true
console.log(developer instanceof Person); //true
// Если наш объект developer является  объектом класса Developer, а класс developer является дочерним классу Person, то JS считает объект developer результатом класса Person

  
console.log({}.toString()); //[object Object] когда мы вызываем метод toString у объектов мы получаем такую строку где второй Object это на самом деле класс объекта и этот класс нельзя изменить
// метод toString() единственный способ для получения класса объекта

let classof = function(object) {
    return Object.prototype.toString.call(object).slice(8,-1);
};

console.log(classof("")); //String
console.log(classof([])); //Array
console.log(classof({})); //Object
console.log(classof(function(){})); //Function
console.log(classof(4567)); //Number
console.log(classof(true)); //Boolean
console.log(classof(/\d/)); //RegExp




// КЛАСС
// Базовый синтаксис
class MyClass {
    // методы класса
    constructor() { ... } //здесь можем инициализировать объект
    constructor(name) {
        this.name = name;
    }
    method1() { ... } //
    method2() { ... }
    method3() { ... }
    sayHi() {
        alert(this.name);
    }
  }

// Использование:
let user = new User("Иван");//создаем объект
user.sayHi(); 
// в конструктор запускается с заданным аргументом и сохраняет его в this.name









