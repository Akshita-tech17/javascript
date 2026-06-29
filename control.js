// if (2!=3){
//     console.log("executed");
// }
// else{
//     console.log("not executed");
// }
const price = 100;
if (price>80) console.log("high price")
    // works without scope also
if (price>80) console.log("high price"),console.log("low price")
    // two statements in one go using commas 