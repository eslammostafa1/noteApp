const car = {
    name:'BMW',
    color:'Black'
}

// console.log(car)
// console.log(car.name)

// Convert object to json

const carJson = JSON.stringify(car)
// console.log(carJson)
// console.log(carJson.name)
// console.log(carJson.color)

// Convert json to object

const carObject = JSON.parse(carJson)
// console.log(carObject)

/////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs')

// // Error --> why? send object and we should have send json
//  fs.writeFileSync('txt.json',car)
// // readFileSync return data in buffer form so we need to change it using toString()
// fs.writeFileSync('txt.json',carJson)
// const dataBuffer = fs.readFileSync('txt.json').toString()
// console.log(dataBuffer)

/////////////////////////////////////////////////////////////////////////////////

// Task
// Create object person --> name age
const person ={
    name:'Adam',
    age:20
}
// Change object to json --> JSON.stringfy
const personJson = JSON.stringify(person)
// console.log(personJson)

// Write file --> .json,data
fs.writeFileSync('person.json',personJson)

// read
const personBuffer = fs.readFileSync('person.json').toString()
// console.log(personBuffer)

// convert json --> object (JSON.parse)
const obj = JSON.parse(personBuffer)
// console.log(obj)

// modify object 
obj.name = 'Omar'
obj.age = 30

// convert object --> json
const userJson = JSON.stringify(obj)

// write
fs.writeFileSync('person.json',userJson)



