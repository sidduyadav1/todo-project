
let todoList=[];
display();

function addInput(){
    let todoInput=document.querySelector('#todo-input');
    let todoDate=document.querySelector('#todo-date');
    let inputElement=todoInput.value;
    let inputDate=todoDate.value;
    todoList.push({item:inputElement,duedate:inputDate});
    localStorage.setItem('todoList',JSON.stringify(todoList));
    todoInput.value='';
    todoDate.value='';
    display();  
}

function display(){
    let display=document.querySelector('.todoContainer');
    let newHtml='';
     
    let localParse=JSON.parse(localStorage.getItem('todoList'));

     if(localParse!==undefined && localParse!==null){
        
        for(let i=0;i<localParse.length;i++){
            newHtml+=`
            <span>${localParse[i].item}</span>
            <span>${localParse[i].duedate}</span>
            <button class="deleteButton"; onclick=" todoList.splice(${i},1); DeleteLocal(${i}); ">Delete</button>
            `
        }
        display.innerHTML=newHtml;
     }

     else{

    for(let i=0;i<todoList.length;i++){
        newHtml+=`
        <span>${todoList[i].item}</span>
        <span>${todoList[i].duedate}</span>
        <button class="deleteButton"; onclick=" todoList.splice(${i},1); DeleteLocal(${i}); ">Delete</button>
        `
    }
    display.innerHTML=newHtml;
}
}
function DeleteLocal(index){
    let storage=JSON.parse(localStorage.getItem('todoList'));
    storage.splice(index,1);
    localStorage.setItem('todoList',JSON.stringify(storage));
    display();
}
