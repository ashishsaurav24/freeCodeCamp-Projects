const userInput = document.getElementById("text-input")
const checkPalindromeButton = document.getElementById("check-btn")
const resultDiv = document.getElementById("result")

const checkForPalindrome= (input) =>{
    //Declaring a new variable to show the output later
    const originalInput = input; 

    if (input === ''){
        alert("Please input a value")
        return;
    }
    
    //Remove previous result
    resultDiv.replaceChildren();
    
    //Replacing all the non-allowed characters. Regex- [^] means everything except characters inside array
    const lowerCaseString = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase()
    //Print the result after checking through a ternary operator. 
    let resultMsg = `<strong>${originalInput}</strong> ${lowerCaseString === [...lowerCaseString].reverse().join('') ? 'is' : 'is not'} a palindrome`
    
    //Create a 'p' element a print the output
    const pTag = document.createElement("p");
    pTag.className = "user-input";
    pTag.innerHTML= resultMsg;
    resultDiv.appendChild(pTag)

    resultDiv.classList.remove('hidden');

}

checkPalindromeButton.addEventListener('click', ()=>{
    checkForPalindrome(userInput.value);
    userInput.value=""
})

userInput.addEventListener('keydown', e=>{
    if (e.key === 'Enter'){
        checkForPalindrome(userInput.value);
        userInput.value="";
    }
})
