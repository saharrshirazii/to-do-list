const inputBox = document.querySelector("#input-box");
const AddTaskBtn = document.querySelector(".add-btn");
const listContainer = document.querySelector("#list-container");

AddTaskBtn.addEventListener('click', () => {
    if(inputBox.value === '') {
        alert('Enter a task');
    }else{
        let li = document.createElement('li');
        li.textContent = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.textContent = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();

});

listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }   
}, false);

function saveData(){
    sessionStorage.setItem ('data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = sessionStorage.getItem('data');
}

showTask();