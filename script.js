window.onload = () => {
    const polygon = document.getElementById("polygon");
    const polygonGreen = document.getElementById("polygon-green");
    const checkmark = document.getElementById("checkmark");
    const answerInput = document.getElementById("answer-input");
    const answerButton = document.getElementById("answer-button");
    const enterText = document.getElementById("enter-text");
    const thereIsAHint = document.getElementById("there-is-a-hint");
    
    var numOfHints = 0;
    
    answerButton.addEventListener("click", () => {
        const answer = answerInput.value;
        if (answer === "hint" || answer === "Hint" || answer === "HINT") {
            numOfHints++;
            answerInput.value = "";
            console.log(numOfHints);
        } else if (answer === "answer") {
            polygonGreen.style.visibility = "visible";
            polygonGreen.style.opacity = 1;

            checkmark.style.visibility = "visible";
            checkmark.style.opacity = 1;
            checkmark.style.scale = 1;

            answerInput.style.border = "5px solid #0d0"
            answerInput.style.color = "#0d0"
            answerInput.readOnly = true;
        } else {
            answerInput.style.animation = "answer-wrong 0.5s 1";
            setTimeout(() => {
                answerInput.style.animation = "";
            }, 0.30 * 1000)
        }
    })
}


