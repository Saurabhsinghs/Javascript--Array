// Arrays And Loops

const Languages=['javascript','python','C++','Java','React'];
console.log(Languages);

// Length
console.log(Languages.length); 

// Accessing by Index
console.log(Languages[2]);

// Add Element

Languages.push('C');
console.log(Languages);

// Add first 
Languages.unshift('C#');
console.log(Languages);

// Delete at the last
Languages.pop();
console.log(Languages);

// Delete at first
Languages.shift();
console.log(Languages);

// Loops
for(let i=0;i<10;i++){
    console.log('*');
}

// Example
const actors=[
    {
        name:'Actor1',
        payment:100
    },
    {
        name:'Actor2',
        payment:1000
    },
    {
        name:'Actor3',
        payment:10000
    },  
];

// for(let i=0;i<actors.length;i++)
// {
//     console.log(actors[i]);
// }

// ForEach loop
//1-pass function
// actors.forEach((actor)=>{
//   console.log(actor);
// })

// Forof loop
// for(let actor of actors){
//     console.log(actor);
// }


// Filters

// const student=[
//    {
//        name:"Student 1",
//        marks:45
//    },
//    {
//     name:"Student 2",
//     marks:50
//    },
//    {
//     name:"Student 1",
//     marks:46
//    },
// ];

// student.filter((student)=>{
//     console.log(student);
// })

// const failed=student.filter((student)=>student.marks<45);
// console.log(failed);


// Map

const users=[
    {
        fname:'john',
        lname:'Doe'
    },

    {
        fname:'Jane',
        lname:'Doe'
    },
]

users.map((user)=>{
    console.log(user);
})

const finalUsers=users.map((user)=>{
    return {
        fullname:`${user.fname}   ${user.lname}`
    }
})

console.log(finalUsers);


// Reduce
const movies=[
    {
        name:"Intersteller",
        budget:100
    },
    {
        name:"Social",
        budget:150
    },
    {
        name:"Matrix",
        budget:300
    },
];

// let total=0;
// movies.forEach((movie)=>{
//     total+=movie.budget;
// })

const toatl=movies.reduce((total,movie)=>{
    total+=movie.budget; 
    return total;   
},0);
console.log(toatl);

// Indexof
const admins=[2,1,5];

const user={
    name:'xyz',
    id:5
}

// console.log(admins.indexOf(user.id));

// // Find

// const users1=[
//    {
//        name:'xyz',
//        id:1
//    },
//    {
//     name:'xdcsdc',
//     id:2
// },
// {
//     name:'mvcv',
//     id:3
// },
// {
//     name:'pqr',
//     id:4
// },
// ];

// const myuser=users1.find((user)=>{
//          if(user.name==='xyz'){
//              return true;
//          }
//          return false;
// })

// console.log(myuser);


// Sort

// const names=['john','jane','shyam','ram','sameer','Mansi'];
// names.sort();
// console.log(names);


// Splice

const names=['john','jane','Shyam','Ram','Sameer','Mansi'];
names.splice(2,1);
console.log(names);