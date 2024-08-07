let boxex = document.querySelectorAll(".box") ; 
let resetbtn = document.querySelector("#resetbtn") ; 

let newbtn = document.querySelector("#newbtn") ; 
let msgg = document.querySelector(".msgg")
let msg = document.querySelector("#msg") ;



let turnO = true ; 

let arr = [ [0,1,2]  , 
    [3,4,5] ,
    [6,7,8] ,
    [0,3,6] ,
    [0,4,8] ,
    [1,4,7] , 
    [2,5,8] , 
    [2,4,6]
] ; 

const resetgame = () =>{
    turnO = true ; 
    enableboxes() ; 
    msgg.classList.add("hide") ; 
}


boxex.forEach((box)=>{
    box.addEventListener("click" , ()=>{
        if(turnO){
            box.innerText = "O" ; 
            box.style.color = "Green" ; 
            turnO = false ; 
        }else{
            box.innerText = "X" ; 
            box.style.color = "Red" ; 
            turnO = true ; 
        }
        box.disabled = true ; 

        checkwin() ; 

    });
});


const disableboxes = () =>{
    for(let box of boxex){
        box.disabled = true ; 
    }
}


const enableboxes = () =>{
    for(let box of boxex){
        box.disabled = false  ; 
        box.innerText = ""; 
        box.style.background = "#ffffc7" ; 
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations , Winner is ${winner}` ; 
    
    msgg.classList.remove("hide") ; 
    disableboxes() ; 
}   


const showcolor = (one , two , three) =>{
    one.style.background = "rgb(162, 140, 144)" ; 
    two.style.background = "rgb(162, 140, 144)" ; 
    three.style.background = "rgb(162, 140, 144)" ;
}



const checkwin = () =>{
    for(let pattern of arr){
        let pos1 = boxex[pattern[0]].innerText ;
        let pos2 = boxex[pattern[1]].innerText ;
        let pos3 = boxex[pattern[2]].innerText ;
        let one = boxex[pattern[0]]
        let two = boxex[pattern[1]] 
        let three = boxex[pattern[2]] 
        
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1) ;
                showcolor(one , two , three) ; 
            }
            
        }
    }
}


newbtn.addEventListener("click" , resetgame) ; 
resetbtn.addEventListener("click" , resetgame) ; 