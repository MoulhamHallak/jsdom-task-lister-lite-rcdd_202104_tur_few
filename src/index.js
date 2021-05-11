document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("submitButtom").addEventListener("click", function(event) {
    event.preventDefault();
  });
    const form = document.querySelector('form');

  form.addEventListener('submit', function(event){
    event.preventDefault();

    let inputTag = document.querySelector('input#new-task-description');
    let inputValue = inputTag.value;


    let newLi = document.createElement('li');
    newLi.innerText = inputValue;

    let ulTag = document.querySelector('ul#tasks');
    ulTag.append(newLi);
    inputTag.value = '';

  })
});
  const inputValue = document.getElementById("new-task-description");
  const output = document.getElementById("tasks");
  let listItems = [];
  document.getElementById("submitButton").addEventListener("click", addItem){
    function appendListItem (inputValue) {
      let listItem = document.createElement("li");
      listItem.textContent = inputValue;
      listItems.appendChild(listItem);  
    };

    function addItem () {
      const inputEl = inputValue;
      const val = inputEl.value.trim();
      listItems.push(val);
      appendListItem(output, val);
      inputEl.value = "";
    };
  }
  
});