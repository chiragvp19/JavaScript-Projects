(function()
{
    // The querySelector() allows you to select the first element that matches 
    // one or more css selection.
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let equals = document.querySelector(".btn-assign");
    let clear = document.querySelector(".btn-clear");
    

    // iterate through the buttons and checks which button is clicked and keeps on adding 
    // it to the screen to perfom computation
    buttons.forEach(function(button){
        button.addEventListener("click",function(e)
        {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    // If any operand and operator present perform operation or else ask to enter the value
    equals.addEventListener("click",function(e)
    {
        if(screen.value==='')
        screen.value="Please enter the value";
    else
    {
        let answer = eval(screen.value);
        screen.value=answer;
    }
    })
    clear.addEventListener("click",function(e){
        screen.value="";
    })
}
)();