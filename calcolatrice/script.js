window.addEventListener("DOMContentLoaded", e => {
    let primoNum = [];
    let secondoNum = [];
    let operation = null;
    let first = true;
    let finish = false;
    let result = 0;
    let buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.addEventListener("click", e => {
            let num = e.target;
            let numId = num.id;
            if(first)
            {
                primoNum.push(numId);
            }
            else
            {
                secondoNum.push(numId)
            }
            primoNumMerge = primoNum.join("");
            secondoNumMerge = secondoNum.join("");
            if(numId == "/" || numId == "*" || numId == "-" || numId == "+")
            {
                primoNumMerge = primoNum.pop();
                primoNumMerge = primoNum.join("");
                first = false;
                operation = numId;
            }
            if(numId == "piuMeno")
            {
                if(first)
                {   
                    primoNumMerge = primoNum.pop();
                    primoNum.unshift("-");
                    primoNumMerge = primoNum.join("");
                }
                else
                {
                    
                    secondoNum.splice(secondoNum.indexOf("piuMeno"),1);
                    secondoNumMerge = secondoNum.pop();
                }
            }
            if(numId == "c")
            {
                if(first)
                {
                    primoNumMerge = primoNum.pop();
                    primoNumMerge = primoNum.pop();
                    primoNumMerge = primoNum.join("");
                }
                else
                {
                    secondoNumMerge = secondoNum.pop();
                    secondoNumMerge = secondoNum.pop();
                    secondoNumMerge = secondoNum.join("");
                }

            }

            if(numId == "=")
            {
                secondoNumMerge = secondoNum.pop(); 
                secondoNumMerge = secondoNum.join("");
                finish = true;
                console.log(primoNumMerge);
                console.log(secondoNumMerge);
                if(operation == "/")
                {
                    result = Number(primoNumMerge) / Number(secondoNumMerge);
                }
                if(operation == "*")
                {
                    result = Number(primoNumMerge) * Number(secondoNumMerge);
                }
                if(operation == "-")
                {
                    result = Number(primoNumMerge) - Number(secondoNumMerge);
                }
                if(operation == "+")
                {
                    result = Number(primoNumMerge) + Number(secondoNumMerge);
                }
            }
            if(finish)
            {
                document.getElementById("display").innerHTML = result;
            }
            else
            {
                if(operation != null)
                {
                    document.getElementById("display").innerHTML = primoNumMerge + operation + secondoNumMerge;
                }
                else
                {
                    document.getElementById("display").innerHTML = primoNumMerge + secondoNumMerge;
                }
            }
            if(numId == "ac")
            {
                clear();
            }
            function clear()
            {
                primoNum = [];
                secondoNum = [];
                primoNumMerge = [];
                secondoNumMerge = [];
                operation = null;
                first = true;
                finish = false;
                result = 0;
                document.getElementById("display").innerHTML = "0";
            }
        });
    });
});