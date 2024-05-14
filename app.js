let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usersc=document.querySelector("#user-score");
const compsc=document.querySelector("#comp-score");
const hist=document.querySelector(".lstwinner");
let resetBtn = document.querySelector("#btn-reset");

//........................Show Winner...........................

const showWinner = (userWin,userchoice,compchoice,choice) =>{
    if (userWin) {
        userscore++;
        usersc.innerText=userscore;
        msg.style.backgroundColor="green";
        msg.style.color="black";
        msg.innerHTML=`You Win, ${userchoice} beats ${compchoice}`;
        if (userscore===5) {
            userscore=0;
            compscore=0
            usersc.innerText=userscore;
            compsc.innerText=compscore;
            msg.innerHTML="Play your move";
            msg.style.backgroundColor="black";
            msg.style.color="antiquewhite";
            hist.innerText="last winner";
            hist.innerText="  user";

        }
    }
    else{
        compscore++;
        compsc.innerText=compscore;
        msg.style.backgroundColor="red";
        msg.style.color="black";
        msg.innerHTML=`You lose, ${compchoice} beats ${userchoice}`;
        if (compscore===5) {
            userscore=0;
            compscore=0
            usersc.innerText=userscore;
            compsc.innerText=compscore;
            msg.innerHTML="Play your move";
            msg.style.backgroundColor="black";
            msg.style.color="antiquewhite";
            hist.innerText="last winner";
            hist.innerText="computer";

            // document.getElementsByClassName("choices").removeEventListener("click", choice);
            // choices.removeEventListener("click");
        }
    }
    
}

const drawgame = () =>{
    msg.innerHTML="Draw";
    msg.style.backgroundColor="black";
    msg.style.color="antiquewhite";
}

//.........................Computer Choice...............................

const gencompchoice = ()=>{
    const options=["Rock","Paper","Scissor"];
    const rnindex=Math.floor(Math.random()*3);
    return options[rnindex];
}

//.....................Check conditions........................

const playgame= (userchoice) =>{
    const compchoice=gencompchoice();  
    if (userchoice===compchoice) {
        drawgame();
    }
    else{
        let userWin=true;

        if (userchoice==="Rock") {
            // comp have scissor,paper
            userWin = compchoice==="Paper"?false:true;
        }
        else if (userchoice==="Paper") {
            // comp have scissor,rock
            userWin = compchoice==="Scissor"?false:true;
        }
        else{
            // comp have rock,paper
            userWin = compchoice==="Rock"?false:true;
        }

        showWinner(userWin,userchoice,compchoice);
    }

}

//.........................User choice...............................
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userchoice= choice.getAttribute("Id");
        playgame(userchoice);
    })
})

//............................Disable......................................


//.............................Reset button..............................

const resetbtn=()=>{
    userscore=0;
    usersc.innerText=userscore;
    compscore=0;
    compsc.innerText=compscore;
    msg.innerHTML="Play your move";
    msg.style.backgroundColor="black";
    msg.style.color="antiquewhite";
};
resetBtn.addEventListener("click",resetbtn);