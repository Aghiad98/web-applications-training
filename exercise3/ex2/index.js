
const ExpenseInput = document.getElementById("expenseinput")
const AmountInput =document.getElementById("amountinput")
const AddBtn = document.getElementById("addBtn")
const items = document.getElementById("items")
const totalAmount =document.getElementById("totalAmount");
let Expenses = JSON.parse(localStorage.getItem("Expenses")) || [];


 AddBtn.addEventListener("click",addexpens);
renderExpense()

function addexpens(){
    let expense = ExpenseInput.value.trim();
    let amount = AmountInput.value;
    
    if(expense==""||amount==""){
        alert("please enter data")
        return;
    }
    if(expense.length>20){
        alert("the expense must be less than 20 letters")
        return;
    }
    if(amount <=0){
        confirm("you should enter positive number")
        return
    }
    if(Expenses.length > 7){
        confirm("you can't enter more than 7 expens")
        return
    }
    Expenses.push({
        expense: expense,
        amount: amount
    })
    
    saveItems()
    renderExpense()
   
    ExpenseInput.value="";
    AmountInput.value="";
 }
  function renderExpense(){
    items.innerHTML=""
     
       
    Expenses.forEach((item,index)=>{
        let row = document.createElement("tr")
        
        row.innerHTML=`
        <td>${index + 1}</td>
        <td>${item.expense}</td>
        <td>${item.amount} $</td>
         <td>
                <button
                class="delete"
                onclick="deleteExpense(${index})">
                    Delete
                </button>
            </td>
       `
        items.appendChild(row)
    });
     updateTotal();
  }
  
function saveItems(){
    localStorage.setItem("Expenses",JSON.stringify(Expenses))
  }
function deleteExpense(index){
   if( confirm("Are You Sure ?")){
    Expenses.splice(index,1)
    saveItems();
    renderExpense();
   
   }
}
function updateTotal(){

    let sum = Expenses.reduce((total,item)=>{

        return total + Number(item.amount);

    },0);

    totalAmount.textContent = sum + " $";
}