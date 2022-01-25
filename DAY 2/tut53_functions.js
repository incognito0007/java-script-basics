console.log("this is tut 53 on functions in java script")

//here greetText value is default value so if by chance we forget to call greettext then this value is shown
function hello(name, greettext = "greetings from java script") {
    // let name1 = "SAMARTH"
    // console.log(name1)
    console.log(greettext + " " + name)
    console.log(name + " is a good boy")
}

function sum(a, b, c) {
    let d = a + b + c
    return d;
}

// let name = "ANKIT"
// let name1 = "SATVIK"
// let name2 = "BHOOMIKA"
// let name3 = "ANIRUDDHA"
// let greettext1 = "GOOD MORNING"
// hello(name,greettext1)
// hello(name1,greettext1)
// hello(name2,greettext1)
// hello(name3)
hello("ankit", "good afternoon")

let returnVal = sum(1,2,3)
console.log(returnVal)
// console.log(name + " is a good boy")
// console.log(name1 + " is a good boy")
// console.log(name2 + " is a good boy") 
// console.log(name3 + " is a good boy")