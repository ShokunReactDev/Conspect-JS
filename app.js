// function isUnique(string) {
//     for(i=0; i<string.length; i++){
//         if(i !== string.lastIndexOf(string[i])){
//             return false;
//         }
//     }
//   return true;
// }



// function calculeteAge(age) {

//     if(age<18){
//         while(age<18) {
//             age++;  
//             if (age<18){
//                 console.log(false) 
//             }
//             if (age == 18) {
//                 console.log(true) ;
//             }
//         }
//     } else{
//         console.log(true)
//     }
    

// }

// console.log(calculeteAge(15)); 

// function isUnique(string) {
  
//     let i = 0;
//     while (i<string.length) {
//         if (string.lastIndexOf(string[i]) !== i){
//             return false;
//         } 
//         i++;
//     }	
//     return true;
// }


function isUnique(string) {
    let i = 0;
    do {
        if (string.lastIndexOf(string[i]) !== i){
                        return false;
        } 
        i++;
    } while (i<string.length);
    return true;
}




console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('accsddef')) // -> false





