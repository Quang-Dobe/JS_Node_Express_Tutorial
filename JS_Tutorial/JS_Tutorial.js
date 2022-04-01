console.log("----------Start new running----------");
/*
var a = "Dmm";
a += ". Fuck you"
console.log(a);
console.log(a.length);

// Get index-element from string
console.log(a[0]);
// Change value of an index-element of a string
a[0] = "C"; // Cann't change. String Immutablility
console.log(a[0]);
*/


/*
// Function
function MyFirstFunction(firstParam, secondParam, thirdParam) {
    var result = secondParam + " " + firstParam + " " + thirdParam;
    return result;
}
// Call function
console.log(MyFirstFunction("World!", "Hello", "I'm Quang."))
*/


/*
// Array
console.log("----Array----");
var sampleArray = [1, "Hello", 2, ["Other", "Array"]];
console.log(sampleArray);
// Get index-element from an array
console.log("--Get index-element from an array");
console.log(sampleArray[sampleArray.length - 1]);
console.log(sampleArray[sampleArray.length - 1][0]);
// Change an element with a given index from an array
console.log("--Change an element with a given index from an array");
sampleArray[0] = 0;
console.log(sampleArray);
// Push an element next to the last position of an array
console.log("--Push an element next to the last position of an array");
sampleArray.push(["Some thing", "is pushed"]);
console.log(sampleArray);
// Pop the last element from an array
console.log("--Pop the last element from an array");
var lastElement = sampleArray.pop();
console.log(sampleArray, "with the last popped element is ", lastElement);
// Shift the first element from an array
console.log("--Shift the first element from an array");
var firstElement = sampleArray.shift();
console.log(sampleArray, "with the first shifted element is ", firstElement);
// Unshift is look like adding new element to the first position of an array
console.log("--Unshift an element to an array");
sampleArray.unshift(0);
console.log(sampleArray);
*/


/*
// Global variables
firstGlobal = 1;
function func1() {
    // If we put 'var' before 'secondGlobal' variable,
    // the varibale 'secondGlobal' is just defined in this function
    // and can not use outside or globally
    // For example, if we call the function 'func2()',
    // the variable 'secondGlobal' will not be defined
    // and the program will get an error
    // We use nothing before a variable to define a global variable in a function
    secondGlobal = 2;
    var thirdGlobal = 3;
}
function func2() {
    var funcOutput = "";
    if (typeof firstGlobal != "undefined") {
        funcOutput += "firstGlobal is: " + firstGlobal + "\n";
    }
    if (typeof secondGlobal != "undefined") {
        funcOutput += "secondGlobal is: " + secondGlobal + "\n";
    }
    if (typeof thirdGlobal != "undefined") {
        funcOutput += "thirdGlobal is: " + thirdGlobal + "\n";
    }
    console.log(funcOutput);
}

console.log("--Global and scope variables");
func1()
func2()



// The global variables use in the function with pre-define a variable
// with having the same name, that global is automately undefined.
// But if we didn't define any variable with the same name,
// the global variable is till being used
function func3() {
    // There is a defined variable with the same name as global variable,
    // if we use global variable before the line which used for defined a variable
    // with the same name as global variable, it will not be defined
    console.log("firstGlobal variable before the line used for defined outside this function:", firstGlobal);

    // if we use global variable after the line which used for defined a variable
    // with the same name as global variable, we will use the value of that variable as
    // a local (or scope) variable. And can't use the value of the global variable
    var firstGlobal = -1;
    console.log("firstGlobal variable after the line used for defined inside this function:", firstGlobal);
}

function func4() {
    // There is no defined variable which has the same name as global variable,
    // it is OK for using the value of the global variable and the global variable
    // is defined
    console.log("firstGlobal variable inside this function:", firstGlobal);
}

console.log("--Change value of a global variable");
func3();
func4(); // Same as console.log(firstGlobal);


function func5(arr, item) {
    arr.push(item);
    return arr.shift()
}
arr = [1, 2, 3, 4, 5]
console.log("--Other usage of function");
console.log("Before pushing and shifting: arr=" + JSON.stringify(arr));
console.log(func5(arr, 6))
console.log("After pushing and shifting: arr=" + JSON.stringify(arr));
*/


/*
function func6(item) {
    if (item > 10 && item < 20) {
        if (item == 13 || item == 17) {
            return "Prime Number"
        }
        return "Not Prime Number";
    }
    return "Not between in range(10, 20)";
}
console.log("--Some sample about 'and' and 'or' condition");
console.log(func6(13));

function func7(item) {
    if (item > 10) {
        return 1;
    }
    else if (item < 10) {
        return 2;
    }
    else {
        return 3;
    }
    // We also can use this type of code:
    // return (item>10) ? 1 : 2
}
console.log("--Other sample about if-else statement");
console.log(func7(5));
console.log((1>2)? 1:2)
console.log((5 < 0) ? "Positive" : ((5==0) ? "Zero" : "Negative"))

// Attention: The double equal "==" will be used to compare 2 element and convert 1 element to the same type
// For example: 3==3 is returned True, 3=='3' is also returned True
// But the triple equal "===" will be used to compare directly 2 element, if they don't have the same type, auto return false
// For example: 3===3 is returned True, but 3==='3' is returned False
*/


/*
function func8(item) {
    var result = 0
    switch (item) {
        case 1:
        case 2:
        case 3:
            result = "Number";
            break;
        case '1':
        case '2':
        case '3':
            result = "String";
            break;
        default:
            result = 'Quang';
            break;
    }
    return result
}

console.log("--Switch")
console.log("With item =", 5, ". The result will be equal", func8(5))

function func9(param_1, param_2) {
    if (param_1 < 0 || param_2 < 0)
        return undefined;
    return Math.sqrt(Math.pow(param_1, 2) + Math.pow(param_2, 2));
}
console.log("--Undefined and some Math method:")
console.log("Func9(-2, 2) return", func9(-2, 2))
console.log("Func9(3, 4) return", func9(3, 4))
*/


/*
console.log("----Object data type----")
var objData = {
    "Name": "Quang",
    "MSSV": 19522102,
    "School": "UIT"
}

console.log("--Access to properties of an object")
console.log("Get value of 'Name' property in objData by using objData.Name (", objData.Name, ") or objData['Name'] (", objData['Name'], ")")

console.log("--Add properties of an object")
objData["Address"] = "HCM City"
console.log("objData after adding a element:", objData)

console.log("--Update properties of an object")
objData["Address"] = "Viet Nam"
console.log("objData after updating:", objData)

console.log("--Delete properties from an object")
delete objData["Address"]
console.log("objData after deleting:", objData)


// Check a key exist or not in an object
var objData = {
    "Name": "Quang",
    "MSSV": 19522102,
    "School": "UIT"
}
var wordKey = "name"
console.log("Is wordKey (", wordKey, ") exist or not in object? ", (objData[wordKey] != undefined))

// We can use other way to check if wordKey exist or not in objData
function func10(objData, checkProp) {
    if (objData.hasOwnProperty(checkProp))
        return objData[checkProp]
    else
        return "Not found"
}
console.log("If wordKey (", wordKey, ") exist in object. Value of that key is", func10(objData, wordKey))
*/


// Complex object
/*
console.log("----Complex object----")
var myData = [
    {
        "Name": "Quang",
        "Age": 21,
        "Hobby": ["ML", "LPhuong :D"],
        "Marriage status": "FA :)))"
    },
    {
        "Name": "LPhuong",
        "Age": 21,
        "Hobby": ["Unknown", "Unknown"],
        "Marriage status": "Already have boy friend :D"
    }
]
var otherData = {
    "Data_1": {
        "Me" : {
            "Name": "Quang",
            "Age": 21
        },
        "My_Crush" : {
            "Name": "LPhuong",
            "Age": 21
        }
    },
    "Data_2": {
        "Sample_1": [1, 2, 3],
        "Sample_2": ["a", "b", "c"]
    }
}
var oneMoreData = {
    "id_1": {
        "Name": "Alex",
        "Age": 18,
        "Hobby": [
            "Music", "Game", "Hangout"
        ]
    },
    "id_2": {
        "Name": "Edward",
        "Age": 21,
        "Hobby": [
            "Coffee", "Music", "Guitar"
        ]
    },
    "id_3": {
        "Name": "Rob",
        "Age": 16
    }
}

// Get properties of a complex object
console.log("--Complex object")
console.log(otherData.Data_1.Me["Name"])

// Update properties of a complex object
// Make a copy object
var copy_oneMoreData = JSON.parse(JSON.stringify(oneMoreData));
function func11(id, prop, value) {
    // If not exist id in object, return nothing
    if (copy_oneMoreData[id]==undefined)
        return "Not found"
    
    // If value is nothing, delete that property
    if (value === "") {
        delete copy_oneMoreData[id][prop]
    }
    else if (prop == "Hobby") {
        // If not exist prop in id, create new hobby
        copy_oneMoreData[id][prop] = copy_oneMoreData[id][prop] || [];
        // Push value into Hobby
        copy_oneMoreData[id][prop].push(value);
    }
    else {
        copy_oneMoreData[id][prop] = value
    }
    return copy_oneMoreData
}
console.log(func11("id_4", "Address", "VietNam"))
*/


/*
// For-While-Do while
// Same as C++
var objData = [
    {
        "Name": "Alex",
        "Age": 18,
        "Country": "US"
    },
    {
        "Name": "Bob",
        "Age": 20,
        "Country": "UK"
    },
    {
        "Name": "Sindra",
        "Age": 22,
        "Country": "France"
    }
]
function func12() {
    // for loop
    for (var i=0; i<10; i++) {
        console.log(i);
    }
    // while loop
    var i=0
    while (i<10) {
        console.log(i);
        i++;
    }
    // do while loop
    do{
        console.log(i);
        i-=1;
    } while (i!=0);
}

function func13(name, prop, objData) {
    for (var i=0; i<objData.length; i++) {
        if (objData[i]["Name"] === name)
            // if (objData[i][prop] == undefined)
            //     continue;
            // else
            //     return objData[i][prop]

            // We can return like below instead of using those line above
            // if the objData[i][prop] is undefined, use || to return other thing
            return objData[i][prop] || "Not found"
    }
    return "Not found"
}
console.log("----For/While/DoWhile----")
func12()
console.log(func13("Alex", "Country_", objData))
*/


/*
// Some useful method
console.log("----Some useful method----")
// Math.sqrt(number): Return a number which if square it, we get the exact number we have provided
// Math.pow(number_a, number_b): Return a number like number_a**number_b

// Math.floor(number): Return an integer before the number
console.log("Math.floor() function:", Math.floor(3.8))
// Math.random(): Return a number (float) between 0 and 1
console.log("Math.random() function:", Math.random()*10)
console.log("Random number between a (5) and b (15):", Math.random() * (15-5) + 5)
// To get more information about how to use math in JS, visit websites

// Convert string to int
console.log(parseInt('5.5'), typeof(parseInt('5.5')))
// Special, add second param in parseInt() function to let program know the radix (binary, hex, dec,...)
console.log(parseInt('100010', 2))
*/

/*
// Note: The basic difference between var and let is that: var can be used at anywhere in scope function (have to defined that variable first)
// But with let, we just use it inside which block we defined it in
// Const is just const
function funcTemp() {
    if (true) {
        var Ezzz = "abc"
    }
    console.log(Ezzz)
}
funcTemp()

const Pi = 3.14
const objData = {
    PI : 3.14
}
// Same like other programming lang, const can't not be changed
try {
    Pi = 1;
} catch ( ex ) {
    console.log("1. Can't change")
}
// But we can change properties in objData
try {
    objData.PI = 1;
} catch ( ex ) {
    console.log("2. Can't change")
}
// So, if we want to set const objData to not able to be changed, set freeze
Object.freeze(objData);
try {
    objData.PI = 1;
} catch ( ex ) {
    console.log("3. Can't change")
}*/

/*
// To copy from another array, use [... old_array]
var arr = [1, 2, 3, 4]
var newArr_1 = arr, newArr_2 = [...arr], [, , ...newArr_3] = arr
arr[0] = -1
console.log(newArr_1, newArr_2, newArr_3)
*/


/*
// Function
console.log("----Function----")

// Normal function
console.log("--Normal function")
var myFunction = function(a, b) {
    return "Nothing"
}
console.log(myFunction(1, 2))

// Function with less code :D
console.log("--Function with less code :D")
var myNewFunction = a => "Nothing too"
console.log(myNewFunction(1))

// Available function
console.log("--Use an availble function")
var arr = [1, -2, 3.1, -4, 5]
console.log(arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x))

// Function in function
console.log("--Function in function")
var alsoMyFunction = (() => {
    return function functionBesideFunction(a, b=1) {
        return a + b
    }
})();
console.log(alsoMyFunction(1), alsoMyFunction(1, 2, 3))

// Function with multi params
console.log("--Function with multi params")
var anotherFunction = (() => {
    return function sum(...args) {
        return args.reduce((a, b) => a+b, 0)
    }
})()
console.log(anotherFunction(1, 2, 3, 4, 5))

// function with param auto set directly from object
console.log("--function with param auto set directly from object")
var objData = {
    min: 1,
    max: 8,
    middle: 4,
    square: 16
}
const Middle = (() => {
    return ({ min, max }) => {
        return (min + max)*1.0 / 2
    }
})()
console.log(Middle(objData))
const createObjData = (name, age, address) => ( { name, age, address } )
console.log(createObjData("Quang", 21, "VN"))

// function in object
console.log("--function in object")
var objData = {
    gear: 5,
    setGear(newValue) {
        this.gear = newValue
    }
}
console.log(objData.gear)
objData.setGear(5)
console.log(objData.gear)
*/


/*
// Class
console.log("----Class----")
function makeClass() {
    class myClass {
        constructor(name, nickName) {
            // Publiic properties
            this.name = name
            // Private properties
            this._privateName = nickName
        }

        get Print() {
            return `${this.name} have a nickname is ${this._privateName}`
        }

        set Update(newName) {
            this._privateName = newName
        }
    }
    return myClass
}

// Create a new data-type (create a new type of class) by calling from a function
// Note: We can create a new type of class directly
console.log("--Class")
const myClass_ = makeClass()
// If we give less params than what class need, all properties 
var ourClass = new myClass_("Quang")
// Public variable and private variable
console.log("Public variable:", ourClass.name)
console.log("Private variable:", ourClass._privateName)

// Note: The speical of JS on using class is that, if we use get and set to create method,
// When we need to access those method from outside code, we don't use () at the end. For example:
console.log("get-function:", ourClass.Print)
ourClass.Update = "Cabe"
console.log("get-function:", ourClass.Print)
*/

