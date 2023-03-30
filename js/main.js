for (i=1; i<=100; i++){
    
    if(i%3 == 0 && i%5 == 0){
        document.getElementById("container-for-squares").innerHTML += `
        <div class="square-red-fizzbuzz">
            <p>FizzBuzz</p>
        </div>
        `;

    } else if(i%3 == 0){
        document.getElementById("container-for-squares").innerHTML += `
        <div class="square-yellow-fizz">
            <p>Fizz</p>
        </div>
        `; 

    } else if(i%5 == 0){
        document.getElementById("container-for-squares").innerHTML += `
        <div class="square-orange-buzz">
            <p>Buzz</p>
        </div>
        `;

    } else{
        document.getElementById("container-for-squares").innerHTML += `
        <div class="square-white">
            <p>${i}</p>
        </div>
        `;
    }

}