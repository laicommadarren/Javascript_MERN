// 1
console.log(hello);                                   
var hello = 'world';                                 
/* rewrite as interpreted
var hello;
console.log(hello);
hello = 'world';
PREDICT OUTPUT:
undefined
*/

// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
/* rewrite as interpreted
var needle;
var needle;
needle = 'haystack';
test();
function test() {
    needle = 'magnet';
    console.log(needle);
}
PREDICT OUTPUT:
magnet
*/

// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
/* rewrite as interpreted
var brendan;
brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
PREDICT OUTPUT:
super cool
*/

// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
/* rewrite as interpreted
var food;
var food;
food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
PREDICT OUTPUT:
chicken
half-chicken
*/

// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
/* rewrite as interpreted
var mean;
var food;
mean();
console.log(food);
mean = function() {
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);
PREDICT OUTPUT:
mean is not defined
(actual output: TyError: mean is not a function)
*/

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
/* rewrite as interpreted
var genre;
var genre;
console.log(genre);
genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre)
PREDICT OUTPUT:
undefined
rock
r&b
disco
*/

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
/* rewrite as interpreted
var dojo;
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
PREDICT OUTPUT:
san jose
seattle
burbank
san jose
*/

// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
/* rewrite as interpreted
const dojo;
function makeDojo(name, students){
    dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
PREDICT OUTPUT:
{name: "Chicago", students: 65, hiring: true}
error dojo is a constant 
actual output:
{ name: 'Chicago', students: 65, hiring: true }
TypeError: Assignment to constant variable.
*/
