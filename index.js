// let inpt = document.getElementById("inpt");
// let sbt = document.getElementById("sbt");
// let listUl = document.getElementById("listul");
// let liarry = [];

// function btnClick() {
//   let li = document.createElement("li");
//   let span = document.createElement("span");
//   let inputvalue = document.createTextNode(inpt.value);
//   listUl.appendChild(li);
//   li.appendChild(span);
//   span.appendChild(inputvalue);
//   liarry.push(inpt.value);
//   console.log(liarry);
//   inpt.value = "";

//   // Adding Delete
//   let iconI = document.createElement("i");
//   iconI.classList.add("fas", "fa-trash");
//   li.appendChild(iconI);

//   // Adding edit btn
//   let editicon = document.createElement("i");
//   editicon.classList.add("fas", "fa-edit");
//   li.appendChild(editicon);
// }

// function keyPress(key) {
//   if (key.keyCode === 13 || key.which === 13) {
//     btnClick();
//   }
// }

// function removeLi(remove) {
//   if (remove.target.classList[1] === "fa-trash") {
//     let item = remove.target.parentElement;
//     item.remove();
//   }
// }

// function editList(edit) {
//   if (edit.target.classList[1] === "fa-edit") {
//     let editableValue = prompt("Pls edit here");
//     let item = edit.target.parentElement;
//     let spanEl = item.querySelector('span');
//     spanEl.innerText = editableValue;
//     console.log(spanEl.innerText);

//   }
// }

// sbt.addEventListener("click", btnClick);
// inpt.addEventListener("keydown", keyPress);
// listUl.addEventListener("click", removeLi);
// listUl.addEventListener("click", editList);


let inpt = document.getElementById("inpt");
let sbt = document.getElementById("sbt");
let listUl = document.getElementById("listul");
let liarry = [];

function clickbtn(){
  let li = document.createElement('li');
  let span = document.createElement('span');
  let inputvalue = document.createTextNode(inpt.value);
  listUl.appendChild(li);
  li.appendChild(span);
  span.appendChild(inputvalue);
  // set to local storage 
  localStorage.setItem("inputvalue","inptData");
  liarry.push(inpt.value)
  console.log(liarry)
  // Add Remove btn
  let iconI = document.createElement('i');
  iconI.classList.add('fas','fa-trash');
  li.appendChild(iconI)
  // Edit btn
  let editI = document.createElement('i');
  editI.classList.add('fas','fa-edit');
  li.append(editI);

  inpt.value = '';
}

function keyPress(event){
  if( event.keyCode === 13 || event.which === 13){
  clickbtn();
  }
}

// Add Remove function
function removeBtn(event){
  if ( event.target.classList[1] === 'fa-trash'){
    let removeItem = event.target.parentElement;
    removeItem.remove();
  }
}

// Add Edit function
function editBtn(event){
  if( event.target.classList[1] === 'fa-edit'){
    let editContent = prompt('Please Edit Here');
    let item = event.target.parentElement;
    let spanEl = item.querySelector('span');
    spanEl.innerText = editContent;
    liarry.push(spanEl.innerText);
  }
}

sbt.addEventListener('click', clickbtn);
inpt.addEventListener('keydown', keyPress);
listUl.addEventListener('click', removeBtn);
listUl.addEventListener('click', editBtn);
