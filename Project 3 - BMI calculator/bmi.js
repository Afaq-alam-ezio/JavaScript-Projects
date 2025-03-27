let form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    // to prevent "post" or "get" method
    e.preventDefault();    

    // we will not take values of height and width on line 3 or before this eventt because 
    // "empty" values will get stored which will cause issues
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);

    if(height === "" || height < 0 || isNaN(height)){       // isNaN() is a modern approach, don't use if(height == NaN)

        document.querySelector("#results").innerHTML = `please enter a valid height, currently it is ${height}.`;
    }

    else if(weight === "" || weight < 0 || isNaN(weight)){

        document.querySelector("#results").innerHTML = `please enter a valid weight, currently it is ${weight}.`;
    }
    else{

        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        document.querySelector("#results").innerHTML = `<span>BMI is = <strong> ${bmi} </strong></span>`;

        if(bmi < 18.6){

            document.querySelector("#results").innerHTML += `<span> <br>you have low BMI, increase it.</span>`;
        }
        else if(bmi >= 18.6 && bmi <= 24.9){

            document.querySelector("#results").innerHTML += `<span> <br>you have normal BMI, maintain it.</span>`;
        }
        else{
            
            document.querySelector("#results").innerHTML += `<span> <br>you have high BMI, decrease it.</span>`;
        }
    }

})
