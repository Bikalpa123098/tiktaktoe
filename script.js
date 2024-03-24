let boxes=document.querySelectorAll(".boxes");
let reset=document.querySelector("#reset");
let message=document.querySelector("#message");
let turn=document.querySelector("#turn");
let flag=0;
let draw=1;
let patterns=[
    [0,1,2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  let disabledBox=()=>{
    for (let box of boxes) {
        box.disabled=true;
        box.style.backgroundColor="pink";
        reset.innerText="New Game";
        
        turn.innerText="Game over";
    }
}
boxes.forEach((box) => {
    box.addEventListener('click',()=>{
        box.style.backgroundColor = "pink";
        box.style.color = "white";
        console.log("hi");
        box.disabled = true;
        
        if(flag%2==0){
            turn.innerText="O turns";
            box.innerText="X";
            flag++;
        }else{
            turn.innerText="X turns";
            box.innerText="O";
            flag++;
        }winner();
    })
});
let winner=()=>{
   patterns.forEach(p => {
    if((boxes[p[0]].innerText===boxes[p[1]].innerText)&& (boxes[p[1]].innerText===boxes[p[2]].innerText)&&(boxes[p[0]].innerText !=="") ){
       disabledBox();
       message.innerText=`${boxes[p[0]].innerText} won `;
     draw=0;
    }
    if(draw==0){   
        boxes.disabled = true;
        console.log("bye");
    }
    if(draw==1 && flag==9){
        reset.innerText="New Game";
        turn.innerText="Game over";
       message.innerText=`I guess it is draw `;
    }
   });
    }


    function resetPage() {
        window.location.reload(true);
    }