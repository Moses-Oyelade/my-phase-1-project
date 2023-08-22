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
        buildFill()
        form.reset();
    })
})


//function
function buildFill(){
    
    const selectedOption = selectElement
    formList.appendChild(div1);
        div1.appendChild(p);
        div1.appendChild(ul);
     p.textContent = `You Subscribed as: ${selectedOption.value}`;
    
   
//function of selected option
selectElement.addEventListener("click", () => {
    selectElement.reset();
selectElement.addEventListener('change', () =>{
    
    p.textContent = `You Subscribed as: ${selectedOption.value}`;
})


})


//function to create NodeList from user input   
 inputs.forEach(function (input) {
    const li=document.createElement('li')
    if (input.value) {
        
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








