let text = document.querySelector("h1");
let buttons = document.querySelectorAll(".button");

// console.log(buttons);

buttons.forEach((n) => {

    // console.log(n);
    n.addEventListener('click', (e) => {     // parameter " e " represents the current clicked colored box, also arrow function is used here

        let selectedColor = e.target.dataset.color;
        switch (e.target.id) {

                case "blue":
                    text.style.color = selectedColor;
                    break;
                
                case "red":
                    text.style.color = selectedColor;
                    break;

                case "yellow":
                    text.style.color = selectedColor;
                    break;

                case "green":
                    text.style.color = selectedColor;
                    break;
            }
    })
})

    
