// types in TS...
// number : 1,1.2,-1..
// number[] : [1,-1,1.2,1]
// string : "abc-xyz"..
// number[] : ["a","b","C","d","e"]
// boolean : "true or false"
// boolean[] : [true,false]
var _person = {
    id: 1,
    name: "salman",
    email: "shasmisalman81@gmail.com",
    password: "abc123",
};
var arrPersons = [_person];
// ........Dynamic typed............
var arr;
arr.push("salman");
var num_1 = 4;
var num_2 = 5;
function add(num_1, num_2) {
    return num_1 + num_2;
}
console.log(add(num_1, num_2));
