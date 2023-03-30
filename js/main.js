for (i=1; i<=100; i++){
    
    if(i%3 == 0 && i%5 == 0){
        console.log("FizzBuzz");

        document.getElementById("container-for-squares").innerHTML += `
        <div class="square-red-fizzbuzz">
            <p>FizzBuzz</p>
        </div>
        `;

    } else if(i%3 == 0){
        console.log("Fizz");

        document.getElementById("container-for-squares").innerHTML += `
        <div class="square-yellow-fizz">
            <p>Fizz</p>
        </div>
        `; 

    } else if(i%5 == 0){
        console.log("Buzz");

        document.getElementById("container-for-squares").innerHTML += `
        <div class="square-orange-buzz">
            <p>Buzz</p>
        </div>
        `;

    } else{
        console.log(i);

        document.getElementById("container-for-squares").innerHTML += `
        <div class="square-white">
            <p>${i}</p>
        </div>
        `;
    }

}