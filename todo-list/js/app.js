let count = 0; 

document.getElementById('add-button').addEventListener('click', () => {
    count++;
    const inputValue = document.getElementById('input-value').value;
    
    if (inputValue == '') {
        alert('Please enter a value');
    }
    else {
        
        const mainContainer = document.getElementById('content-container');
        const tableContent = document.createElement('tr');
        tableContent.innerHTML = `
        <th>${count}</th>
        <td>${inputValue}</td>
        <td>
        <button class='btn btn-danger deleteBtn'>Delete</button>
        <button class='btn btn-success doneBtn'>Done</button>
        </td>

        `;
        mainContainer.appendChild(tableContent);
        document.getElementById('input-value').value = '';



        const deleteBtn = document.getElementsByClassName('deleteBtn');
        const doneBtn = document.getElementsByClassName('doneBtn');

        // delete Button 
        for(const button of deleteBtn){
            // console.log(button);
            button.addEventListener('click', (e)=>{
                e.target.parentNode.parentNode.style.display = 'none';
            })
        }


        // done button 
        for(const button of doneBtn){
            // console.log(button);
            button.addEventListener('click', (e)=>{
                e.target.parentNode.parentNode.style.textDecoration = 'line-through';
            })
        }


       

    }
})




