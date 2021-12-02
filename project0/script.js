const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  document.querySelector('button').disabled = true 
  let newTask = document.createElement('form')
  let input1 = document.createElement('input')
  input1.setAttribute('placeholder', 'New Task')
  input1.setAttribute('id', 'taskSubmit')
  input1.setAttribute('type', 'text')
  let submit =  document.createElement('input')
  submit.setAttribute('type', 'submit')
  list.appendChild(newTask)
  newTask.appendChild(input1)
  input1.focus()
  newTask.appendChild(submit)
  newTask.onsubmit = submitToDo
}


function checkCount() {
  const total_count = document.querySelectorAll('li').length
  itemCountSpan.innerHTML = total_count
  let check_count = 0
  document.querySelectorAll(".checkbox").forEach((cb) => {if(cb.checked === true){check_count ++}})
  uncheckedCountSpan.innerHTML = total_count - check_count
}

function submitToDo(){
  const newTaskValue = document.querySelector('#taskSubmit').value 
  let li = document.createElement('li')
  li.innerHTML = newTaskValue
  let check = document.createElement('input')
  check.setAttribute('type', 'checkbox')
  check.setAttribute('class', 'checkbox')
  list.appendChild(li)
  li.appendChild(check)
  document.querySelector('form').remove()
  document.querySelector('button').disabled = false
  checkCount()
  check.onclick = checkCount

  return false
}


function deleteToDo(){
  return false
}






