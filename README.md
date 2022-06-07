# `DOM Related Topics`


```javascript
///// Select Element 
//// Id
const element = document.getElementById('id');
// Id should be unique
// If two or more elements with the same id exist, getElementById() return first id.
// jehetu ekta select kore, tai eita return kore ekta object.
const obj ={
    color: 'red',
    backgroundColor: 'black'
}
obj.color 
// jehetu ekta Object, tai dot diye select kora jay, jemon obj.color


////class
const elements = document.getElementsByClassName('class');
// class returns an HTMLCollection.
// eita ekta array like object, tai dot diye access kora jay na. for loop calaite hoy.

for(let element of elements){
    element.style.color = 'red';
}


// Get value of element 
// kokhon value use korbo r kokhon innerText use korbo? 

// element jodi input othoba textarea hoy , tahole element.value nibo.
element.value; 


// h1, div, section , p  etc. tokhn element.innerText nibo.
element.innerText;


<h1>10</h1>
'10';
// it returns string
// so we have to make it  number using parseInt or parseFloat



document.getElementById('div').addEventListener('click', function(){
    console.log("click..");
})





///// Webpage er background and color change untill reload the page
document.body.style.background = '#1E293B';
document.body.style.color = '#94A3B8';





```







# `Add onclick handler directly or via javascript`


### Add Events Listener

```javascript


    <h4>Add Events Listener</h4>

    <button onclick="alert('Faisal')">Click Me</button>


    <br>
    <br>
    <p>System 1</p>
    <button onclick="document.body.style.backgroundColor='yellow'">Change BG-Color</button>
    
    
    <br>
    <br>
    <p>System 2</p>
    <button onclick="changeBgLightblue()">Change BG-Color:Lightblue</button>
    
   



    <script>
        function changeBgLightblue(){
            document.body.style.backgroundColor = 'lightblue'
        }

       

    </script>

    
```