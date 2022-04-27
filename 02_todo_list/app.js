// ****** select items **********

const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** event listeners **********

// submit form
// clear list
// display items onload

// ****** functions **********
// add item

function add(){
list=[]
let s=require('readline-sync')
for (i=0;i<5;i++){
    work_name=s.question("enter the list")
    list.push(work_name)
    }
    console.log(list)
}
add()

// display alert
console.log(list)
// clear items
for ( i of list){
    delete_item=
    list.pop(i)
console.log(list)}
// delete item


// edit item

// set backt to defaults


// ****** local storage **********

// add to local storage


// SETUP LOCALSTORAGE.REMOVEITEM('LIST');

// ****** setup items **********

