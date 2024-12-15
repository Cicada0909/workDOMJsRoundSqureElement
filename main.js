// cosnt arrowfo = (a, b) => a + b;

// cosnt arrowfo = (num) => num % 2 == 0;

// const arr = [53, 16, 7, 1];

// const filteredArr = arr.filter((num, i) => num > 15);

// console.log(filteredArr);

// const textInput = document.querySelector("#text");
// const yesBtn = document.querySelector("#yes");
// const noBtn = document.querySelector("#no");

// console.log(textInput.value);
// console.log(yesBtn.checked);
// console.log(yesBtn.value);

// const eventFuction = () => {
//     console.log("Clicked");
    
// }

// const getTextFromInput = () => {
//     console.log(textInput.value);
// }

// const dblClick = () => {
//     console.log("Double Click");
// }

// const focus = () => {
//     console.log("Focused");
// }

// textInput.addEventListener("click", eventFuction);

// textInput.addEventListener("input", getTextFromInput);

// yesBtn.addEventListener("dblclick", dblClick);

// textInput.addEventListener("focus", focus);

const bgColorInp = document.querySelector("#bg-color-input");
const textColorInp = document.querySelector("#text-color-input");
const borderInp = document.querySelector("#border-input");

const changeBtn = document.querySelector("#change-btn");

const boxElem = document.querySelector(".box");

changeBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const bgColor = bgColorInp.value;
    const textColor = textColorInp.value;
    const border = borderInp.value;

    boxElem.style.backgroundColor = bgColor;
    boxElem.style.color = textColor;
    boxElem.style.border = border;

    
});

const widthBlock = document.querySelector("#width");

const roundBlock = document.querySelector("#Round");
const SquareBlock = document.querySelector("#Square");


widthBlock.addEventListener("input", () => {
    const width = widthBlock.value;
    boxElem.style.width = width + "px";
    boxElem.style.height = width + "px";
})


const changeBoxType = () => {
    const roundBlockStatus = roundBlock.checked;
    const SquareBlockStatus = SquareBlock.checked;
    console.log(roundBlockStatus);
    

    if (roundBlockStatus) {
        boxElem.classList.add("round");
        boxElem.classList.remove("squre");
    } else {
        boxElem.classList.add("squre");
        boxElem.classList.remove("round");
    }
    
}

roundBlock.addEventListener("click", changeBoxType);
SquareBlock.addEventListener("click", changeBoxType);







