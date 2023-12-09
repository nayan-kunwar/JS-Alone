function addTask(){
    const taskInput = document.getElementById('taskInput');
    console.log(taskInput);
    const taskList = document.getElementById('taskList');
    const addMessage = document.getElementById('add');
    if(taskInput.value.trim() === ''){
        addMessage.innerHTML = `<b>Please enter a task.</b>`
        addMessage.style.color = 'red'
    }else{
        const list = document.createElement('li');
        list.innerHTML = taskInput.value;
        list.style.color = "white"
        taskList.appendChild(list);
        taskInput.value = ''; // Cannot write inputValue as, it is a separate value not attached with input field
        addMessage.innerHTML = '';
    }
    
   
}
