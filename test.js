// function makeUser() {
//     return {
//       name: "Джон",
//       ref() {
//         return this;
//       } 
//     };
//   };
  
//   let user = makeUser();
  
//   alert(user.ref().name );


// КАЛЬКУЛЯТОР


let calculator = {
    read() {
        this.a = +prompt('a?', 0),
        this.b = +prompt('b?', 0)
    },
    operator() {
        this.c = prompt('Какое действие вы хотите сделать?')
    },
    result(){

        if (this.c == '+'){
            return this.a + this.b;
        }

        if (this.c == '-'){
            return this.a - this.b;
        }

        if (this.c == '*'){
            return this.a * this.b;
        }

        if (this.c == ':'){
            return this.a / this.b;
        }

        return "Дейстрвие" + this.c + "не предусмотрено!";
    },
    run(){
        this.read();
        this.operator();
        alert(this.result());
    },
};

calculator.run();

// ВЫЗОВ РАБОТА С ВЗАИМОДЕЙСТВИЕМ


// let youName = prompt("Как тебя зовут?", ['Имя']);
// alert( youName );




//ПРОТОТИП 


// let head = {
//     glasses: 1
// };
  
// let table = {
//     __proto__: head,
//     pen: 3
// };
  
// let bed = {
//     __proto__: table,
//     sheet: 1,
//     pillow: 2
// };
  
// let pockets = {
//     __proto__: bed,
//     money: 2000,
    
// };

// console.log(pockets.pen);
// console.log(bed.glasses);

// let hamster = {
//     stomach: [],
  
//     eat(food) {
//       this.stomach.push(food);
//     }
// };
  
// let speedy = {
//     __proto__: hamster
// };
  
// let lazy = {
    
// };
  
  // Этот хомяк нашёл еду
// speedy.eat("apple");
// alert( speedy.stomach ); // apple
  
  // У этого хомяка тоже есть еда. Почему? Исправьте
// alert( lazy.stomach ); // apple


// Калькулятор конструктор

// let calculator = new Calculator();
// calculator.read();


// function Calculator (a, b) {
//   this.read = function() {
//       this.a = +prompt('a?', 0),
//       this.b = +prompt('b?', 0)
//   },
//   this.sum = function() {
//     return this.a + this.b;
//   },
//   this.mul = function() {
//     return this.a * this.b;
//   };

// };

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );



// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function() {
//     this.value += +prompt('Сколько нужно добавить?', 0);
//     return this.value;
//   };
  
// };

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

// class Clock  {
  
//   constructor({ template }) { 
//     this.template = template;
//   }
//   render() {
//     let date = new Date();
//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

  
//   stop() {
//     clearInterval(this.timer);
//   }
  
  
//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }

   


// }
// let clock = new Clock({template: 'h:m:s'});
// clock.start();






// function flatten(array) {
//   // console.log(array);
//   // return array.reduce(
//   //   (accumulator, value) => accumulator.concat(
//   //     Array.isArray(value) ? flatten(value) : value
//   //   ),
//   //   [],
//   // );

  

//   // array.toString().split(',');
//   // return array.join().split(',')



//   // if (array === 1) return array;
//   // return array.flat(array-1);

//   // return array.flat(3);

//   // console.log(array);
// };


// // var newArray = arr.flat(depth);


// console.log(flatten([[1], [[2, 3]], [[[4]]], [[[[[8]]]]]] ) ) // -> [1, 2, 3, 4]



function removeDupes(str) {
  // return str
  // .split('')
  // .filter(function(element, index, array){
  //   return array.indexOf(element) == index;
  // })
  // .join('');
 
  str.split('')
  
  for (i=0; i<str.length; i++){

    if(i !== str.lastIndexOf(str[i])){
       
      str[i] -=str.lastIndexOf[i];
    }  return str
    // if(str.lastIndexOf(str[i])===str.indexOf(str[i])) {
    //   str[i] -=str[i];
    //   console.log(str);
    // }  
  }
 
}


// // console.log(removeDupes('abcd')) // -> 'abcd'
// console.log(removeDupes('aabbccdd')) // -> 'abcd'
// console.log(removeDupes('abcddbca')) // -> 'abcd'
console.log(removeDupes('abababcdcdcd')) // -> 'abcd'










