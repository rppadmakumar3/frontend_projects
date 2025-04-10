const inputBox = document.getElementById("input-box")
const addBtn = document.getElementById("add-btn")
const container = document.getElementById("task-con")

addBtn.addEventListener('click', function () {
    const inputTxt = inputBox.value
    if (inputTxt == "") {
        alert("Enter Any Task")
    } else {
        const notes = document.createElement("div")
        notes.classList.add('row', 'd-flex', 'text-center', 'justify-content-center', 'align-items-center', 'border', 'border-secondary', 'rounded', 'p-4', 'my-4')
        notes.innerHTML = `<div class="col-2">
                    <input type="checkbox" id="check" class="form-check-input border border-primary">
                </div>
                <div class="col-6">
                    <p class="text-center m-0" id="task-txt">${inputTxt}</p>
                </div>
                <div class="col-4">
                    <button class="btn btn-danger" id="del-btn">DELETE</button>
                </div>`
        
        container.appendChild(notes)
        inputBox.value = ""

        const delBtn = notes.querySelector("#del-btn")
        delBtn.addEventListener('click', function(){
            notes.remove()
        })

        const taskText = notes.querySelector("#task-txt")

        const checkBoxEle = notes.querySelector("#check")
        checkBoxEle.addEventListener("change", function(){
            if(checkBoxEle.checked){
                taskText.style.textDecoration = "line-through"
            }else{
                taskText.style.textDecoration = "none"
            }
        })
    }
})