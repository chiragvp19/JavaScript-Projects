// accessing the elements through id
const inputBox = document.getElementById("input-box");
const listConatiner = document.getElementById("list-conatiner");

function addTask()
{
    // if the input is empty
    if(inputBox.value === '')
    {
        alert("Please enter the task!")
    }
    else{
        // creating an html element li
        let li = document.createElement("li");

        //text adding onto the li tag
        li.innerHTML = inputBox.value;

        //to display the li in list-container
        listConatiner.appendChild(li);

        let  span = document.createElement("span");
        // to get X(delete) symbol
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();
}

//To check the click on conatiner
listConatiner.addEventListener("click",function(e)
{
//    if the click is on li then it should make it checked
//    , if it is already checked then remove the checked mark
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
   // if the click is on span then it should be removed parent(li)
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// to store the task in the local storage
function saveData()
{
    // Storing the content in listcontainer
    localStorage.setItem("data",listConatiner.innerHTML)
}

// To show the stored data
function showTask(){
    listConatiner.innerHTML = localStorage.getItem("data");
}
showTask();
