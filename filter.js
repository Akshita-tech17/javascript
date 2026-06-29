const mynums=[1,2,3,4,5,6,7,8,9,10];
// Newnums= mynums.filter((num)=> num>4);
// console.log(Newnums)

// Newnums=mynums.filter((num)=>{
//     return  num>4;
// });
// console.log(Newnums);

// for (const i of mynums){
//     console.log(i+10);
//     // i= i+10;
// }

// mynums.forEach((item)=>{
//     console.log(item+10);
// });

// mynums.map((val)=>{
//     console.log(val+10);
// });


//store in variable

// mydata=mynums.map((item)=>item+10);
// console.log(mydata);


// mydata=mynums.map((item)=>{return item+10});
// console.log(mydata);

//chaining

// mydata=mynums
//              .map((num)=>num+10)
//              .map((num)=>num*10)

// console.log(mydata);

// mydata=mynums
//              .map((num)=>num+10)
//              .map((num)=>num*10)
//              .filter((num)=>num>150)

// console.log(mydata);[]

const data= [1,2,3,4]
const sum = data.reduce(function(acc, currvalue){
    console.log(`acc :${acc} and currvalue:${currvalue} `);
    return acc+currvalue;
});
console.log(sum);


const Nsum = data.reduce( (acc,currvalue)=>acc+currvalue,0);
console.log(Nsum) 

shoppingcart= [
    {
        item:'python',
        price:299
    },
    {
        item:'cse',
        price:599
    },
    {
        item:'c++',
        price:999
    }
]

const mybill = shoppingcart.reduce((acc,item)=>acc+item.price,0);
console.log(mybill);