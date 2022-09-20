//Problem 1: Create a function to check if a number is Prime or Not
function checkprime(num){
    let number=0;
    for(i=0;i<=num;i++){
      if(num%i==0){
        number++;
      }
    }
    if(number==2){
      console.log(num,"is prime");
      
    }else {
      console.log(num,"not prime");
    }
    }
    checkprime(38);
    checkprime(41);