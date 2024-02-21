document.addEventListener('DOMContentLoaded', function() {
    // query for the submit button and input task field once in the beginning
    const submit = document.getElementById('submit');
    const newTask = document.getElementById('task');
  
    // disable the submit button by default
    submit.disabled = true;
  
    // listen for input to be typed into the input field
    newTask.addEventListener('input', function() {
      // enable/disable the submit button based on whether the input field is empty or not
      submit.disabled = !this.value.trim();
    });
  
    // listen for submission of form
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      // prevent the default submission of the form
      event.preventDefault();
  
      // find the task the user just submitted
      const task = newTask.value.trim();
  
      // create a list item for the new task and add the task to it
      const listItem = document.createElement('li');
      listItem.textContent = task;
  
      // add new element to our unordered list
      const tasks = document.getElementById('tasks');
      tasks.appendChild(listItem);
  
      // clear the input field
      newTask.value = '';
  
      // disable the submit button again
      submit.disabled = true;
    });
  });