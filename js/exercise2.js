window.addEventListener("keydown", increase_fontsize)
window.addEventListener("keydown", decrease_fontsize)

function increase_fontsize(event) {
    let balloon = document.getElementById("balloon");

    //finds current size of ballon
    let current_size = parseFloat(window.getComputedStyle(balloon).fontSize); //parseFloat changes the fontsize (which is string) to a float

    if (current_size >= 150) {
        balloon.innerText = "💥"; //changes the text
        window.removeEventListener("keydown", increase_fontsize)
        window.removeEventListener("keydown", decrease_fontsize)
    }
    else if (event.key === "ArrowUp") {
        //prevents arrowup to scroll on page 
        event.preventDefault();
        
        //new fond size of ballon
        balloon.style.fontSize = (current_size * 1.1) + "px";
    }
}

function decrease_fontsize(event) {
    if (event.key === "ArrowDown") {
        //prevents arrowup to scroll on page 
        event.preventDefault();

        let balloon = document.getElementById("balloon");

        //finds current size of ballon
        let current_size = parseFloat(window.getComputedStyle(balloon).fontSize); //parseFloat changes the fontsize (which is string) to a float

        //new fond size of ballon
        balloon.style.fontSize = (current_size / 1.1) + "px";
    }
}