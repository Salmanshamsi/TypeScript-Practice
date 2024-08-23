// types in TS...
// number : 1,1.2,-1..
// number[] : [1,-1,1.2,1]
// string : "abc-xyz"..
// number[] : ["a","b","C","d","e"]
// boolean : "true or false"
// boolean[] : [true,false]

// custom types.

type persons = {
    id:number,
    name:string,
    email:string,
    password:string
}

interface _person  {
    id:number,
    name:string,
    email:string,
    password:string
}

let _person: _person = {
    id:1,
    name:"salman",
    email:"shasmisalman81@gmail.com",
    password:"abc123",
} 

let arrPersons: persons[] = [_person];


// ........Dynamic typed............

let arr:[string,number];

const num_1:number = 4;
const num_2:number = 5;

function add(num_1: number, num_2: number) :number {
    return num_1 + num_2;
}

console.log(add(num_1, num_2)); 


// ........advance types..

// ........union types..........

type combined = string | number;

let x:combined;

x = "apple";
x = 123;
// x = true error;

// ........Intersection Type..........

type animal = {
    name: string,
}
type bird = {
    flyingSpeed: number
}

type creature = bird & animal;

let brd: creature = {
    name:"dove",
    flyingSpeed:200
}

// ........Intersection Interface..........

interface _animal {
    name: string,
}
interface _bird {
    flyingSpeed: number
}

interface _creature extends animal, bird {};

// let brd: _creature = {
//     name:"dove",
//     flyingSpeed:200
// }


// .....generics...........


const promise:Promise<string> = new Promise((resolve,reject)=>{

    setTimeout(() => {
        resolve("data")
    },3000);

})

promise.then((resp)=>{
    console.log(resp);
});


function merge<T extends object,U extends object> (obj_A:T,obj_B:U) {
    return {...obj_A,...obj_B};
}