'use strict'
//query selection
const form = document.querySelector('form');
// console.log(form);
const inputs = document.querySelectorAll('.new_task')
// console.log(inputs)
const subscribe = document.querySelector('#add_task')
// console.log(subscribe);
const formList = document.querySelector('#task_list')
// console.log(formList);
const selectElement = document.querySelector("#Selector");
// console.log(selectElement)
const div1 = document.createElement('div');
        div1.id="Preview"
const p = document.createElement('p'); 
const ul=document.createElement('ul');




//addEventListener
document.addEventListener('DOMContentLoaded', () => {
   form.addEventListener('submit', (e) => {
        e.preventDefault();
        chooseFill()
        buildFill()
        form.reset();
    })
})



function chooseFill(){
    div1.appendChild(p); 
//function of selected option
selectElement.addEventListener('change', () =>{

    p.textContent = `You Subscribed as: ${selectElement.value}`;
})

}


//function
function buildFill(){

    const li=document.createElement('li')
    div1.appendChild(ul);

//function to create NodeList from user input   
 inputs.forEach(function (input) {
    if (input.value) {
        formList.appendChild(div1);
        ul.appendChild(li);

        li.textContent = input.value;
            
  }
})


//function delete user input preview
let btn= document.createElement('button');
    btn.addEventListener('click', () =>{ 
        handleDelete(); 
        alert("Subscription Cancel!")});
    btn.textContent = "Cancel"
    ul.append(btn);

    //function send user input preview
let btn2 = document.createElement('button');
    btn2.addEventListener('click', () => {
        handleDelete();
        alert("Subscription Successful!")});
    btn2.textContent= "Send"
    btn2.id="btn2"
    ul.append(btn2);

}

   
//function to handleDelete 
function handleDelete(){
    div1.remove(formList.childNodes)
}
