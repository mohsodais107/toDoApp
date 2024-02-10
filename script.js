"use strict";


// Variables

const inputText = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const tasksList = document.getElementById('tasksList');
let checkBox = document.querySelectorAll('#checkBox');
let checkBoxArray = Array.from(checkBox);
let trashBtn = document.querySelectorAll('#trashBtn');
let trashBtnArray = Array.from(trashBtn);

console.log(trashBtnArray);



// addBtn eventListener

addBtn.addEventListener('click', function() {
    
    // add new li element and it's childs
    const newTaskLi = document.createElement('li');
    
    const newTaskChBtn = document.createElement('img');
    newTaskChBtn.setAttribute('src', 'images/ckeckBox.png');
    newTaskChBtn.setAttribute('id', 'checkBox')
    
    const newTaskText = document.createElement('p');
    
    const newTaskTrash = document.createElement('img');
    newTaskTrash.setAttribute('src', 'images/trash.png');
    newTaskTrash.setAttribute('id', 'trashBtn');
    newTaskTrash.classList.add('trash');
    trashBtnArray.push(newTaskTrash);
    
    // append child ...
    tasksList.appendChild(newTaskLi);
    newTaskLi.appendChild(newTaskChBtn);
    newTaskLi.appendChild(newTaskText);
    newTaskLi.appendChild(newTaskTrash);
    
    // li text adn input text ...
    newTaskText.innerText = inputText.value;
    inputText.value = "";
    
    console.log(trashBtnArray);
});

// delete task event listener

trashBtnArray.forEach(function(trashBtn) {
    
    trashBtn.addEventListener('click', function() {
        
        const trashParent = trashBtn.parentNode;
        trashParent.parentElement.removeChild(trashParent);
        
    });
    
});



// check a task as done

// checkBoxArray.forEach(function(checkBox) {
    
//     checkBox.addEventListener('click', function() {
        
//         const lastSrc = checkBox.getAttribute('src');
//         if (lastSrc === 'images/ckeckBox.png') {
//             checkBox.setAttribute('src', 'images/checked.png')
//         } else if (lastSrc === 'images/checked.png') {
//             checkBox.setAttribute('src', 'images/ckeckBox.png')
//         }

//         const parentSelect = checkBox.parentElement;
//         parentSelect.toggleAttribute('class');
                
//     });
                
// });
                
checkBoxArray.forEach(function(checkBox) {
                    
    checkBox.addEventListener('click', function() {
                        
        const lastSrc = checkBox.getAttribute('src');
        if (lastSrc === 'images/ckeckBox.png') {
            checkBox.setAttribute('src', 'images/checked.png');
        } else if (lastSrc === 'images/checked.png') {
            checkBox.setAttribute('src', 'images/ckeckBox.png');
        }

        const parentSelect = checkBox.parentElement;
        parentSelect.classList.toggle('done');
        
    });
    
});

console.log(checkBoxArray);