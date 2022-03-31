// There are 2 ways for sharing object and method of a module

// Add export at first
// export const myFunc = name => {
//     console.log(`Hello ${name}! You call this function from an external module!`)
// }
// export var myName = "Quang"

// Use module.exports
const otherFunc = name => {
    console.log(`Hello ${name}! You call this function from an external module!`)
}
const otherName = "Quang"
module.exports = {otherFunc, otherName}