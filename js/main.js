for (i=1; i<=100; i++){
    
    //Red squares with i%3 and i%5 =0
    if(i%3 == 0 && i%5 == 0){
        console.log("FizzBuzz");

        document.getElementById("container-for-squares").innerHTML += `
        <div class="square-red-fizzbuzz">
            <p>FizzBuzz</p>
        </div>
        `;
    
    //Yellow square with i%3 = 0
    } else if(i%3 == 0){
        console.log("Fizz");

        document.getElementById("container-for-squares").innerHTML += `
        <div class="square-yellow-fizz">
            <p>Fizz</p>
        </div>
        `; 

    //orange square with i%5 = 0
    } else if(i%5 == 0){
        console.log("Buzz");

        document.getElementById("container-for-squares").innerHTML += `
        <div class="square-orange-buzz">
            <p>Buzz</p>
        </div>
        `;
        
    //white square with i%5 and i%3 != 0
    } else{
        console.log(i);

        document.getElementById("container-for-squares").innerHTML += `
        <div class="square-white">
            <p>${i}</p>
        </div>
        `;
    }

}