// var a;
// a=5;
// alert(a);
// typeof is using to know which type of data stored 
// let a = typeof 'ram';

// console.log(a);
// logic build 
// let age = 19;
// let hasvoteridcard = 'No';

// if (age>=18 &&  hasvoteridcard== 'yes'){
//     alert('you are eligible for vote!');
// } 

// else if(age>=18 &&  hasvoteridcard!= 'yes'){
// alert('Please get your voter id!')
// }

// else{
//     alert('you are not eligible for vote!');
// }

// nested type

// let age = 21;
// let hasvoteridcard = 'yes';

// if (age >= 18) {
//     if (hasvoteridcard = 'yes') {
//         alert('you are eligible for vote!')
//     }
//     else {
//         alert('Please get your voter id!')
//     }
// }

// else {
//     alert('you are not eligible for vote!');
// }

let isLoggedin = 1; // 0 for loggedout and 1 for login

/*  if (isLoggedin ==0){
    document.write('Login');
}
else{
    document.write('Logout');
}*/

// turnary operator for any asigment like 1 line 

/* let option = isLoggedin == 1 ? 'Login': 'Logout';
           // condition         true      false

           document.write(option) */

//Nullish coalescing assignment (??=) - JavaScript

// let user;
//  user = ' hellow jagriti mishra'; // if user not login 
//   alert(user  ?? 'hellow my Guest ')


//SWITCH STATEMENT in switch === is working only beacause it stick comparison 

//IF input =1 , "y", "yes" output = continue...
// IF input = 0, "n", "no" output = end...

let input;
input = "20";
/* if (input === 1) {
    document.write("continue...");
} else if (input === 'y') {
    document.write("continue...");
} else if (input === 'yes') {
    document.write("continue...");
} else if (input === 0) {
    document.write("end...");
} else if (input === "n0") {
    document.write("end...");
} else if (input === 'n') {
    document.write("end...");
} else {
    document.write("wrong input...please check again.......");
    alert("wrong input...please check again.......")
}*/

// WROTE LIKE THAT 
if (input === 1 || input === 'y' || input === 'yes') {
    document.write("continue...");
} else if (input === 0 || input === 'n' || input === 'no') {
    document.write("end...");
}
else {
    document.write("wrong input...please check again.......");
    alert("wrong input...please check again.......")
}

/* switch (input) {
    case 1: //input === 1
        document.write("continue...");
        break;
    case 'y': //if (input === 'y')
        document.write("continue...");
        break;
    case 'yes': //if (input === 'yes')
        document.write("continue...");
        break;
    case 0: //input === 0
        document.write("End...");
        break;
    case 'no': //input === 0
        document.write("End...");
        break;
    case 'n': //input === 0
        document.write("End...");
        break;
    default:
        document.write("wrong input...please check again.......");
        alert("wrong input...please check again.......")
}*/
// WE CAN WROTE LIKE THAT 
// switch (input) {
//     case 1: //input === 1     
//     case 'y': //if (input === 'y')
//     case 'yes': //if (input === 'yes')
//         document.write("continue...");
//         break;
//     case 0: //input === 0
//     case 'no': //input === 0
//     case 'n': //input === 0
//         document.write("End...");
//         break;
//     default:
//         document.write("wrong input...please check again.......");
//         alert("wrong input...please check again.......")
// }