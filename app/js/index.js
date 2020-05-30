`use strict`
var task_id = 0;

function choose_color(priority_value){
  var bgc = ""
  if(priority_value == "high"){
    bgc = "red";
  }
  else if(priority_value == "medium"){
    bgc = "orange";
  }
  else{
    bgc = "green";
  }
  return bgc;
}

function delete_task(trash_className){
  trash_can = document.getElementsByClassName(trash_className)[0];
  task_div = trash_can.parentNode;
  task_div.remove();
}


function create_task(){
  task_id = task_id + 1;

  task = document.getElementById("input").value
  priority = document.getElementById("priority");
  priority_value = priority.options[priority.selectedIndex].value;
  color = choose_color(priority_value);
  console.log(color);
  // creating new div for task
  new_div = document.createElement("div");
  //new_div.appendChild(trash_can);
  new_div.innerHTML = task;
  new_div.className = "task ";
  new_div.id = task_id;
  new_div.style.backgroundColor = color;
  document.body.appendChild(new_div);

  //trash can adding
  trash_can = document.createElement("i");
  trash_can.className = "fa fa-trash-o trash " + task_id;
  trash_can.setAttribute("onclick","delete_task(this.className)")
  
  document.getElementById(task_id).appendChild(trash_can);
}


function addtask(){
  modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "block";
}

function closetask(){
  modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "none";
}