//set initial count
let count = 0;

//select value and buttons
const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let styles = e.currentTarget.classList;

        if(styles.contains("decrease")) {
            count--;
        }else if(styles.contains("increase")) {
            count++;
        }else {
            count =0;
        }
        value.textContent = count;
    });
});
