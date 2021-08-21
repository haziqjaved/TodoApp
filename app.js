var list =document.getElementById("list");

// add task function
function addTask(){
    var add=document.getElementById("todoText");
    var li=document.createElement("li")
    var liText=document.createTextNode(add.value);
    li.appendChild(liText)
    list.appendChild(li)

    //create Edit button
    var editBtn=document.createElement("img");
    editBtn.src="edit.png"
    editBtn.setAttribute("class","edtBtn");
    editBtn.setAttribute("onclick","editList(this)");
    li.appendChild(editBtn);
    console.log(li)

    //create Delete button
    var delBtn=document.createElement("img");
    delBtn.src="del.png";
    // console.log(delBtn)

    delBtn.setAttribute("class","btn");
    delBtn.setAttribute("onclick","deleteItem(this)")
    li.appendChild(delBtn)
    // console.log(li)
    
    add.value=""; //use after enter input field is empty

}
function editList(e){
   var val= e.parentNode.firstChild.nodeValue
    var editVal=prompt("Enter edit value",val)
    e.parentNode.firstChild.nodeValue=editVal;
}
function deleteItem(e){
    e.parentNode.remove();
}
function deleteAll(){
    list.innerHTML="";
}
