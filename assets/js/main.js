//DATI PRINCIPALI
const maxNumber = 100;
let finalOutput = null;

//ELEMENTO
const rowOfContainer = document.querySelector('.row');

//CONTATORE DA 1 A 100
for(let i = 1; i <= maxNumber; i++){

 
    const cardCreated = document.createElement('div');
    cardCreated.className = 'card';
  
    
    if(!(i % 3)){
      if((!(i % 3)) && (!(i % 5))){
        finalOutput = "FizzBuzz"
        cardCreated.classList.add('fizzbuzz');
        console.log(finalOutput);
      }else{
        finalOutput = "Fizz"
        cardCreated.classList.add('fizz');
        console.log(finalOutput);
      }
    }else if(!(i % 5)){
      finalOutput = "Buzz"
      cardCreated.classList.add('buzz');
      console.log(finalOutput);
    }else{
      finalOutput = i
    }
    
    cardCreated.innerHTML = finalOutput
    rowOfContainer.append(cardCreated);
  }
  
