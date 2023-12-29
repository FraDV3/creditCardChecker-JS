// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:


// *** 3 *** \\

const validateCred = arr => {
  // Makes a copy of the array
  arr = arr.slice(); 

  for (let i = arr.length - 2; i >= 0; i = i - 2){
    // Multiply any "even index" times 2
    arr[i] *= 2; 

    if (arr[i] > 9){
      // Subtracting '9' from any index bigger than '9'
      arr[i] -= 9; 
    }
  }
  // This variable keeps the total of avari digit of the array
  let sum = 0;

  //For loop sums all the elements of the array
  for (let j = 0; j < arr.length; j++){
    sum += arr[1];
  }

  //If total divided by 10 gives a reminder === 0 the condition is true
  return sum % 10 === 0;
};

for (let k = 0; k < batch.length; k++){
  console.log(validateCred(batch[k]));
};

// *** 4 *** \\

const findInvalidCards = arr => {
  // This array stores the invalid arrays
  let invalidCards = [];

  // This for loop iterates through the arrays
  for (let l = 0; l < arr.length; l++){
    
    // Evaluates false conditions
    if (validateCred(arr[l]) === false){
      
      // All the false conditions are pushed through the invalidCards array
      invalidCards.push(arr[l]);
    }
  }
  
  return invalidCards;
}

let invalidCards = findInvalidCards(batch);

// Prints all invalid credit card numbers inside an array
console.log(invalidCards);

// *** 5 *** \\

const invalids = invalidCards;

const invalidCardCompanies = invalidCardList => {
    // Creating array to store invalid card Companies 
    let invalidCompanies = [];
    
    // Switch case to determine card Companies
    invalidCardList.forEach(card => {
        
      switch (card[0]) {
            case 3 :
                invalidCompanies.push('Amex');
                break;
            case 4:
                invalidCompanies.push('Visa');
                break;
            case 5:
                invalidCompanies.push('Mastercard');
                break;
            case 6:
                invalidCompanies.push('Discover');
                break;
            default:
                invalidCompanies.push('Company not found');
        }
    });
    
    // This function finds duplicates in the array
    const uniqueCompanies = arr => invalidCompanies.filter((item, index) => invalidCompanies.indexOf(item) == index);

    const duplicateCompany = uniqueCompanies(invalids);

    // Prints all the CC Companies with invalid numbers (avoiding duplicates)
    console.log("Invalid Credit Card Companies: " + duplicateCompany.join(' - ') + ".");

    return invalidCompanies;
}

// Prints all the CC Companies with invalid numbers inside an array (including duplicates)
console.log(invalidCardCompanies(invalids));