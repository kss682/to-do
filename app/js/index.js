var task_id = 0;

function create_task_area(task, priority_value){
  task_ = document.createElement("div");
  task_.setAttribute("id","task")
  new_task = document.createTextNode(task);
  task_.appendChild(new_task);
  if(priority_value == "high"){
    task_.style.backgroundcolor = "red";
  }
  else if(priority_value == "medium"){
    task_.style.backgroundcolor = "orange";
  }
  else{
    task_.style.backgroundcolor = "green";
  }
  task_.style.height = "100%";
  return task_
}

function create_task(){
  task_id = task_id + 1;
  task = document.getElementsByTagName("input").value;
  priority = document.getElementById("priority");
  priority_value = priority.options[priority.selectedIndex].value;
  //task_ = create_task_area(task, priority_value);
  task_ = "<div id='task'>" + task + "</div>"
  task_area = document.getElementById("task_area");
  task_area.appendChild(task_)
}

function addtask(){
  modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "block";
}

function closetask(){
  modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "none";
}