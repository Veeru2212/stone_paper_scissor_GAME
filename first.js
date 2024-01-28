
let compscore=0;
let userscore=0;

const option =document.querySelectorAll(".box");
const mesg=document.querySelector("#mesg");


const user_score_box=document.querySelector("#x");
const comp_score_box=document.querySelector("#y");




////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const  computer = ()=> {
    const options= ["stone" ,"paper", "scissor"];
    const index=Math.floor(Math.random()*3);
    
    return options[index];
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const mesgbox = (values,userinput,compchoice) =>{
      

    if(values==true)
    {
        userscore++;
        user_score_box.innerText=userscore;
        mesg.innerText=`YOU WON ! YOUR ${userinput} DEFEATES OPPONENTS ${compchoice}`;
        mesg.style.backgroundColor="green";
    }
    else
    {
        compscore++;
        comp_score_box.innerText=compscore;
        mesg.innerText=`YOU LOST ! OPPONENTS ${compchoice} DEFEATES YOUR ${userinput}`;
        mesg.style.backgroundColor="red";
    }

    
           
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Game=(userinput)=>{
    let values;
    const compchoice=computer();
     //console.log(compchoice);
    // console.log(userinput);
    if(userinput===compchoice)
    {
        mesg.innerText=`DRAW`;
        mesg.style.backgroundColor="blue";
    }
   
    else{
        values=true;
        if(userinput==="stone")
        {
            if(compchoice==="scissor")
            values=true;
            else
            values=false;
            
        }

        else if(userinput==="paper")
        {
            if(compchoice==="stone")
            values=true;
            else
            values=false;
        }

        else if(userinput==="scissor")
        {
            if(compchoice==="paper")
            values=true;
            else
            values=false;
        }
    }

    mesgbox(values,userinput,compchoice);


}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

option.forEach((box) =>{
    box.addEventListener("click" ,()=>{
        const userinput=box.getAttribute("id");
        Game(userinput);
    })
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////