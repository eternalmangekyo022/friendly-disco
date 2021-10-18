const handleButtonClick = e => {
    const regex = /x/ig
    let value = e.target.querySelector('p').innerHTML
    let inputArea = document.querySelector("#input-area")
    let lastInput = inputArea.innerHTML.slice(-1)
    const expressions = ["+", "-", "x", "/", "."]
    // if reset: 
    if(value === "RESET") { inputArea.innerHTML = "" }
    // if "="
    else if(value === "=") {
        if(inputArea.innerHTML.includes("x")) {
            inputArea.innerHTML = eval(inputArea.innerHTML.replaceAll(regex, "*"))
        } else if(inputArea.innerHTML !== ""){
            inputArea.innerHTML = eval(inputArea.innerHTML)
        }
    } else if(value === "DEL") {
        if(inputArea.innerHTML !== "") {
            inputArea.innerHTML = inputArea.innerHTML.slice(0, -1)
        }
    }
    // if number and the last string is not in list
    else if(!isNaN(value) || !expressions.includes(lastInput)) {
        // if last 0 && i type num
        if(lastInput === "0" && inputArea.innerHTML.length === 1 ) {  }
        else { inputArea.innerHTML += value }
    }

}

let normalButtonContainer = document.querySelector(".button-normal-container")
const normalButtons = ["7", "8", "9", "DEL", "4", "5", "6", "+", "1", "2", "3", "-", ".", "0", "/", "x"]
for(let i = 0; i < 16; i++) {
    let button = document.createElement("button")
    button.className = "button-normal"

    let p = document.createElement("p")
    p.innerHTML = normalButtons[i]
    
    if(normalButtons[i] === "DEL") { p.style = "color: white;"; button.style = "background-color: hsl(225, 21%, 49%); box-shadow: 0 3px 0 0 hsl(224, 28%, 35%);" }
    
    button.onclick = handleButtonClick
    button.appendChild(p)
    normalButtonContainer.appendChild(button)
}

let bigButtonContainer = document.querySelector(".button-big-container")
for(let i of ["RESET", "="]) {
    let button = document.createElement("button")
    button.className = "button-big"

    let p = document.createElement("p")
    p.style = "color: white;";
    p.innerHTML = i

    if(i === "RESET") { button.style = "background-color: hsl(225, 21%, 49%); box-shadow: 0 3px 0 0 hsl(224, 28%, 35%);" }
    else { button.style = "background-color: hsl(6, 63%, 50%); box-shadow: 0 3px 0 0 hsl(6, 70%, 34%);" }
    
    button.onclick = handleButtonClick
    button.appendChild(p)
    bigButtonContainer.appendChild(button)
}
