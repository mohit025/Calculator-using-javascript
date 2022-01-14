const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');
for(let btn of buttons){
    btn.addEventListener('click',(e)=>{
       let buttonText=e.target.innerText;
      if(buttonText=='X'){
          screen.value+='*';
      }
      else if(buttonText =='C') {
          screen.value="";

      }
      else if(buttonText =='=') {
          try{
        screen.value=eval(screen.value);
          } catch(e){
              
              screen.value="INVALID OPERATION";


              console.log(e.message);
          }
    }
    else{
        screen.value+=buttonText;
    }

    });
}   