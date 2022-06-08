const N = '((())'; // Input values
const stack = []; // We declare an array to wrap open brackets after iterating through the string 
let result = true; 


// Loop through a string for
function iterationBrackets(){
    for(i = 0; i < N.length; i++){
        // Checking if the closing parenthesis occurs first
        if(N[0] == ')'){
            // Write values to the result false
            result = false;
            // и останавливаем цикл
            break;
        }else if (N[i] == '('){
            // Pushing a parenthesis to the end of the stack
            stack.push(N[i]);
        } else if(N[i] == ')'){
            comparisonsBracket(N[i])
        }
    }
    // Create a check that the array is not empty
    if(stack.length !== 0){
        result = false;
    }
}

// Create a function to compare parentheses
function comparisonsBracket(closeBracket){
    // We take the last values 
    openBracket = stack.pop();
    if(openBracket == '(' && closeBracket == ')'){
        result = true;
    } else{
        result = false;
    }

}

function bracketResult(){
    if (result == true){
        console.log('YES')
        console.log(stack)
    }else {
        console.log('NO')
        console.log(stack)
    }
}


iterationBrackets()
bracketResult()
