//BREAK,CONTINUE,AND NESTED LOOP

//Break is using uncondition(baher aana) loop break close in come from loop ..........
// in break and continue  Further statement will not exicute and ddiffrence  in break it has been comes from
// block but continue will go in next loop for condition check 

// for (let counter = 1; counter <= 10; counter++) {
//     if (counter == 5) {
//         break;
//     }

//     document.write(counter);
//     document.write('<br>');
// }

// continue is using for 1 particular situation not work in loop .......

// for (let counter = 1; counter <= 10; counter++) {
//     if (counter == 5) {
//         continue;
//     }

//     document.write(counter);
//     document.write('<br>');
// }

//Nested loop ...... loop inside a loop its nested loop 

outer: for (let counter = 1; counter <= 12; counter++) {

    // if(counter ==3 ){
    //     break;
    //         }

    document.write(counter);
    document.write('<br>')

    for (let counter2 = 1; counter2 < 3; counter2++) {

        if(counter ==3 ){
             break outer;
                }
        document.write('Radhe Krishna');
        document.write('<br>')
    }
}