let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn = document.querySelector(".turn ");


let turnO = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const addDraw = () => {
    const newLocal = msg.innerText = 'Game is Draw 😠';
    msgContainer.classList.remove('hide');
}

const resetGame = () =>{
    trueO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0;
}


boxes.forEach((box) =>{
    box.addEventListener("click", () => {
++count;
  if(turnO){
    box.innerText = "O";
    turn.innerText = "Now X's turn";
    turnO = false;
  }
  else{
    box.innerText= "X";
    turn.innerText = "Now O's turn";
    turnO = true;
  }
  box.disabled = true;

  checkWinner();
  if(count == 9) {
    addDraw();
  }

    });
});

const disabledBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText= "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `congratulations 🥳 , Winner is ${winner}` ;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};



const checkWinner = () => {
    for(pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText
        console.log(pattern[0]);
        console.log(boxes[pattern[0]]);
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
           if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("Winner",pos1Val);
            showWinner(pos1Val);
           }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

