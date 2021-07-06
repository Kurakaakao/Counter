
// https://www.freecodecamp.org/news/javascript-projects-for-beginners/#how-to-create-a-counter
let num = 0;

let val = document.querySelector("#value");
let buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {
    btn.addEventListener("click", function (e){
        let styles = e.currentTarget.classList;
        if (styles.contains("plus")) {
            num++;
            console.log(num);
        }
        else if (styles.contains("reset")) {
            num = 0;
            console.log(num);
        }
        else {
            num--;
            console.log(num);
        }
        if (num > 0) {
            val.style.color = "green";
        }
        else if (num < 0) {
            val.style.color = "red";
        }    
        else {
            val.style.color = "black";
        }
    val.textContent = num;
    });
});