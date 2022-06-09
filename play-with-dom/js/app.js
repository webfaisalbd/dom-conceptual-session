const allButton = document.getElementsByClassName('button-test');
// console.log(allButton);

const singleButton = document.getElementById('singleButton');
// console.log(singleButton);
// id ta ekta object er moton. tai amra eita k dot diye access korte pari.
// Jemon: 
// document.getElementById('singleButton').style.color = 'blue';
// eikhane dot diye style diye dilam 



// but clss ta kintu object na. eita ekta htmlCollection like array.
// index diye likhte pari.
// jemon 
// console.log(allButton[0]);
// array k amra loop calaite pari.

// for (const button of allButton){
//      console.log(button);  
// }


for(const button of allButton){
    button.addEventListener('click',(e)=>{
        // console.log(e.target);
        // console.log(e.target.parentNode);

        if(e.target.id == 'singleButton'){
           document.getElementById('myTitle').style.color = 'green';
        }
        else {
            document.getElementById('myTitle').style.color = 'red';
        }
    })
}

// event ekta object , jar vitor target thake.
// event.target 
// event.target.parentNode






