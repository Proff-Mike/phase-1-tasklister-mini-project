  document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.getElementById('#create-task-form');
    form.addEventListener('submit', (event) => event.preventDefault())
  
    let userInput = document.getElementById('#new-task-description').value 
    console.log(userInput);

    let li = document.createElement('li');
    li.append(userInput);
    document.querySelector('tasks').appendChild(li);

});

