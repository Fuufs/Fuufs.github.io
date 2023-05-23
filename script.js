let clickCounter = document.getElementById("clickCounter");
let counter = 0;
let slider = document.getElementById("slider");
let sliderText = document.getElementById("sliderText");
let floppaButton = document.getElementById("floppaButton");

slider.addEventListener("input", () => {
    sliderText.innerText = `Volume ${slider.value}%`;
})

function floppaClick() {
    let sound = new Audio("floppaSound.mp3");
    sound.volume = slider.value / 100;
    sound.play();
    clickCounter.innerText = `Floppa has been pressed ${counter} times`;
    counter++;
}

document.addEventListener("keydown", (keyEvent) => {
    console.log(keyEvent.ctrlKey);
    if (keyEvent.key == '`' && keyEvent.ctrlKey) {
        let result = prompt("Amount");
        
        if (isNaN(parseInt(result))) {
            alert("fuck you");
            return;
        }
        counter += parseInt(result);
        clickCounter.innerText = `Floppa has been pressed ${counter} times`;
    }
})
floppaButton.addEventListener("click", floppaClick);