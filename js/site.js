//get the values from the UI

function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value
    
    //we need to validare our input
    //parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    
    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        //calling generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        //calling displayNumbers
        displayNumbers(numbers);
    
    }else{
        alert("You must enter integers")
    }


}

//generatenumbers from the start value to the end value
//logic function(s)
function generateNumbers(sValue, eValue){

    let numbers = [];

    //we want to get all numbers from start to end
    for (let index = sValue; index <= eValue; index ++) {

        numbers.push(index);
    }

    return numbers;

}


//display the numbers and mark even numbers bold
//display of view functions
function displayNumbers(numbers){
        
    let templateRows = "";
        
    for (let index = 0; index < numbers.length; index++){
        
        let className = "even";

        let number = numbers[index];

        if(number % 2 == 0){
            className = "even";
        }
        else{
            className = "odd";
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;

}