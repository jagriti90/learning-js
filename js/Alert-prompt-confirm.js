// ALERT , PRTOMPT , CONFIRM ...........
//FUNCTION TO INTRACT WITH THE USER;.......

//alert()----show the msg ......

// alert('welcome! ---to my website')

//prompt()...... show a msg , input text . it   return the text on ok, if cancel button 
// or esc is clicked ,null........

// let age = prompt('Enter your age ', 20);
// if (age != null) {
//     document.write(`Your age is ....    ${age}`)
// } else {
//     document.write('age Field was blank')
// }

//confirm() .....   show a msg, confirm with ok, or 'cancel'. it true for ok and false for cancel.

let resp = confirm('Are your sure,   you want to delete it...');
if (resp) {
    document.write('deleted');
} else {
    document.write(' not..deleted');
}
