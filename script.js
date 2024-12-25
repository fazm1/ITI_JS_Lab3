function question1(sentence){
    var alphabets = " abcdefghijklmnopqrstuvwxyz".split('');
    var newSentence = ""
    for(var i = 0; i < sentence.length; i++){
        if(sentence.toLowerCase().charAt(i).match(/[a-z]/i)){
            for ( var j = 1; j < alphabets.length; j++){
                if(sentence.toLowerCase().charAt(i) == alphabets[j]){
                    newSentence += j + " ";
                }
            }
            
        }
    }
    return newSentence
}

function question2(sentence){
    var arr = sentence.split(' ');
    var temp = 0;  
    for(var i = 0; i < arr.length; i++){
        for(var j = i+1; j < arr.length; j++){
            if(arr[i].match(/\d+/g) > arr[j].match(/\d+/g)){
                temp = arr[i];    
                arr[i] = arr[j];    
                arr[j] = temp;
            }
        }
    }
    return arr
}

function question3(number1, number2){
    if(arguments.length == 2){
        return number1*number2
    }

        return(
            function(number2){
                return number2*number1
            }
        )

}

function question4(amount){
    answer = 7;
    guesses = 0;
    return(
        function(y){
            if(guesses <= amount){
                if(y == answer){
                    guesses = amount
                    return("You got it!")
                }
                else if(amount == guesses){
                    return("No more guesses the answer was " + answer)
                }
                else if(y < answer){
                    guesses++
                    if(amount == guesses){
                        return("No more guesses the answer was " + answer)
                    }
                    return("Your guess is too low!")
                }
                else if(y > answer){
                    guesses++
                    if(amount == guesses){
                        return("No more guesses the answer was " + answer)
                    }
                    return("Your guess is too high!")
                }
            }
    }
)
}


console.log(question1("The sunset sets at twelve o' clock."));
console.log(question2("4of Fo1r pe6ople g3ood th5e the2"));

z=question3(3)
console.log(z(5));

var q4=question4(3)
console.log(q4(1));
console.log(q4(2));
console.log(q4(7));
console.log(q4(1));

