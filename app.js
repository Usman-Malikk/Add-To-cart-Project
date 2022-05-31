// Oh JAVA PLEASAE HAVE MERCY ON ME :()




// Select Itemss

let alertpara = document.querySelector(".alert")
let form = document.querySelector("#form")
let input = document.querySelector('#input')
let submitbtn = document.querySelector("#butsub")
let grocerylist = document.querySelector(".groceryitemss")
let grocercont = document.querySelector(".grocerylist")
let editflag = false
let clearbtn = document.querySelector("#clearbtn")

let edititm;

// Event listeners to call function

form.addEventListener("submit", clickform)
clearbtn.addEventListener("click", clearbtnn)










// Functions

function clickform(e) {
    // to Prevent browser to load
    e.preventDefault()

    // we will check 3 conditions then execute the function more
    let value = input.value

    if (value !== "" && editflag !== true) {


        displaypara("Item added", 'success')
        Setdefault()
        addelement(value)
    }

    else if (value !== "" && editflag == true) {
edititm.innerHTML = value;
displaypara('Item Edited','success')
        Setdefault()

    }
    else {

        displaypara("Enter something please", 'danger')
        Setdefault()
    }


}


function displaypara(text, action) {
    alertpara.innerHTML = text
    alertpara.classList.add(`alert-${action}`)
    alertpara.style.visibility = 'visible'
    setTimeout(function () {
        alertpara.innerHTML = ""
        alertpara.style.visibility = 'hidden'
        alertpara.classList.remove(`alert-${action}`)

    }, 1000)
}
function Setdefault() {
    input.value = ""
    submitbtn.innerHTML= "Submit"
    editflag=false
}



function addelement(value) {
    let items = document.createElement('article')
    items.classList.add('groceryitems');
    items.innerHTML = `<p id="gitem">${value}</p>
    <div class="icons"><ion-icon name="create-outline" class="edit" ></ion-icon>
        <ion-icon class="trash" name="trash-outline"></ion-icon></div>`
    document.querySelector('.groceryitemss').appendChild(items)
    // console.log(items)
    document.querySelector(".grocerylist").style.visibility = "visible"
    let trashbin = items.querySelector(".trash")
    let edit = items.querySelector(".edit")
trashbin.addEventListener("click",trash)
edit.addEventListener("click",Editt)


}
function clearbtnn() {
    let elems = document.querySelectorAll(".groceryitems")


    if (elems.length > 0) {


        elems.forEach(function (i) {
            document.querySelector('.groceryitemss').removeChild(i);


        })


    }

    document.querySelector(".grocerylist").style.visibility = "hidden";
    displaypara("Item cleared", 'danger')


}
// Delete Btn
function trash(a) {
let it=a.currentTarget.parentElement.parentElement
let elements=document.querySelector('.groceryitemss')
elements.removeChild(it)
let elems = document.querySelectorAll(".groceryitems")
console.log(elems.length)


displaypara('Item Deleted','danger')
// console.log(it.length)
if (elems.length=== 0)
{
    document.querySelector(".grocerylist").style.visibility = "hidden";
}
}
// Edit btn
function Editt(a) {
    edititm = a.currentTarget.parentElement.previousElementSibling;
 input.value= edititm.innerHTML;
 submitbtn.innerHTML= "Edit"
 editflag=true
 
    }

