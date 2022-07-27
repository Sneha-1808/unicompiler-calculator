let string = "";
let string1="";
let buttons=document.querySelectorAll('button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML>='0' && e.target.innerHTML<='9' || e.target.innerHTML==','){
            string+=e.target.innerHTML;
            string1+=e.target.innerHTML;
            document.getElementById("output").innerText=string1;
        }else if((e.target.innerHTML=='×')){
            string+="*";
            document.getElementById("history").innerText=string;
            string1="";
            document.getElementById("output").innerText="";
        }else if(e.target.innerHTML=='÷'){
            string+="/";
            document.getElementById("history").innerText=string;
            string1="";
            document.getElementById("output").innerText="";
        }
        else if(e.target.innerHTML=='='){
            string=eval(string);
            document.getElementById("output").style.fontSize='40px';
            document.getElementById("output").innerText=string;
            document.getElementById("history").innerText="";
            
        }else if(e.target.innerHTML=='AC'){
            document.getElementById("output").innerText="";
            document.getElementById("history").innerText="";
            string="";
            string1="";
        }
        else{
            string+=e.target.innerHTML;
            document.getElementById("history").innerText=string;
            string1="";
            document.getElementById("output").innerText="";
        }

        
        console.log(string);
    })
})