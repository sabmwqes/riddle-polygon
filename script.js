window.onload = () => {
    const polygon = document.getElementById("polygon");
    const polygonGreen = document.getElementById("polygon-green");
    const checkmark = document.getElementById("checkmark");
    const answerInput = document.getElementById("answer-input");
    const underline = document.getElementById("underline");
    const answerButton = document.getElementById("answer-button");
    const enterText = document.getElementById("enter-text");
    const thereIsAHint = document.getElementById("there-is-a-hint");
    const first = document.getElementsByClassName("first");
    const second = document.getElementsByClassName("second");
    const third = document.getElementsByClassName("third")
    
    var numOfHints = 0;
    
    async function sha256(text){
        const uint8  = new TextEncoder().encode(text)
        const digest = await crypto.subtle.digest('SHA-256', uint8)
        return Array.from(new Uint8Array(digest)).map(v => v.toString(16).padStart(2,'0')).join('')
    }

    appearHints = (HTMLCollection) => {
        [...HTMLCollection].forEach(element => {
            element.style.visibility = "visible";
            element.style.opacity = 1;
        });
    }

    answerButton.addEventListener("click", async() => {
        const answer = answerInput.value;
        const hashedAnswer = await sha256("Garganacl" + answer + "NoRainbowTable");
        // console.log(hashedAnswer);
        if (answer === "hint" || answer === "Hint" || answer === "HINT") {
            numOfHints++;
            answerInput.value = "";
            if (numOfHints === 1) {
                appearHints(first);
            }else if (numOfHints === 2) {
                appearHints(second);
            }else if(numOfHints === 3) {
                appearHints(third);
            }else {
                answerInput.value = [":(", "( ﾟдﾟ )彡", "(´・ω・｀)", "_(:3 」∠)_", "🤔"][Math.floor(Math.random() * 5)];
            }
        // Nice try! but no cheating here.
        } else if (hashedAnswer === "25e83873f0f012b81fbe146a722e24a2d8adbc32f399370a9d9364a209b7c530"
            || hashedAnswer === "d13a045221d8e4a1b82deeb4bb1c1eefcb2cea5d2faf2f58aa7e10855b61cae9"
            || hashedAnswer === "8b47b404c64ebc9343658f46325cd9338a34d5c2c90c08b74ffa522c859cc3d9"
        ) {
            polygonGreen.style.visibility = "visible";
            polygonGreen.style.opacity = 1;

            checkmark.style.visibility = "visible";
            checkmark.style.opacity = 1;
            checkmark.style.scale = 1;

            answerInput.style.border = "5px solid #0d0"
            answerInput.style.color = "#0d0"
            answerInput.readOnly = true;

            underline.style.opacity = 0;
            enterText.style.opacity = 0;
            thereIsAHint.style.opacity = 0;
        } else {
            answerInput.style.animation = "answer-wrong 0.5s 1";
            setTimeout(() => {
                answerInput.style.animation = "";
            }, 0.30 * 1000)
        }
    })
}


