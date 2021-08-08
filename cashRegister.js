

var billAmt = document.querySelector("#id-bill-amount-input");
var nextBtn = document.querySelector("#id-next-btn");
var cashGiven = document.querySelector("#id-cash-given-input");
var checkBtn = document.querySelector("#id-check-btn");
var errorMessage = document.querySelector("#error-message");
var cashGivenDiv = document.querySelector(".div-cashGiven");

var notesAvailable = [2000,500,100,50,20,10,1];
var notes = document.querySelectorAll("#id-no-of-notes");

nextBtn.addEventListener('click', function nextClicked(){
    hideErrorMessage();
    if(billAmt.value>0){
        console.log(billAmt.value);
       // displayCashGivenDiv();
    }else{
        console.log("inside else");
        displayErrorMessage("Enter amount greater that 0");
    }
} )



checkBtn.addEventListener('click', function checkClicked(){
    
    var cash = parseInt(cashGiven.value);
    var bill = parseInt(billAmt.value);
    
    if(cash>0 && cash > bill){
        var amountToReturn = cash - bill;

        if(amountToReturn>0){
            calculateNoOfNotes(amountToReturn);
        }else if(amountToReturn ==0){
            displayErrorMessage("No need to return any amount.");
        }else{
            displayErrorMessage("cash given is less than bill amount.");
        }
        

    }else{
        displayErrorMessage("enter valid cash given");
    }
} )

function displayCashGivenDiv(){
    cashGivenDiv.style = "block";
}


function displayErrorMessage(message){
    errorMessage.style = "block";
    errorMessage.innerText = message;
}

function hideErrorMessage(){
    console.log("inside hide error msg");
    errorMessage.style = "display : none";
}

function calculateNoOfNotes(amountToReturn){
    console.log("inside calcualteNoOfNotes");
    for(let i=0 ; i<notesAvailable.length ; i++){

        var noOfnotes = Math.trunc(amountToReturn/notesAvailable[i]);
        amountToReturn = amountToReturn%notesAvailable[i];
        
        notes[i].innerText=noOfnotes;

    }

}