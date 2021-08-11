// Modules
// Node Core Module

// const fs = require('fs')
// fs.writeFileSync('notes.txt','Hello')

// console.log(fs.readFileSync('notes.txt'))
// console.log(fs.readFileSync('notes.txt').toString())

// // appendFileSync

// fs.appendFileSync('notes.txt','farah')

/////////////////////////////////////////////////////////////////////////////////

// Import your own files

const x = require("./data");
// console.log(x)
// console.log(x(3,4))
// console.log(x.name)
// console.log(x.name2)
// console.log(x.add(4,4))

///////////////////////////////////////////////////////////////////////////////////

// NPM --> Node pacakage manager
// npm init -y  --> Intalize npm (one time)
// npm i nameofpacakage

// npm i --> Node_module was deleted

//chalk npm i chalk

// const validator = require('validator')
// console.log(validator.isEmail('omar@gmail.com'))

////////////////////////////////////////////////////////////////////////////////////

// Get input using command line

// console.log(process.argv)

// let command = process.argv[2]
// if(command === 'add'){
//     console.log('Add item')
// }
// else if(command === 'delete'){
//     console.log('Delete item')
// }
////////////////////////////////////////////////////////////////////////////////

// Yargs
// Version 1
const yargs = require("yargs");

// read
// delete
// list

// yargs.command({
//     command:'add',
//     describe:'Add notes',
//     handler:()=>{
//        console.log('Add note')
//     }
// })

// yargs.command({
//     command:'read',
//     describe:'Read notes',
//     handler:()=>{
//        console.log('Read note')
//     }
// })

// yargs.command({
//     command:'delete',
//     describe:'Delete note',
//     handler:()=>{
//         console.log('Delete note')
//     }
// })

// yargs.command({
//     command:'list',
//     describe:'List note',
//     handler:()=>{
//         console.log('List note')
//     }
// })

///////////////////////////////////////////////////////////////////////////////////

// Version 2

// yargs.command({
//   command: "add",
//   describe: "Add notes",
//   // Options
//   builder: {
//     title: {
//       describe: "This is title description",
//       demandOption: true,
//       type: "string",
//     },

//     body: {
//       describe: "This is body description",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler: (argv) => {
//     console.log("Adding notes title", argv.title);
//     console.log("Adding notes body", argv.body);
//   },
// });

// yargs.command({
//   command: "read",
//   describe: "Read notes",
//   builder: {
//     title: {
//       describe: "This is title description",
//       demandOption: true,
//       type: "string",
//     }
//   },
//   handler: (argv) => {
//     console.log("Read notes title", argv.title);
//   },
// });

// yargs.command({
//   command: "delete",
//   describe: "Delete note",
//   builder: {
//     title: {
//       describe: "This is title description",
//       demandOption: true,
//       type: "string",
//     }
//   },
//   handler: (argv) => {
//     console.log("Delete notes title", argv.title);
//   },
// });

// yargs.command({
//   command: "list",
//   describe: "List note",
//   handler: (argv) => {
//     console.log("List note",argv.title)
//   },
// });

////////////////////////////////////////////////////////////////////////////////////////

// Start of day 3
// Save json data , convert json --> object , convert object -->json
// Trial.js

/////////////////////////////////////////////////////////////////////////////////////

// Version 3
const notes = require('./notes')

yargs.command({
  command: "add",
  describe: "Add notes",
  // Options
  builder: {
    title: {
      describe: "This is title description",
      demandOption: true,
      type: "string",
    },

    body: {
      describe: "This is body description",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title,argv.body)
  },
});

yargs.command({
  command: "read",
  describe: "Read notes",
  builder: {
    title: {
      describe: "This is title description",
      demandOption: true,
      type: "string",
    }
  },
  handler: (argv) => {
    console.log("Read notes title", argv.title);
  },
});

yargs.command({
  command: "delete",
  describe: "Delete note",
  builder: {
    title: {
      describe: "This is title description",
      demandOption: true,
      type: "string",
    }
  },
  handler: (argv) => {
    notes.removeNote(argv.title)
  },
});

yargs.command({
  command: "list",
  describe: "List note",
  handler: (argv) => {
    console.log("List note",argv.title)
  },
});

// console.log(yargs.argv);
yargs.parse()



// Create folder
// npm init -y
// npm i pacakges --> ex.:- npm i yargs

// npm i --> node_modules deleted
