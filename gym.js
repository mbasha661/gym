function openDiaLog()
{
    let dialog=document.getElementById("students_dialog")
    dialog.open=true
    console.log(dialog)
}
function formsubmitted (event)
{
  let form=document.getElementById("LoginForm")

if(!form.checkValidity())
{
  event.preventDefault()
  event.stopPropagation()

}
 form.classList.add('was-validated')

 
}
function FormRest (event)
{
  event.preventDefault()
}
let Name='kens'
if (Name=="kns")
{
console.log("hello")
}
else
{
  console.log("not correct")

} 
// document.getElementById("if").innerHTML